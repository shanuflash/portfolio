'use client';

import { useEffect, useMemo, useState } from 'react';
import { authClient } from '@/lib/client';
import { TextScramble } from '@/components/ui/text-scramble';
import {
  PageShell,
  Section,
  DiagonalDivider,
  TitleBlock,
} from '@/components/layout';

const StampButton = ({ children, onClick, href, primary = false }) => {
  const className = `inline-flex items-center px-4 py-2 text-[11px] tracking-[0.14em] uppercase border rounded-md select-none cursor-pointer transition-all duration-150 shadow-[0_2px_0_0] hover:translate-y-0.5 hover:shadow-none active:translate-y-0.5 active:shadow-none ${
    primary
      ? 'border-accent/40 bg-accent/10 text-accent shadow-accent/25'
      : 'border-foreground/20 text-muted-foreground shadow-foreground/10 hover:text-foreground'
  }`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

const Login = () => {
  const [ident, setIdent] = useState(null);
  const [reduced, setReduced] = useState(false);
  const [progress, setProgress] = useState({ line: 0, char: 0 });

  useEffect(() => {
    setReduced(matchMedia('(prefers-reduced-motion: reduce)').matches);

    const time = new Date().toTimeString().slice(0, 8);
    authClient
      .getSession()
      .then(({ data }) => {
        if (!data?.user) {
          setIdent({ status: 'anon', name: null, time });
        } else if (data.user.role === 'admin') {
          setIdent({ status: 'admin', name: data.user.name, time });
        } else {
          setIdent({ status: 'denied', name: data.user.name, time });
        }
      })
      .catch(() => setIdent({ status: 'anon', name: null, time }));
  }, []);

  const lines = useMemo(() => {
    if (!ident) return [];
    if (ident.status === 'admin') {
      return [
        `> identity confirmed: ${ident.name}`,
        '> clearance: ADMIN',
        '> welcome back. the sheet is yours.',
      ];
    }
    if (ident.status === 'denied') {
      return [
        `> identity confirmed: ${ident.name}`,
        '> clearance: NONE',
        '> this sheet remains sealed. incident logged (it wasn’t).',
      ];
    }
    return [
      `> access attempt logged — ${ident.time}`,
      '> route: /login — absent from every published index',
      '> no link leads here. you arrived on purpose.',
      '> identify yourself — or close the tab, and we both forget this happened.',
    ];
  }, [ident]);

  useEffect(() => {
    if (!lines.length) return;
    if (reduced) {
      setProgress({ line: lines.length, char: 0 });
      return;
    }
    setProgress({ line: 0, char: 0 });
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p.line >= lines.length) {
          clearInterval(interval);
          return p;
        }
        const current = lines[p.line];
        if (p.char < current.length) return { line: p.line, char: p.char + 1 };
        return { line: p.line + 1, char: 0 };
      });
    }, 18);
    return () => clearInterval(interval);
  }, [lines, reduced]);

  const doneTyping = lines.length > 0 && progress.line >= lines.length;

  const signIn = () => {
    authClient.signIn.social({
      provider: 'google',
      callbackURL: '/area51',
    });
  };

  const signOut = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  return (
    <PageShell nav={null}>
      <Section padded={false}>
        <div className="px-6 py-4">
          <span className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground select-none">
            SHT &empty; &middot; UNREGISTERED DRAWING
          </span>
        </div>
      </Section>

      <DiagonalDivider label="RESTRICTED" />

      <Section annotation="SEC ∅ · OFF-SHEET">
        <TextScramble
          as="h1"
          duration={1}
          trigger={!reduced}
          className="text-xl sm:text-2xl font-bold text-foreground mb-6"
        >
          You&#x2019;re off the sheet.
        </TextScramble>

        <div className="text-xs sm:text-sm text-muted-foreground leading-loose min-h-[7rem]">
          {lines.slice(0, progress.line + 1).map((line, i) => (
            <div key={i}>
              {i < progress.line ? line : line.slice(0, progress.char)}
              {i === progress.line && !doneTyping && (
                <span className="animate-pulse text-accent">&#9612;</span>
              )}
            </div>
          ))}
          {!ident && <span className="animate-pulse text-accent">&#9612;</span>}
        </div>

        <div
          className={`flex flex-wrap items-center gap-3 mt-8 transition-opacity duration-700 ${
            doneTyping ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {ident?.status === 'anon' && (
            <>
              <StampButton onClick={signIn} primary>
                Identify &mdash; Google OAuth
              </StampButton>
              <StampButton href="/">Return to safety</StampButton>
            </>
          )}
          {ident?.status === 'denied' && (
            <>
              <StampButton onClick={signOut} primary>
                Forget me
              </StampButton>
              <StampButton href="/">Return to safety</StampButton>
            </>
          )}
          {ident?.status === 'admin' && (
            <>
              <StampButton href="/area51" primary>
                Enter Area 51
              </StampButton>
              <StampButton onClick={signOut}>Forget me</StampButton>
            </>
          )}
        </div>

        <p className="text-[10px] text-muted-foreground/60 mt-8 select-none">
          authorized personnel: one (1). odds you are them: slim.
        </p>
      </Section>

      <TitleBlock sheet="SHT ∅ · OFF-SHEET" rev="VOID" />
    </PageShell>
  );
};

export default Login;

import Image from 'next/image';
import { Section } from './layout';
import { nextLevel } from '@/data/portfolio';

const coverTilts = [
  '-rotate-6 translate-y-1',
  'rotate-0 -translate-y-1',
  'rotate-6 translate-y-1',
];

async function getNowPlaying() {
  try {
    const res = await fetch(
      `${nextLevel.url}/api/now-playing?u=${encodeURIComponent(nextLevel.username)}`,
      {
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(2500),
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.playing ?? []).filter((g) => g.cover);
  } catch {
    return [];
  }
}

export default async function NextLevelPromo() {
  const playing = await getNowPlaying();
  const profileUrl = `${nextLevel.url}/u/${encodeURIComponent(nextLevel.username)}`;

  return (
    <Section annotation="SEC 05 · NEXTLEVEL">
      <div className="relative rounded-lg bg-card dark:bg-[#09090d] border soft-grid-border dark:border-white/10 p-6 sm:p-8 text-foreground dark:text-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none hidden dark:block"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 80% 60% at 80% -20%, rgba(255,255,255,0.06) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div className="min-w-0">
            <span className="text-lg font-bold tracking-tight">NextLevel</span>
            <p className="text-sm text-muted-foreground dark:text-white/50 mt-2 max-w-md leading-relaxed">
              Track every game you&apos;ve played, dropped, or dreamed of
              finishing.
            </p>
            {playing.length > 0 && (
              <p className="text-xs text-muted-foreground dark:text-white/60 mt-3">
                <span className="select-none" aria-hidden="true">
                  ▸{' '}
                </span>
                currently playing:{' '}
                {playing.slice(0, 3).map((game, i) => (
                  <span key={game.slug}>
                    {i > 0 && (
                      <span
                        className="text-muted-foreground/40 dark:text-white/30"
                        aria-hidden="true"
                      >
                        {' '}
                        ·{' '}
                      </span>
                    )}
                    <span className="text-foreground dark:text-white">
                      {game.title}
                    </span>
                  </span>
                ))}
              </p>
            )}
            <div className="flex items-center gap-3 mt-5 flex-wrap">
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium bg-foreground text-background dark:bg-white dark:text-[#09090d] rounded-md hover:opacity-85 transition-opacity"
              >
                Browse my catalog
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href={nextLevel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs text-muted-foreground border border-foreground/15 dark:text-white/60 dark:border-white/15 rounded-md hover:text-foreground hover:border-foreground/30 dark:hover:text-white dark:hover:border-white/30 transition-colors"
              >
                nextlevel.shanu.dev
              </a>
            </div>
          </div>
          {playing.length > 0 && (
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex -space-x-4 shrink-0 self-center sm:self-auto sm:pr-2 group"
              aria-label="Currently playing games on NextLevel"
            >
              {playing.slice(0, 3).map((game, i) => (
                <Image
                  key={game.slug}
                  src={game.cover}
                  alt={game.title}
                  width={90}
                  height={128}
                  unoptimized
                  className={`w-16 sm:w-20 h-auto rounded-md border border-black/10 dark:border-white/15 shadow-xl shadow-black/25 dark:shadow-black/60 transition-transform duration-300 group-hover:translate-y-0 ${coverTilts[i]}`}
                />
              ))}
            </a>
          )}
        </div>
      </div>
    </Section>
  );
}

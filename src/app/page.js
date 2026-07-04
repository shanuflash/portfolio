import {
  PageShell,
  Section,
  DiagonalDivider,
  TitleBlock,
  ContactSection,
} from '@/components/layout';
import BentoCard from '@/components/bento-card';
import StaggerReveal from '@/components/stagger-reveal';
import { infoItems, projects, featuredSkills, experience, education } from '@/data/portfolio';
import NextLevelPromo from '@/components/nextlevel-promo';
import Image from 'next/image';

function renderBold(text) {
  return text
    .split('**')
    .map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="font-medium text-foreground/55">
          {part}
        </strong>
      ) : (
        part
      )
    );
}
import { getIcon } from '@/components/icon-mapper';

export default function Home() {
  return (
    <PageShell nav="home">
      <Section annotation="SEC 01 · IDENT" padded={false}>
        <div className="flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5">
          <div className="shrink-0">
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-foreground flex items-center justify-center overflow-hidden profile-glow">
              <Image
                width={96}
                height={96}
                src="/profile-sketch.webp"
                alt="Shanu Sivakumar"
                className="object-cover rounded-full"
                priority
              />
            </div>
            <div
              className="hidden sm:block text-center text-[9px] text-muted-foreground/50 mt-1.5 select-none"
              aria-hidden="true"
            >
              ⊢ 96px ⊣
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl sm:text-3xl font-bold text-foreground leading-tight">
              Shanu <span className="text-foreground/80">Sivakumar</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground font-light mt-1">
              Full Stack / Frontend Engineer, building{' '}
              <span className="text-foreground/80 font-medium">
                things too cool not to ship
              </span>
              .
            </p>
          </div>
        </div>
        <div className="border-t soft-grid-border px-5 pt-3 pb-1.5 sm:px-6 flex items-start sm:items-center gap-2">
          <div
            className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5 sm:mt-0"
            aria-hidden="true"
          >
            {getIcon('Briefcase', 'w-3.5 h-3.5 text-muted-foreground')}
          </div>
          <span className="text-xs text-muted-foreground">
            Shipping enterprise SaaS @ <span className="text-accent/75 font-medium">SurveySparrow</span> since 2023
          </span>
        </div>
        <div className="px-5 pb-3 sm:px-6 grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center gap-x-5 gap-y-2">
          {infoItems.map((item) => {
            const iconElement =
              typeof item.icon === 'string'
                ? getIcon(item.icon, 'w-3.5 h-3.5 text-muted-foreground')
                : item.icon;
            return (
              <div key={item.id} className="flex items-center gap-2">
                <div
                  className="w-3.5 h-3.5 text-muted-foreground shrink-0"
                  aria-hidden="true"
                >
                  {iconElement}
                </div>
                <span className="text-xs text-muted-foreground transition-all duration-300 hover:text-foreground truncate">
                  {item.content}
                </span>
              </div>
            );
          })}
        </div>
      </Section>
      <DiagonalDivider label="SEC 02" />
      <Section id="about" annotation="SEC 02 · ABOUT">
        <h2 className="text-xl font-bold text-foreground mb-6">About</h2>
        <div className="space-y-5 text-sm text-foreground leading-relaxed">
          <p>
            I&apos;m a Full Stack Engineer who builds enterprise SaaS for a
            living — React UIs that stay fast no matter how much data you
            throw at them, and billing pipelines that move real money
            without dropping a cent. If it&apos;s complex under the hood
            but simple on the surface, I&apos;m into it.
          </p>
          <p>
            Outside work, I build side projects — game trackers, npm
            packages, desktop apps — either to solve a problem
            I&apos;m facing or because the idea wouldn&apos;t leave me
            alone.
          </p>
          <div className="space-y-5">
            {[
              { label: 'Languages', items: ['TypeScript', 'JavaScript', 'C#', 'HTML', 'CSS', 'Sass'] },
              { label: 'Frameworks & Libraries', items: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'TanStack Query', 'Drizzle ORM', 'Redux Toolkit', 'Radix UI', 'Better Auth', 'Zustand', 'Ably'] },
              { label: 'Tools', items: ['Claude Code', 'Git', 'Figma', 'Vercel', 'Jira', 'Docker', 'pnpm', 'Vite', 'Biome'] },
              { label: 'Databases & Services', items: ['PostgreSQL', 'Redis', 'AWS S3', 'SQLite', 'Stripe', 'Turso', 'Cloudinary', 'Supabase', 'MongoDB'] },
            ].map((group) => (
              <div key={group.label}>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{group.label}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => {
                    const isFeatured = featuredSkills.includes(skill);
                    return (
                      <span
                        key={skill}
                        className={`group/key relative px-2.5 py-1 text-xs rounded-md border shadow-[0_2px_0_0] transition-all duration-150 hover:translate-y-0.5 hover:shadow-none hover:border-accent/30 cursor-default active:translate-y-0.5 active:shadow-none select-none ${
                          isFeatured
                            ? 'border-accent/30 bg-accent/5 text-foreground font-medium shadow-accent/15'
                            : 'border-foreground/15 bg-linear-to-b from-foreground/2 to-foreground/6 text-muted-foreground shadow-foreground/10'
                        }`}
                      >
                        {skill}
                        <span className="absolute inset-0 flex items-center justify-center accent-gradient-text opacity-0 group-hover/key:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true">{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <DiagonalDivider label="SEC 03" />
      <Section id="projects" annotation="SEC 03 · PROJECTS">
        <h2 className="text-xl font-bold text-foreground mb-6">Projects</h2>
        <div className="border soft-grid-border rounded-lg overflow-hidden">
          {/* Row 1: Hero project — full width */}
          {projects.filter((p) => p.size === 'large').map((project, i) => (
            <div key={project.name} className="border-b soft-grid-border">
              <StaggerReveal index={i}>
                <BentoCard project={project} />
              </StaggerReveal>
            </div>
          ))}

          {/* Row 2: Medium projects — 2 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {projects.filter((p) => p.size === 'medium').map((project, i, arr) => (
              <div
                key={project.name}
                className={i < arr.length - 1 ? 'border-b sm:border-b-0 sm:border-r soft-grid-border' : ''}
              >
                <StaggerReveal index={i}>
                  <BentoCard project={project} />
                </StaggerReveal>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <h3 className="text-sm font-semibold text-muted-foreground mt-8 mb-3">Other Projects</h3>
        <div className="border soft-grid-border rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {projects.filter((p) => p.size === 'small').map((project, i, arr) => {
              const isLastOdd = arr.length % 2 === 1 && i === arr.length - 1;
              return (
                <div
                  key={project.name}
                  className={[
                    i < arr.length - 1 ? 'border-b sm:border-b-0' : '',
                    !isLastOdd && i % 2 === 0 ? 'sm:border-r' : '',
                    isLastOdd ? 'sm:col-span-2 sm:border-t' : '',
                    'soft-grid-border',
                  ].join(' ')}
                >
                  <StaggerReveal index={i}>
                    <BentoCard project={project} />
                  </StaggerReveal>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
      <DiagonalDivider label="SEC 04" />
      <Section id="background" annotation="SEC 04 · BACKGROUND">
        <h2 className="text-xl font-bold text-foreground mb-6">Background</h2>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Experience
        </h3>
        <div className="space-y-8">
          {experience.map((job) => (
            <div key={job.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-sm font-bold text-foreground">
                  {job.role} <span className="text-muted-foreground font-normal">@</span>{' '}
                  <span className="text-accent/90">{job.company}</span>
                </h3>
                <div className="text-xs text-muted-foreground tabular-nums">
                  {job.period} · {job.location}
                </div>
              </div>
              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2.5 text-xs text-muted-foreground font-light leading-relaxed">
                    <span className="text-accent/60 shrink-0 select-none" aria-hidden="true">
                      ▸
                    </span>
                    <span>{renderBold(bullet)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-8 mb-3">
          Education
        </h3>
        {education.map((entry) => (
          <div
            key={entry.school}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
          >
            <div className="text-sm text-foreground">
              <span className="font-bold">{entry.school}</span>{' '}
              <span className="text-muted-foreground font-light">
                — {entry.degree}
              </span>
            </div>
            <div className="text-xs text-muted-foreground tabular-nums">
              {entry.period} · {entry.location}
            </div>
          </div>
        ))}
      </Section>
      <DiagonalDivider label="SEC 05" />
      <NextLevelPromo />
      <DiagonalDivider label="SEC 06" />
      <ContactSection id="socials" annotation="SEC 06 · CONTACT" showResume />
      <TitleBlock sheet="SHT 01 · HOME" />
    </PageShell>
  );
}

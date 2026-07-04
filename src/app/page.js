import Navigation from '../components/navigation';
import DiagonalDivider from '../components/diagonal-divider';
import BentoCard from '../components/bento-card';
import StaggerReveal from '../components/stagger-reveal';
import { socialLinks, infoItems, projects, featuredSkills, contactEmail } from '../data/portfolio';
import { getIcon } from '../components/icon-mapper';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen font-mono">
      <Navigation currentPage="home" />
      <div className="border-b soft-grid-border">
        <div className="max-w-4xl border-x soft-grid-border mx-auto">
          <div className="flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5">
            <div className="shrink-0">
              <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-foreground flex items-center justify-center overflow-hidden profile-glow">
                <Image
                  width={96}
                  height={96}
                  src="/profile-bw.webp"
                  alt="Shanu Sivakumar"
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-3xl font-bold text-foreground leading-tight">
                Shanu <span className="text-foreground/80">Sivakumar</span>
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground font-light mt-1">
                Full Stack Engineer, crafting{' '}
                <span className="text-foreground/80 font-medium">
                  real-time, data-rich web products
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
              Building cool stuff @ <span className="text-accent/75 font-medium">SurveySparrow</span> since 2023
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
        </div>
      </div>
      <DiagonalDivider />
      <div id="about" className="border-b soft-grid-border">
        <div className="max-w-4xl border-x soft-grid-border mx-auto">
          <div className="p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">About</h2>
            <div className="space-y-5 text-sm text-foreground leading-relaxed">
              <p>
                I&apos;m a Full Stack Engineer who loves building things
                that feel fast and work well. Real-time systems, developer
                tools, data-heavy apps — if it&apos;s complex under the
                hood but simple on the surface, I&apos;m into it.
              </p>
              <p>
                Outside work, I build side projects — game trackers, npm
                packages, desktop apps — either to solve a problem
                I&apos;m facing or because an idea felt too cool not to build.
              </p>
              <div className="space-y-5">
                {[
                  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'C#', 'HTML', 'CSS', 'Sass'] },
                  { label: 'Frameworks & Libraries', items: ['Next.js', 'React', 'Tailwind CSS', 'Tanstack Query', 'Drizzle ORM', 'Redux Toolkit', 'Radix UI', 'Better Auth', 'Zustand', 'Ably'] },
                  { label: 'Tools', items: ['Git', 'Figma', 'Claude Code', 'Vercel', 'Jira', 'Docker', 'pnpm', 'Vite', 'Biome'] },
                  { label: 'Databases & Services', items: ['PostgreSQL', 'SQLite', 'AWS S3', 'Turso', 'Cloudinary', 'Supabase', 'MongoDB'] },
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
          </div>
        </div>
      </div>
      <DiagonalDivider />
      <div id="projects" className="border-b soft-grid-border">
        <div className="max-w-4xl border-x soft-grid-border mx-auto">
          <div className="p-8">
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
          </div>
        </div>
      </div>
      <DiagonalDivider />
      <div
        id="socials"
        className="border-b soft-grid-border relative"
      >
        <div className="max-w-4xl border-x soft-grid-border mx-auto relative">
          <div className="p-8">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Let&apos;s build something together
            </h2>
            <div className="flex items-center gap-4 mt-1">
              <a
                href={`mailto:${contactEmail}`}
                className="text-sm text-accent hover:underline transition-colors"
              >
                {contactEmail}
              </a>
              <span className="text-muted-foreground/30">|</span>
              <a
                href="/Shanu S - Resume July 2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-accent hover:underline transition-colors"
              >
                {getIcon('FileText', 'h-3.5 w-3.5')}
                Resume
              </a>
            </div>
            <div className="flex items-center gap-8 mt-6 pt-6 border-t soft-grid-border">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-all duration-300 hover:text-accent hover:-translate-y-px hover:scale-110"
                >
                  {getIcon(social.icon, 'h-6 w-6')}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Navigation from '../components/navigation';
import DiagonalDivider from '../components/diagonal-divider';
import BentoCard from '../components/bento-card';
import { socialLinks, infoItems, projects, featuredSkills, contactEmail } from '../data/portfolio';
import { getIcon } from '../components/icon-mapper';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen font-mono bg-background">
      <Navigation currentPage="home" />
      <div className="border-t border-b soft-grid-border bg-background">
        <div className="max-w-4xl border-x soft-grid-border mx-auto">
          <div className="flex  items-center gap-4 p-0">
            <div className="flex border-r h-full justify-center items-center p-2 soft-grid-border">
              <div className="w-24 h-24 rounded-full bg-foreground flex items-center justify-center overflow-hidden profile-glow">
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
            <div className="flex-1 px-6">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Shanu <span className="text-foreground/80">Sivakumar</span>
                </h1>
              </div>
              <p className="text-base text-muted-foreground font-light">
                Full Stack Engineer, crafting{' '}
                <span className="text-foreground/80 font-medium">
                  real-time, data-rich web products
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <DiagonalDivider />
      <div className="border-b soft-grid-border bg-background">
        <div className="max-w-4xl border-x soft-grid-border mx-auto">
          <div className="space-y-6 p-8">
            {infoItems.map((item) => {
              const iconElement =
                typeof item.icon === 'string'
                  ? getIcon(item.icon, 'w-4 h-4 text-foreground mt-0.5')
                  : item.icon;
              return (
                <div key={item.id} className="flex items-start gap-3">
                  <div
                    className="w-4 h-4 text-foreground mt-0.5"
                    aria-hidden="true"
                  >
                    {iconElement}
                  </div>
                  <span className="text-sm text-foreground transition-all duration-300 hover:-translate-y-px">
                    {item.content}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <DiagonalDivider />
      <div id="about" className="border-b soft-grid-border bg-background">
        <div className="max-w-4xl border-x soft-grid-border mx-auto">
          <div className="p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">About</h2>
            <div className="space-y-5 text-sm text-foreground leading-relaxed">
              <p>
                I&apos;m a Full Stack Engineer at SurveySparrow who loves
                turning complex problems into clean, fast interfaces. I
                gravitate toward real-time systems, developer tools, and
                anything that involves wrangling data at scale.
              </p>
              <p>
                When I&apos;m not shipping features, I&apos;m building side
                projects — from game trackers to npm packages — because the
                best way to learn a stack is to build something real with it.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'C#', 'HTML', 'CSS', 'Sass'] },
                  { label: 'Frameworks & Libraries', items: ['Next.js', 'React', 'Tailwind CSS', 'Tanstack Query', 'Drizzle ORM', 'Redux Toolkit', 'Radix UI', 'Better Auth', 'Zustand', 'Ably'] },
                  { label: 'Tools', items: ['Git', 'Figma', 'Cursor', 'Vercel', 'Jira', 'Docker', 'pnpm', 'Vite', 'Biome'] },
                  { label: 'Databases & Services', items: ['PostgreSQL', 'SQLite', 'AWS S3', 'Turso', 'Cloudinary', 'Supabase', 'MongoDB'] },
                ].map((group) => (
                  <div key={group.label}>
                    <h3 className="text-sm font-semibold text-foreground mb-1.5">{group.label}</h3>
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
      <div id="projects" className="border-b soft-grid-border bg-background">
        <div className="max-w-4xl border-x soft-grid-border mx-auto">
          <div className="p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Projects</h2>
            <div className="border soft-grid-border rounded-lg overflow-hidden">
              {/* Row 1: Hero project — full width */}
              {projects.filter((p) => p.size === 'large').map((project) => (
                <div key={project.name} className="border-b soft-grid-border">
                  <BentoCard project={project} />
                </div>
              ))}

              {/* Row 2: Medium projects — 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {projects.filter((p) => p.size === 'medium').map((project, i, arr) => (
                  <div
                    key={project.name}
                    className={i < arr.length - 1 ? 'border-b sm:border-b-0 sm:border-r soft-grid-border' : ''}
                  >
                    <BentoCard project={project} />
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
                      <BentoCard project={project} />
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
        className="bg-background border-b soft-grid-border relative"
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
                href="/resume.pdf"
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

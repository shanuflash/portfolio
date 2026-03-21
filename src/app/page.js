import Navigation from '../components/navigation';
import DiagonalDivider from '../components/diagonal-divider';
import BinaryTitle from '../components/binary-title';
import BentoCard from '../components/bento-card';
import { socialLinks, infoItems, projects } from '../data/portfolio';
import { getIcon } from '../components/icon-mapper';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen font-mono bg-background">
      <Navigation currentPage="home" />
      <BinaryTitle word="Home" />
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
                Full-stack curious,{' '}
                <span className="text-foreground/80 font-medium">
                  frontend obsessed
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
              <div className="grid grid-cols-1 sm:grid-cols-2 border-b soft-grid-border">
                {projects.filter((p) => p.size === 'medium').map((project, i, arr) => (
                  <div
                    key={project.name}
                    className={i < arr.length - 1 ? 'border-b sm:border-b-0 sm:border-r soft-grid-border' : ''}
                  >
                    <BentoCard project={project} />
                  </div>
                ))}
              </div>

              {/* Row 3: Small projects — 2 columns to match row 2 */}
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
      <div id="about" className="border-b soft-grid-border bg-background">
        <div className="max-w-4xl border-x soft-grid-border mx-auto">
          <div className="p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">About</h2>
            <div className="space-y-5 text-sm text-foreground leading-relaxed">
              <p>
                I&apos;m a Full Stack Engineer specializing in building
                performant, scalable web applications. I architect end-to-end
                systems, bridging robust backend infrastructure with exceptional
                user experiences.
              </p>
              <p>
                From designing complex data schemas and APIs to delivering
                pixel-perfect, accessible interfaces, I&apos;m passionate about
                writing clean code and shipping highly optimized products that
                users love to interact with.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Sass'] },
                  { label: 'Frameworks & Libraries', items: ['Next.js', 'React', 'Tailwind CSS', 'Tanstack Query', 'Drizzle ORM', 'Redux Toolkit', 'Radix UI', 'Better Auth'] },
                  { label: 'Tools', items: ['Git', 'Figma', 'Cursor', 'Vercel', 'Jira', 'Docker', 'pnpm'] },
                  { label: 'Databases & Services', items: ['PostgreSQL', 'SQLite', 'AWS S3', 'Turso', 'Cloudinary', 'Supabase', 'MongoDB', 'Ably'] },
                ].map((group) => (
                  <div key={group.label}>
                    <h3 className="text-sm font-semibold text-foreground mb-1.5">{group.label}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="group/key relative px-2.5 py-1 text-xs rounded-md border border-foreground/15 bg-linear-to-b from-foreground/2 to-foreground/6 text-muted-foreground shadow-[0_2px_0_0] shadow-foreground/10 transition-all duration-150 hover:translate-y-0.5 hover:shadow-none hover:border-accent/30 cursor-default active:translate-y-0.5 active:shadow-none select-none"
                        >
                          {skill}
                          <span className="absolute inset-0 flex items-center justify-center accent-gradient-text opacity-0 group-hover/key:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true">{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
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
          <div className="p-8 flex items-center">
            <h2 className="text-xl font-bold text-foreground pr-6">Socials</h2>
            <div className="absolute top-0 bottom-0 left-[120px] w-px soft-grid-border"></div>
            <div className="flex items-center space-x-8 pl-6">
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

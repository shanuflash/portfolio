import Navigation from '../components/ui/navigation';
import DiagonalDivider from '../components/ui/diagonal-divider';
import BinaryTitle from '../components/ui/binary-title';
import { socialLinks, infoItems } from '../data/portfolio';
import { getIcon } from '../components/ui/icon-mapper';

export default function Home() {
  return (
    <div className="min-h-screen font-mono bg-background">
      <Navigation currentPage="home" />
      <BinaryTitle word="Home" />
      <div className="border-t border-b border-gray-200 bg-background">
        <div className="max-w-2xl border-x border-gray-200 mx-auto">
          <div className="flex  items-center gap-4 p-0">
            <div className="flex border-r h-full justify-center items-center p-1 border-gray-200">
              <div className="w-20 h-20 rounded-full bg-foreground flex items-center justify-center overflow-hidden">
                <img
                  src="/profile-bw.png"
                  alt="Shanu Sivakumar"
                  className="w-20 h-20 object-cover rounded-full"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-lg  sm:text-2xl font-bold text-foreground">
                  Shanu Sivakumar
                </h1>
              </div>
              <p className="text-sm text-muted-foreground">
                Full-stack curious, frontend obsessed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <DiagonalDivider />
      <div className="border-b border-gray-200 bg-background">
        <div className="max-w-2xl border-x border-gray-200 mx-auto">
          <div className="space-y-4 p-6">
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
                  <span className="text-sm text-foreground">
                    {item.content}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <DiagonalDivider />
      <div id="about" className="border-b border-gray-200 bg-background">
        <div className="max-w-2xl border-x border-gray-200 mx-auto">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              About
            </h2>
            <div className="space-y-4 text-sm text-foreground leading-relaxed">
              <p>
                I&apos;m a Frontend Developer at SurveySparrow with expertise in
                React, Next.js, and modern JavaScript frameworks. I specialize
                in building performant, scalable web applications with clean,
                maintainable code and exceptional user experiences.
              </p>
              <p>
                My technical stack includes React, Next.js, TypeScript, Tailwind
                CSS, and Node.js for full-stack development. I&apos;ve built
                numerous high-performance web UIs, focusing on optimization,
                accessibility, and responsive design across various devices and
                browsers.
              </p>
              <p>
                I have extensive experience with state management (Redux,
                Zustand), API integration (Tanstack Query, Axios), server-side
                rendering(Next.js), and modern build tools (Vite). I&apos;m
                passionate about writing efficient code, implementing best
                practices, and delivering pixel-perfect interfaces that users
                love to interact with.
              </p>
            </div>
          </div>
        </div>
      </div>
      <DiagonalDivider />
      <div
        id="about"
        className="bg-background border-b border-gray-200 relative"
      >
        <div className="max-w-2xl border-x border-gray-200 mx-auto relative">
          <div className="p-6 flex items-center">
            <h2 className="text-lg font-semibold text-foreground pr-4">
              Socials
            </h2>
            <div className="absolute top-0 bottom-0 left-[110px] w-px bg-gray-200"></div>
            <div className="flex items-center space-x-6 pl-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getIcon(
                    social.icon,
                    'h-5 w-5 text-foreground hover:text-muted-foreground transition-colors'
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

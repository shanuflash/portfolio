import Section from './section';
import { getIcon } from '../icon-mapper';
import { socialLinks, contactEmail } from '@/data/portfolio';

const keycap =
  'inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border shadow-[0_2px_0_0] transition-all duration-150 hover:translate-y-0.5 hover:shadow-none active:translate-y-0.5 active:shadow-none select-none';

export default function ContactSection({
  id,
  annotation,
  title = "Let's build something together",
  blurb,
  showResume = false,
}) {
  return (
    <Section id={id} annotation={annotation}>
      <h2 className="text-xl font-bold text-foreground mb-2">{title}</h2>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
        {blurb ??
          'Interesting problem, open role, or just a game recommendation — my inbox is open.'}
      </p>
      <a
        href={`mailto:${contactEmail}`}
        className="inline-block text-lg sm:text-xl font-bold text-accent hover:underline mt-5"
      >
        {contactEmail}
      </a>
      <div className="flex flex-wrap items-center gap-2.5 mt-6 pt-6 border-t soft-grid-border">
        {showResume && (
          <a
            href="/Shanu S - Resume July 2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${keycap} border-accent/30 bg-accent/5 text-foreground font-medium shadow-accent/15 hover:border-accent/40`}
          >
            {getIcon('FileText', 'h-3.5 w-3.5 text-accent')}
            Resume
          </a>
        )}
        {socialLinks.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${keycap} border-foreground/15 text-muted-foreground shadow-foreground/10 hover:text-foreground hover:border-accent/30`}
          >
            {getIcon(social.icon, 'h-3.5 w-3.5')}
            {social.alt}
          </a>
        ))}
      </div>
    </Section>
  );
}

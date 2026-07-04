import Section from './section';
import { getIcon } from '../icon-mapper';
import { socialLinks, contactEmail } from '@/data/portfolio';

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
      {blurb && (
        <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
          {blurb}
        </p>
      )}
      <div className={`flex items-center gap-4 ${blurb ? 'mt-4' : 'mt-1'}`}>
        <a
          href={`mailto:${contactEmail}`}
          className="text-sm text-accent hover:underline transition-colors"
        >
          {contactEmail}
        </a>
        {showResume && (
          <>
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
          </>
        )}
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
    </Section>
  );
}

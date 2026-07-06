import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { getIcon } from '@/components/icon-mapper';

const positionMap = {
  top: 'object-top',
  center: 'object-center',
  bottom: 'object-bottom',
};

function StackChips({ stack }) {
  if (!stack?.length) return null;
  return (
    <div className="flex flex-wrap items-center gap-1">
      {stack.slice(0, 5).map((tech) => (
        <span
          key={tech}
          className="text-[9px] px-1.5 py-px border border-foreground/15 rounded text-muted-foreground bg-foreground/3 select-none"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function FigureLinks({ liveUrl, sourceUrl }) {
  if (!liveUrl && !sourceUrl) return null;
  return (
    <div className="flex items-center gap-3 shrink-0">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
          Live
        </a>
      )}
      {sourceUrl && (
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors"
        >
          <Github className="w-3 h-3" />
          Source
        </a>
      )}
    </div>
  );
}

export default function ProjectFigure({ project, wide = false }) {
  const {
    name,
    description,
    image,
    imagePosition = 'top',
    stack,
    liveUrl,
    sourceUrl,
  } = project;
  const href = liveUrl || sourceUrl;

  return (
    <figure className="group border soft-grid-border rounded-lg overflow-hidden bg-card/40 h-full flex flex-col">
      <div
        className={`relative w-full overflow-hidden ${
          wide ? 'aspect-2/1 sm:aspect-3/1' : 'aspect-2/1'
        }`}
      >
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="absolute inset-0 z-10"
          />
        ) : null}
        <Image
          src={image}
          alt={name}
          fill
          unoptimized
          className={`object-cover ${positionMap[imagePosition] || 'object-top'} transition-transform duration-500 ease-out group-hover:scale-[1.03]`}
          sizes={
            wide
              ? '(max-width: 672px) 100vw, 832px'
              : '(max-width: 672px) 100vw, 416px'
          }
        />
      </div>
      <figcaption className="border-t soft-grid-border px-4 py-3 sm:px-5 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
          <h3 className="text-sm font-bold text-foreground">{name}</h3>
          <div className="ml-auto">
            <StackChips stack={stack} />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 mt-1.5">
          <p className="text-xs text-muted-foreground font-light max-w-xl">
            {description}
          </p>
          <FigureLinks liveUrl={liveUrl} sourceUrl={sourceUrl} />
        </div>
      </figcaption>
    </figure>
  );
}

export function ProjectFigureCompact({ project }) {
  const {
    icon: iconName,
    name,
    description,
    stack,
    liveUrl,
    sourceUrl,
    isWIP = false,
  } = project;

  return (
    <div className={`p-4 ${isWIP ? 'opacity-70' : ''}`}>
      <div className="flex items-center gap-2 flex-wrap">
        <div className="h-5 w-5 rounded bg-accent/10 flex items-center justify-center shrink-0">
          {getIcon(iconName, 'h-3 w-3 text-accent')}
        </div>
        <h3 className="text-sm font-bold text-foreground">{name}</h3>
        {isWIP && (
          <span className="text-[9px] px-1.5 py-px tracking-[0.12em] uppercase border border-dashed border-muted-foreground/30 rounded text-muted-foreground/70 select-none">
            draft
          </span>
        )}
      </div>
      <p className="text-xs text-muted-foreground font-light mt-2 line-clamp-3 min-h-[3lh]">
        {description}
      </p>
      <div className="mt-2">
        <StackChips stack={stack} />
      </div>
      {!isWIP && (
        <div className="mt-2.5">
          <FigureLinks liveUrl={liveUrl} sourceUrl={sourceUrl} />
        </div>
      )}
    </div>
  );
}

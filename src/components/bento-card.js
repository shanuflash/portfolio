import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { getIcon } from '@/components/icon-mapper';

const positionMap = {
  top: 'object-top',
  center: 'object-center',
  bottom: 'object-bottom',
};

function ImageFrame({ src, alt, aspect = 'aspect-2/1', sizes, position = 'top', isDark = false, href }) {
  const objectPosition = positionMap[position] || 'object-top';

  const inner = (
    <div
      className={`relative w-full ${aspect} overflow-hidden`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        className={`object-cover ${objectPosition} transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1`}
        sizes={sizes}
      />
      <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t pointer-events-none transition-opacity duration-500 ease-out group-hover:opacity-70 ${
        isDark
          ? 'from-background/60 via-background/30 to-background/0 dark:from-background dark:via-background/80 dark:to-background/0'
          : 'from-background via-background/80 to-background/0 dark:from-background/80 dark:via-background/50 dark:to-background/0'
      }`} />
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  }

  return inner;
}

function TitleRow({ iconName, name, href, iconSize = 'h-3.5 w-3.5', boxSize = 'h-6 w-6' }) {
  const content = (
    <div className="flex items-center gap-2">
      <div className={`${boxSize} rounded-md bg-accent/10 flex items-center justify-center shrink-0`}>
        {getIcon(iconName, `${iconSize} text-accent`)}
      </div>
      <h3 className="text-sm font-bold text-foreground">{name}</h3>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }

  return content;
}

function ActionLinks({ project }) {
  const { liveUrl, sourceUrl } = project;
  if (!liveUrl && !sourceUrl) return null;
  return (
    <div className="flex items-center gap-3 mt-1.5">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
          Live Demo
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

function CardInner({ project }) {
  const {
    icon: iconName,
    name,
    description,
    tagline,
    image,
    isDark: isDarkImage = false,
    imagePosition = 'top',
    size = 'small',
    isWIP = false,
    liveUrl,
    sourceUrl,
  } = project;

  const href = !isWIP ? (liveUrl || sourceUrl) : undefined;

  if (size === 'large') {
    return (
      <div className="group relative h-full flex flex-col overflow-hidden">
        {image && (
          <>
            <ImageFrame
              src={image}
              alt={name}
              aspect="aspect-2/1 sm:aspect-3/1"
              sizes="(max-width: 672px) 100vw, 640px"
              position={imagePosition}
              isDark={isDarkImage}
              href={href}
            />
            <div className="px-4 py-3">
              <div className="min-w-0">
                <div className="mb-0.5">
                  <TitleRow iconName={iconName} name={name} href={href} />
                </div>
                <p className="text-xs text-muted-foreground font-light">
                  {tagline || description}
                </p>
                <ActionLinks project={project} />
              </div>
            </div>
          </>
        )}
        {!image && (
          <div className="flex-1 p-5 flex flex-col justify-end">
            <div className="flex items-center gap-2.5 mb-1.5">
              <div className="h-10 w-10 rounded-sm bg-muted/30 flex items-center justify-center">
                {getIcon(iconName, 'h-5 w-5 text-foreground')}
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{name}</h3>
                <p className="text-xs text-muted-foreground">{description}</p>
              </div>
            </div>
            {tagline && (
              <p className="text-sm text-muted-foreground mt-3 font-light">
                {tagline}
              </p>
            )}
            <ActionLinks project={project} />
          </div>
        )}
      </div>
    );
  }

  if (size === 'medium') {
    return (
      <div className="group relative h-full flex flex-col overflow-hidden">
        {image && (
          <>
            <ImageFrame
              src={image}
              alt={name}
              aspect="aspect-3/2 sm:aspect-5/2"
              sizes="(max-width: 672px) 100vw, 320px"
              position={imagePosition}
              isDark={isDarkImage}
              href={href}
            />
            <div className="px-4 py-3">
              <div className="min-w-0">
                <div className="mb-0.5">
                  <TitleRow iconName={iconName} name={name} href={href} />
                </div>
                <p className="text-xs text-muted-foreground font-light line-clamp-2 min-h-[2lh]">
                  {tagline || description}
                </p>
                <ActionLinks project={project} />
              </div>
            </div>
          </>
        )}
        {!image && (
          <div className="flex-1 p-4 flex flex-col justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-sm bg-muted/30 flex items-center justify-center shrink-0">
                {getIcon(iconName, 'h-4 w-4 text-foreground')}
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground">{name}</h3>
                <p className="text-xs text-muted-foreground">{description}</p>
              </div>
            </div>
            {tagline && (
              <p className="text-xs text-muted-foreground mt-3 font-light line-clamp-2">
                {tagline}
              </p>
            )}
            <ActionLinks project={project} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`group relative h-full ${isWIP ? 'opacity-60' : ''}`}
    >
      <div className="px-4 py-3 flex items-start gap-3">
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="shrink-0 mt-0.5 hover:opacity-80 transition-opacity">
            <div className="h-8 w-8 rounded-md bg-accent/10 flex items-center justify-center">
              {getIcon(iconName, 'h-4 w-4 text-accent')}
            </div>
          </a>
        ) : (
          <div className={`h-8 w-8 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${isWIP ? 'bg-muted/20' : 'bg-accent/10'}`}>
            {getIcon(
              iconName,
              `h-4 w-4 ${isWIP ? 'text-muted-foreground/60' : 'text-accent'}`
            )}
          </div>
        )}
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <h3 className="text-sm font-bold text-foreground">{name}</h3>
              </a>
            ) : (
              <h3
                className={`text-sm font-bold ${
                  isWIP ? 'text-muted-foreground/80' : 'text-foreground'
                }`}
              >
                {name}
              </h3>
            )}
            {isWIP && (
              <span className="text-[10px] px-1 py-0.5 bg-muted/40 text-muted-foreground/70 rounded border border-dashed border-muted-foreground/20 shrink-0">
                WIP
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground font-light line-clamp-2 min-h-[2lh]">
            {description}
          </p>
          {!isWIP && <ActionLinks project={project} />}
        </div>
      </div>
    </div>
  );
}

export default function BentoCard({ project }) {
  const { isWIP = false } = project;

  if (isWIP) {
    return (
      <div className="cursor-not-allowed">
        <CardInner project={project} />
      </div>
    );
  }

  return (
    <div className="transition-colors hover:bg-muted/20">
      <CardInner project={project} />
    </div>
  );
}

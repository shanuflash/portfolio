import Image from 'next/image';
import { ArrowUpRight, Lock } from 'lucide-react';
import { getIcon } from '@/components/icon-mapper';

const positionMap = {
  top: 'object-top',
  center: 'object-center',
  bottom: 'object-bottom',
};

function ImageFrame({ src, alt, aspect = 'aspect-2/1', sizes, position = 'top', isDark = false }) {
  const objectPosition = positionMap[position] || 'object-top';

  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden`}
    >
      <Image
        src={`${src}?v=${Date.now()}`}
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
  } = project;

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
            />
            <div className="px-4 py-3 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  {getIcon(iconName, 'h-4 w-4 text-foreground shrink-0')}
                  <h3 className="text-sm font-bold text-foreground">{name}</h3>
                </div>
                <p className="text-xs text-muted-foreground font-light">
                  {tagline || description}
                </p>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-1 transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
            <ArrowUpRight className="absolute top-5 right-5 w-4 h-4 text-muted-foreground transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
              aspect="aspect-5/2 sm:aspect-2/1"
              sizes="(max-width: 672px) 100vw, 320px"
              position={imagePosition}
              isDark={isDarkImage}
            />
            <div className="px-4 py-3 flex items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  {getIcon(iconName, 'h-4 w-4 text-foreground shrink-0')}
                  <h3 className="text-sm font-bold text-foreground">{name}</h3>
                </div>
                <p className="text-xs text-muted-foreground font-light line-clamp-2 min-h-[2lh]">
                  {tagline || description}
                </p>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-1 transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
            <ArrowUpRight className="absolute top-4 right-4 w-3.5 h-3.5 text-muted-foreground transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`group relative h-full ${isWIP ? 'opacity-60' : ''}`}
    >
      <div className="px-4 py-3 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            {getIcon(
              iconName,
              `h-4 w-4 shrink-0 ${isWIP ? 'text-muted-foreground/60' : 'text-foreground'}`
            )}
            <h3
              className={`text-sm font-bold ${
                isWIP ? 'text-muted-foreground/80' : 'text-foreground'
              }`}
            >
              {name}
            </h3>
            {isWIP && (
              <span className="text-[10px] px-1 py-0.5 bg-muted/40 text-muted-foreground/70 rounded border border-dashed border-muted-foreground/20 shrink-0">
                WIP
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground font-light line-clamp-2 min-h-[2lh]">
            {description}
          </p>
        </div>
        {!isWIP && (
          <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-1 transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </div>
    </div>
  );
}

export default function BentoCard({ project }) {
  const { href, isWIP = false, isExternal = false } = project;

  const linkProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : { rel: 'noopener noreferrer' };

  if (isWIP) {
    return (
      <div className="cursor-not-allowed">
        <CardInner project={project} />
      </div>
    );
  }

  return (
    <a
      href={href}
      {...linkProps}
      className="block transition-colors hover:bg-muted/20"
    >
      <CardInner project={project} />
    </a>
  );
}

import Link from 'next/link';
import { ArrowRight, Lock } from 'lucide-react';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import { getIcon } from '@/components/icon-mapper';

export default function ProductCard({ product }) {
  const {
    href,
    icon: iconName,
    name,
    description,
    isWIP = false,
    isExternal = false,
    gridPosition = '',
  } = product;

  const linkProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : { rel: 'noopener noreferrer' };

  const cardContent = (
    <div
      className={`flex items-center justify-between p-4 transition-colors relative ${
        isWIP
          ? 'opacity-60 hover:opacity-70 cursor-not-allowed bg-muted/10'
          : 'hover:bg-muted/50'
      } ${gridPosition}`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`h-10 w-10 rounded-sm flex items-center justify-center relative ${
            isWIP
              ? 'bg-muted/20 border border-dashed border-muted-foreground/30'
              : 'bg-muted/30'
          }`}
        >
          {getIcon(
            iconName,
            `h-6 w-6 ${isWIP ? 'text-muted-foreground/60' : 'text-foreground'}`
          )}
          {isWIP && (
            <div className="absolute -top-1 -right-1 bg-background border border-muted-foreground/30 rounded-full p-0.5">
              <Lock className="h-2.5 w-2.5 text-muted-foreground/60" />
            </div>
          )}
        </div>
        <div>
          <div
            className={`font-medium text-sm truncate flex items-center gap-2 ${
              isWIP ? 'text-muted-foreground/80' : 'text-foreground'
            }`}
          >
            {name}
            {isWIP && (
              <span className="text-xs px-1.5 py-0.5 bg-muted/40 text-muted-foreground/70 rounded border border-dashed border-muted-foreground/20">
                WIP
              </span>
            )}
          </div>
          <div className="text-xs text-muted-foreground text-left">
            {description}
          </div>
        </div>
      </div>
      <ArrowRight
        className={`w-4 h-4 ${isWIP ? 'text-muted-foreground/40' : 'text-muted-foreground'}`}
      />
    </div>
  );

  return isWIP ? (
    <div className="cursor-not-allowed">{cardContent}</div>
  ) : isExternal ? (
    <a href={href} {...linkProps}>
      {cardContent}
    </a>
  ) : (
    <Link href={href} {...linkProps}>
      {cardContent}
    </Link>
  );
}

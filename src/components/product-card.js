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
      className={`flex items-center justify-between px-4 py-5 transition-colors relative ${
        isWIP ? 'opacity-40 cursor-not-allowed' : 'hover:bg-muted/50'
      } ${gridPosition}`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`h-10 w-10 shrink-0 rounded-md flex items-center justify-center relative ${
            isWIP
              ? 'bg-muted/20 border border-dashed border-muted-foreground/30'
              : 'bg-accent/10'
          }`}
        >
          {getIcon(
            iconName,
            `h-5 w-5 ${isWIP ? 'text-muted-foreground' : 'text-accent'}`
          )}
          {isWIP && (
            <div className="absolute -top-1 -right-1 bg-background border border-muted-foreground/30 rounded-full p-0.5">
              <Lock className="h-2.5 w-2.5 text-muted-foreground" />
            </div>
          )}
        </div>
        <div>
          <div
            className={`font-medium text-sm truncate flex items-center gap-2 ${
              isWIP ? 'text-muted-foreground' : 'text-foreground'
            }`}
          >
            {name}
            {isWIP && (
              <span className="text-[10px] px-1 py-0.5 bg-muted/40 text-muted-foreground rounded border border-dashed border-muted-foreground/30">
                WIP
              </span>
            )}
          </div>
          <div className="text-xs text-muted-foreground text-left line-clamp-2 min-h-[2lh]">
            {description}
          </div>
        </div>
      </div>
      {!isWIP && (
        <ArrowRight className="w-4 h-4 shrink-0 text-muted-foreground" />
      )}
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

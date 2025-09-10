import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
    category,
    wip = false,
    isExternal = false,
    gridPosition = '',
  } = product;

  const linkProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : { rel: 'noopener noreferrer' };

  const cardContent = (
    <div
      className={`flex items-center justify-between p-4 transition-colors ${
        wip
          ? 'opacity-60 hover:opacity-80 cursor-not-allowed'
          : 'hover:bg-muted/50'
      } ${gridPosition}`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`h-10 w-10 rounded-sm flex items-center justify-center ${
            wip ? 'bg-muted/20' : 'bg-muted/30'
          }`}
        >
          {getIcon(
            iconName,
            `h-6 w-6 ${wip ? 'text-muted-foreground' : 'text-foreground'}`
          )}
        </div>
        <div>
          <div
            className={`font-medium text-sm truncate ${
              wip ? 'text-muted-foreground' : 'text-foreground'
            }`}
          >
            {name}
          </div>
          <div className="text-xs text-muted-foreground text-left">
            {category}
          </div>
        </div>
      </div>
      <ArrowRight
        className={`w-4 h-4 ${wip ? 'text-muted-foreground/50' : 'text-muted-foreground'}`}
      />
    </div>
  );

  return wip ? (
    <Tooltip>
      <TooltipTrigger>{cardContent}</TooltipTrigger>
      <TooltipContent>
        <p>Work in Progress</p>
      </TooltipContent>
    </Tooltip>
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

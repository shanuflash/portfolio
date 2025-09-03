import { ArrowRight } from 'lucide-react';
import { getIcon } from '../ui/icon-mapper';

export default function ProductCard({ product }) {
  const { href, icon: iconName, name, status, isExternal = false, gridPosition = "" } = product;
  
  const linkProps = isExternal 
    ? { target: "_blank", rel: "noopener noreferrer" }
    : { rel: "noopener noreferrer" };

  return (
    <a href={href} {...linkProps}>
      <div className={`flex items-center justify-between p-4 hover:bg-muted/50 transition-colors ${gridPosition}`}>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-sm bg-muted/30 flex items-center justify-center">
            {getIcon(iconName, "h-6 w-6 text-foreground")}
          </div>
          <div>
            <div className="font-medium text-sm text-foreground truncate">
              {name}
            </div>
            <div className="text-xs text-muted-foreground">
              {status}
            </div>
          </div>
        </div>
        <ArrowRight className="w-4 h-4 text-muted-foreground" />
      </div>
    </a>
  );
}

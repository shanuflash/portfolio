import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Navigation from '@/components/navigation';
import BinaryTitle from '@/components/binary-title';
import LogoutButton from '@/components/logout-button';
import {
  Users,
  Shield,
  Settings,
  BarChart3,
  Database,
  Key,
} from 'lucide-react';

const AdminCard = ({
  title,
  description,
  icon: Icon,
  href,
  variant = 'default',
}) => (
  <a
    href={href}
    className={`block p-6 border soft-grid-border transition-all duration-300 hover:-translate-y-px hover:bg-muted/20 group ${
      variant === 'primary' ? 'bg-accent/5 border-accent/20' : ''
    }`}
  >
    <div className="flex items-start gap-4">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${
          variant === 'primary' ? 'bg-accent/20' : 'bg-muted/50'
        }`}
      >
        <Icon
          className={`w-5 h-5 ${
            variant === 'primary' ? 'text-accent' : 'text-muted-foreground'
          }`}
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </a>
);

const Area51 = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="min-h-screen font-mono bg-background">
      <Navigation currentPage="area51" showAdminLink={true} />
      <BinaryTitle word="Area51" />
      <div className="border-t border-b soft-grid-border bg-background">
        <div className="max-w-2xl border-x soft-grid-border mx-auto">
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">
                    Admin Control Panel
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Welcome back, {session?.user?.name || 'Admin'}
                  </p>
                </div>
              </div>
              <LogoutButton />
            </div>

            <div className="bg-muted/20 border soft-grid-border rounded-lg p-4">
              <h3 className="text-sm font-medium text-foreground mb-3">
                Admin Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Email:</span>
                  <span className="ml-2 text-foreground">
                    {session?.user?.email}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Role:</span>
                  <span className="ml-2 text-accent font-medium">
                    {session?.user?.role?.toUpperCase()}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">User ID:</span>
                  <span className="ml-2 text-foreground font-mono text-xs">
                    {session?.user?.id}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Area51;

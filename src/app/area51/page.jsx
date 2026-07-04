import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import LogoutButton from '@/components/logout-button';
import { PageShell, Section, TitleBlock } from '@/components/layout';
import { Shield } from 'lucide-react';

const Area51 = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <PageShell nav="area51" showAdminLink>
      <Section annotation="SEC 51 · RESTRICTED">
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
      </Section>
      <TitleBlock sheet="SHT 51 · AREA51" rev="CLASSIFIED" />
    </PageShell>
  );
};

export default Area51;

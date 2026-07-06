import Link from 'next/link';
import BinaryTitle from '@/components/binary-title';
import { PageShell, Section, TitleBlock } from '@/components/layout';
import { getIcon } from '@/components/icon-mapper';

export default function NotFound() {
  return (
    <PageShell>
      <BinaryTitle word="404" />

      <Section annotation="SEC 404 · LOST">
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">
              Page Not Found
            </h1>
            <p className="text-muted-foreground text-lg">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-24 h-24 border-2 soft-grid-border rounded-full flex items-center justify-center bg-background">
              {getIcon('FileText', 'w-12 h-12 text-muted-foreground')}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Let&apos;s get you back on track
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground bg-background border soft-grid-border rounded-md transition-all duration-300 hover:text-accent hover:-translate-y-px hover:scale-105"
              >
                Go Home
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground bg-background border soft-grid-border rounded-md transition-all duration-300 hover:text-accent hover:-translate-y-px hover:scale-105"
              >
                Browse Tools
              </Link>
            </div>
          </div>
        </div>
      </Section>
      <TitleBlock sheet="SHT 404 · NOT FOUND" rev="MISSING" />
    </PageShell>
  );
}

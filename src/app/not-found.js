import Link from 'next/link';
import Navigation from '@/components/navigation';
import BinaryTitle from '@/components/binary-title';
import DiagonalDivider from '@/components/diagonal-divider';

export default function NotFound() {
  return (
    <div className="min-h-screen font-mono bg-background">
      <Navigation />
      <BinaryTitle word="404" />

      <div className="border-b soft-grid-border bg-background">
        <div className="max-w-2xl border-x soft-grid-border mx-auto">
          <div className="p-8 text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground">
                Page Not Found
              </h1>
              <p className="text-muted-foreground text-lg">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-24 h-24 border-2 soft-grid-border rounded-full flex items-center justify-center bg-background">
                <svg
                  className="w-12 h-12 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Let's get you back on track
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground bg-background border soft-grid-border rounded-md transition-all duration-300 hover-accent-text hover:-translate-y-px hover:scale-105"
                >
                  Go Home
                </Link>
                <Link
                  href="/tools"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-foreground bg-background border soft-grid-border rounded-md transition-all duration-300 hover-accent-text hover:-translate-y-px hover:scale-105"
                >
                  Browse Tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

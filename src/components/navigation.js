import Link from 'next/link';
import ThemeToggle from './ui/theme-toggle';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export default async function Navigation({ currentPage }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const isAdmin = session?.user?.role === 'admin';

  const navLinks = [
    { href: '/', text: 'Home', isActive: currentPage === 'home' },
    { href: '/tools', text: 'Tools', isActive: currentPage === 'tools' },
    { href: '/blog', text: 'Blog', isActive: currentPage === 'blog' },
  ];

  if (isAdmin) {
    navLinks.push({
      href: '/area51',
      text: 'Area51',
      isActive: currentPage === 'area51',
    });
  }

  return (
    <nav className="border-b soft-grid-border bg-background">
      <div className="max-w-2xl border-x soft-grid-border mx-auto flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`text-foreground text-sm transition-all duration-300 hover-accent-text hover:-translate-y-px ${
                link.isActive ? 'accent-text font-semibold' : ''
              }`}
            >
              {link.text}
            </Link>
          ))}
        </div>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

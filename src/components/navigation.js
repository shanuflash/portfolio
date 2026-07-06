import Link from 'next/link';
import ThemeToggle from './ui/theme-toggle';

export default function Navigation({ currentPage, showAdminLink = false }) {
  const navLinks = [
    { href: '/', text: 'Home', isActive: currentPage === 'home' },
    { href: '/tools', text: 'Tools', isActive: currentPage === 'tools' },
    // { href: '/blog', text: 'Blog', isActive: currentPage === 'blog' },
  ];

  if (showAdminLink) {
    navLinks.push({
      href: '/area51',
      text: 'Area51',
      isActive: currentPage === 'area51',
    });
  }

  return (
    <nav className="border-b soft-grid-border">
      <div className="max-w-4xl border-x soft-grid-border mx-auto flex items-stretch justify-between">
        {/* Identity cell */}
        <div className="px-6 sm:px-8 py-3 border-r soft-grid-border flex items-center">
          <span className="text-xs text-foreground/90">shanu.dev</span>
        </div>

        {/* Nav cells — each destination reads as a labelled sheet cell */}
        <div className="flex items-stretch">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.isActive ? 'page' : undefined}
              className={`group px-4 sm:px-5 py-3 border-l soft-grid-border flex items-center transition-colors duration-300 ${
                link.isActive ? 'bg-accent/6' : 'hover:bg-foreground/3'
              }`}
            >
              <span
                className={`text-xs tracking-wide transition-colors ${
                  link.isActive
                    ? 'text-accent font-medium'
                    : 'text-foreground/90 group-hover:text-accent'
                }`}
              >
                {link.text}
              </span>
            </Link>
          ))}

          {/* Theme toggle rides in its own cell, keeping the grid rhythm */}
          <div className="border-l soft-grid-border flex items-stretch">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

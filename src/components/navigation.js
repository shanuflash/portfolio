import ThemeToggle from './ui/theme-toggle';

export default function Navigation({ currentPage }) {
  const navLinks = [
    { href: '/', text: 'Home', underline: currentPage === 'home' },
    { href: '/tools', text: 'Tools', underline: currentPage === 'tools' },
  ];

  return (
    <nav className="border-b soft-grid-border bg-background">
      <div className="max-w-2xl border-x soft-grid-border mx-auto flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-foreground text-sm transition-all duration-300 hover-accent-text hover:-translate-y-px ${
                link.underline ? 'accent-text font-semibold' : ''
              }`}
            >
              {link.text}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

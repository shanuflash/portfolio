export default function Navigation() {

  const navLinks = [
    { href: "/", text: "Home", underline: true },
    { href: "#products", text: "Tools", underline: false },
    { href: "#about", text: "About", underline: false }
  ];

  return (
    <nav className="border-b border-border border-gray-200 bg-background">
      <div className="max-w-2xl border-x border-gray-200 mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-foreground text-sm ${
                link.underline ? "underline" : "hover:underline"
              }`}
            > 
              {link.text}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}

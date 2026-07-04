import Navigation from '../navigation';

export default function PageShell({
  nav,
  showAdminLink = false,
  className = '',
  children,
}) {
  return (
    <div className={`relative min-h-screen font-mono ${className}`}>
      {nav !== null && (
        <Navigation currentPage={nav} showAdminLink={showAdminLink} />
      )}
      {children}
    </div>
  );
}

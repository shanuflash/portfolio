export default function Section({
  id,
  annotation,
  padded = true,
  className = '',
  innerClassName = '',
  children,
}) {
  const mobileLabel = annotation && (
    <span
      className={`lg:hidden block text-[9px] tracking-[0.2em] uppercase text-muted-foreground/60 select-none ${
        padded ? 'mb-3' : 'px-5 sm:px-6 pt-3'
      }`}
      aria-hidden="true"
    >
      {annotation}
    </span>
  );

  return (
    <div id={id} className={`border-b soft-grid-border ${className}`}>
      <div
        className={`max-w-4xl border-x soft-grid-border mx-auto crosshair-section ${innerClassName}`}
      >
        {annotation && (
          <span className="rail-annotation hidden lg:block" aria-hidden="true">
            {annotation}
          </span>
        )}
        {padded ? (
          <div className="p-8">
            {mobileLabel}
            {children}
          </div>
        ) : (
          <>
            {mobileLabel}
            {children}
          </>
        )}
      </div>
    </div>
  );
}

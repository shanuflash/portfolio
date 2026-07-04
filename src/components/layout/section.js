export default function Section({
  id,
  annotation,
  padded = true,
  className = '',
  innerClassName = '',
  children,
}) {
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
        {padded ? <div className="p-8">{children}</div> : children}
      </div>
    </div>
  );
}

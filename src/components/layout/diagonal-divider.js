export default function DiagonalDivider({ label }) {
  return (
    <div className="border-b soft-grid-border h-10">
      <div
        className="max-w-4xl border-x soft-grid-border mx-auto h-full crosshair-section"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(156, 163, 175, 0.3) 0, rgba(156, 163, 175, 0.3) 2px, transparent 2px, transparent 8px)',
        }}
      >
        {label && (
          <span className="hatch-label" aria-hidden="true">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

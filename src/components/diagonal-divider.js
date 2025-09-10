export default function DiagonalDivider() {
  return (
    <div className="border-b soft-grid-border h-12 bg-background">
      <div
        className="max-w-2xl border-x soft-grid-border mx-auto h-full"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(156, 163, 175, 0.3) 0, rgba(156, 163, 175, 0.3) 2px, transparent 2px, transparent 8px)',
        }}
      ></div>
    </div>
  );
}

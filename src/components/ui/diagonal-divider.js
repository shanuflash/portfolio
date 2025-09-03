export default function DiagonalDivider() {
  return (
    <div className="border-b border-border h-10 border-gray-200 bg-background">
      <div
        className="max-w-2xl border-x border-gray-200 mx-auto h-full"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, #e5e7eb 0, #e5e7eb 2px, transparent 2px, transparent 6px)',
        }}
      ></div>
    </div>
  );
}

const cellBorders = [
  'border-r border-b sm:border-b-0',
  'border-b sm:border-b-0 sm:border-r',
  'border-r',
  '',
];

export default function TitleBlock({
  sheet = 'SHT 01 · HOME',
  rev = '2026.07',
}) {
  const cells = [
    { label: 'Project', value: 'shanu.dev' },
    { label: 'Drawn by', value: 'Shanu Sivakumar' },
    { label: 'Sheet', value: sheet },
    { label: 'Rev', value: rev },
  ];

  return (
    <div className="border-b soft-grid-border">
      <div className="max-w-4xl border-x soft-grid-border mx-auto crosshair-section">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {cells.map((cell, i) => (
            <div
              key={cell.label}
              className={`px-4 py-2.5 soft-grid-border ${cellBorders[i]}`}
            >
              <div className="text-[8px] tracking-[0.18em] uppercase text-muted-foreground/70 select-none">
                {cell.label}
              </div>
              <div className="text-xs text-foreground/90 mt-0.5">
                {cell.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

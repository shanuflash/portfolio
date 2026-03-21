export default function GrainOverlay() {
  return (
    <>
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <filter id="grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
      <div
        className="pointer-events-none fixed inset-0 z-50 mix-blend-overlay grain-opacity"
        style={{ filter: 'url(#grain-filter)' }}
        aria-hidden="true"
      />
    </>
  );
}

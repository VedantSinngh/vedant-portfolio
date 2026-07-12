import React, { useEffect, useRef } from 'react';

/**
 * Generates a pulse-schedule waveform path for the research section.
 * Minimal — thin white strokes, no glow.
 */
function generateWaveformPath(width, height) {
  const baseline = height * 0.6;
  const amplitude = height * 0.45;
  const points = [];
  const steps = 300;

  const pulses = [
    { center: 0.18, sigma: 0.028, amp: 0.6 },
    { center: 0.38, sigma: 0.035, amp: 1.0 },
    { center: 0.58, sigma: 0.028, amp: 0.6 },
    { center: 0.78, sigma: 0.022, amp: 0.35 },
  ];

  for (let i = 0; i <= steps; i++) {
    const xNorm = i / steps;
    const x = xNorm * width;
    let y = baseline;

    for (const p of pulses) {
      const t = (xNorm - p.center) / p.sigma;
      y -= amplitude * p.amp * Math.exp(-(t * t) / 2);
    }

    points.push(`${x.toFixed(1)} ${y.toFixed(1)}`);
  }

  return `M ${points.join(' L ')}`;
}

export const ResearchWaveform = ({ width = 800, height = 80 }) => {
  const mainRef = useRef(null);
  const accentRef = useRef(null);
  const d = generateWaveformPath(width, height);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          [mainRef, accentRef].forEach((ref) => {
            if (ref.current) {
              const len = ref.current.getTotalLength();
              ref.current.style.strokeDasharray = len;
              ref.current.style.strokeDashoffset = len;
              ref.current.style.animation = `draw-line 2s ease-out forwards`;
            }
          });
        }
      },
      { threshold: 0.3 }
    );

    const svg = mainRef.current?.closest('svg');
    if (svg) observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* Baseline */}
      <line
        x1={0} y1={height * 0.6} x2={width} y2={height * 0.6}
        stroke="rgba(255,255,255,0.04)"
        strokeWidth="1"
      />
      {/* Waveform */}
      <path ref={accentRef} d={d} className="waveform-path-accent" />
      <path ref={mainRef} d={d} className="waveform-path" />
    </svg>
  );
};

export default ResearchWaveform;

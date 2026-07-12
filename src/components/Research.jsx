import React from 'react';
import { RESEARCH } from '../constants';
import { ResearchWaveform } from './PulseTrace';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Play } from 'lucide-react';

const Research = () => {
  const [ref, visible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section className="section-pad py-section" id="research">
      <div className="mb-12" ref={ref}>
        <span className="t-caption-uppercase">Research</span>
        <h2 className="t-display-lg mt-4">Current Focus</h2>
      </div>

      <div 
        ref={ref} 
        className={`bg-surface-card rounded-xl p-lg border border-hairline transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] reveal reveal-d1 ${visible ? 'visible' : ''}`}
      >
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-semantic-success animate-pulse" />
          <span className="t-caption-uppercase">{RESEARCH.label}</span>
        </div>

        <h3 className="t-display-sm mb-4">{RESEARCH.title}</h3>
        <p className="t-body-md mb-8 max-w-[800px]">{RESEARCH.description}</p>

        <div className="flex flex-wrap gap-8 mb-8">
          {RESEARCH.params.map((p) => (
            <div key={p.label} className="flex flex-col gap-1">
              <span className="t-caption-uppercase">{p.label}</span>
              <span className="font-body text-[14px] font-medium text-ink">{p.value}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 bg-canvas-soft rounded-lg p-4 border border-hairline-soft">
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-strong text-ink hover:bg-hairline transition-colors">
            <Play size={20} className="ml-1" fill="currentColor" />
          </button>
          <div className="flex-1 h-12 relative">
            {visible && <ResearchWaveform width="100%" height={48} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;

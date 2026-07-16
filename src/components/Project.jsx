import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProjectFanCarousel from './ProjectFanCarousel';

const Projects = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="section-pad py-section" id="work">
      <div className={`mb-14 reveal ${visible ? 'revealed' : ''}`} ref={ref}>
        <span className="t-caption-uppercase">Selected Work</span>
        <h2 className="t-display-lg mt-4 max-w-[600px]">
          Engineering scalable solutions &amp; AI products.
        </h2>
        <p className="t-body-md mt-3 max-w-[480px]">
          Drag, scroll, or use arrow keys to browse — click a card to explore.
        </p>
      </div>

      <ProjectFanCarousel />
    </section>
  );
};

export default Projects;

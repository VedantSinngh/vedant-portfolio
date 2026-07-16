import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CertFanCarousel from './CertFanCarousel';

const Certifications = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="section-pad py-section" id="certifications">
      <div className={`mb-14 reveal ${visible ? 'revealed' : ''}`} ref={ref}>
        <span className="t-caption-uppercase">Credentials</span>
        <h2 className="t-display-lg mt-4 max-w-[500px]">
          Verified certifications &amp; licences.
        </h2>
        <p className="t-body-md mt-3 max-w-[420px]">
          Drag, scroll, or use arrow keys — click a card to verify.
        </p>
      </div>

      <CertFanCarousel />
    </section>
  );
};

export default Certifications;

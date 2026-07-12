import React from 'react';

const Footer = () => (
  <footer className="border-t border-hairline-soft py-12 text-center">
    <div className="section-pad py-0">
      <p className="t-caption-uppercase">
        © {new Date().getFullYear()} Vedant Singh
      </p>
    </div>
  </footer>
);

export default Footer;

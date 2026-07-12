import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Project';
import Research from './components/Research';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

const Divider = () => (
  <div className="section-pad py-0">
    <hr className="w-full h-px bg-hairline border-none m-0" />
  </div>
);

const App = () => {
  return (
    <ThemeProvider>
      {/* Subtle film grain overlay could go here if needed, but keeping it clean for ElevenLabs design */}
      
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Projects />
        <Research />
        <Divider />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;

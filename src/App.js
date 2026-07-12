import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Project';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
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
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <Certifications />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;

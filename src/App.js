import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Project';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import { ThemeProvider } from './context/ThemeContext';

const Divider = () => (
  <div className="section-pad py-0">
    <hr className="w-full h-px bg-hairline border-none m-0" />
  </div>
);

const Portfolio = () => (
  <>
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
  </>
);

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

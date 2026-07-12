import React from 'react';
import { PROJECTS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col md:flex-row gap-8 items-center bg-surface-card rounded-2xl p-6 md:p-8 border border-hairline-soft transition-all duration-500 hover:border-hairline-strong hover:bg-canvas-soft hover:shadow-2xl hover:shadow-black/5 overflow-hidden reveal reveal-d${index + 1}`}
    >
      <div className="w-full md:w-[45%] aspect-video md:aspect-[4/3] rounded-xl overflow-hidden relative bg-canvas-soft border border-hairline-soft shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {project.image && (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
          />
        )}
      </div>

      <div className="flex flex-col flex-1 w-full relative z-20">
        <div className="flex items-start justify-between mb-4">
          <h3 className="t-display-sm !text-[28px]">{project.title}</h3>
          {project.deployed && project.deployed !== "#" && (
            <a href={project.deployed} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-surface-strong text-ink hover:bg-ink hover:text-canvas transition-colors">
              <ArrowUpRight size={20} strokeWidth={1.5} />
            </a>
          )}
        </div>
        
        <p className="t-body-md text-[16px] mb-8 leading-relaxed max-w-[90%]">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((t) => (
            <span key={t} className="font-body text-[12px] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full border border-hairline bg-surface-strong/50 text-ink/80">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-auto pt-6 border-t border-hairline-soft">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-[14px] font-medium hover:text-ink text-muted transition-colors"
            >
              <Github size={18} strokeWidth={1.5} />
              Source Code
            </a>
          )}
          {project.deployed && (
            <a
              href={project.deployed}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-[14px] font-medium hover:text-ink text-muted transition-colors ml-auto md:ml-0"
            >
              <ExternalLink size={18} strokeWidth={1.5} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="section-pad py-section" id="work">
      <div className="mb-16" ref={ref}>
        <span className="t-caption-uppercase">Selected Work</span>
        <h2 className="t-display-lg mt-4 max-w-[600px]">Engineering scalable solutions & AI products.</h2>
      </div>

      <div className="flex flex-col gap-8 md:gap-12">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

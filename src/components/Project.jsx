import React from 'react';
import { PROJECTS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`feature-card reveal ${visible ? 'visible' : ''} reveal-d${index + 1} flex flex-col h-full`}
    >
      <div className="w-full aspect-[4/3] rounded-md overflow-hidden mb-6 bg-surface-strong">
        {project.image && (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        )}
      </div>

      <h3 className="t-display-sm mb-3">{project.title}</h3>
      <p className="t-body-md mb-6 flex-grow">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((t) => (
          <span key={t} className="t-caption-uppercase bg-surface-strong px-2 py-1 rounded-sm">
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-auto">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 t-body-sm font-medium hover:text-primary transition-colors"
          >
            <Github size={18} strokeWidth={1.5} />
            GitHub
          </a>
        )}
        {project.deployed && (
          <a
            href={project.deployed}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline ml-auto"
          >
            <ExternalLink size={16} strokeWidth={1.5} />
            Visit
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="section-pad py-section" id="work">
      <div className="mb-12" ref={ref}>
        <span className="t-caption-uppercase">Selected Work</span>
        <h2 className="t-display-lg mt-4">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

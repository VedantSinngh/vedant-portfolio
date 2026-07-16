import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';
import Navbar from './Navbar';
import Footer from './Footer';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-canvas flex flex-col items-center justify-center gap-6">
        <Navbar />
        <p className="t-display-md text-ink">Project not found.</p>
        <button onClick={() => navigate('/')} className="btn-primary">
          Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />

      {/* Hero */}
      <div className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">
        {/* Image */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas/40 to-transparent" />

        {/* Back button */}
        <div className="absolute top-[80px] left-0 right-0 section-pad py-0">
          <motion.button
            {...fadeUp}
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium group"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            Back to Portfolio
          </motion.button>
        </div>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 section-pad pb-10">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
            >
              {project.tag}
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-display font-light text-[36px] sm:text-[48px] md:text-[60px] leading-[1.05] text-white mb-3"
            >
              {project.title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-gray-300 text-[16px] md:text-[18px] font-light max-w-[520px]"
            >
              {project.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Body */}
      <div className="section-pad py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">

          {/* Left: Description + Features */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Description */}
            <motion.div variants={fadeUp} className="mb-12">
              <span className="t-caption-uppercase mb-4 block">Overview</span>
              <p className="text-body-strong text-[17px] leading-[1.75] max-w-[640px]">
                {project.description}
              </p>
            </motion.div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <motion.div variants={fadeUp}>
                <span className="t-caption-uppercase mb-6 block">Key Features</span>
                <ul className="space-y-4">
                  {project.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      variants={fadeUp}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={18}
                        strokeWidth={1.5}
                        className="text-ink shrink-0 mt-0.5 opacity-60"
                      />
                      <span className="t-body-md">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>

          {/* Right: Tech stack + Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Sticky sidebar card */}
            <div className="lg:sticky lg:top-[90px] bg-surface-card border border-hairline rounded-2xl p-6 md:p-8">

              {/* Tech stack */}
              <div className="mb-8">
                <span className="t-caption-uppercase mb-4 block">Tech Stack</span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-body text-[12px] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full border border-hairline bg-surface-strong/60 text-ink/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <hr className="border-hairline-soft mb-8" />

              {/* Links */}
              <div className="flex flex-col gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center justify-center gap-2 w-full"
                    id={`github-link-${project.slug}`}
                  >
                    <Github size={18} strokeWidth={1.5} />
                    View Source Code
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center gap-2 w-full"
                    id={`demo-link-${project.slug}`}
                  >
                    <ExternalLink size={18} strokeWidth={1.5} />
                    Live Demo
                  </a>
                )}
              </div>

              {/* Divider + back */}
              <hr className="border-hairline-soft mt-8 mb-6" />
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-muted hover:text-ink transition-colors text-sm font-medium w-full group"
                id="back-to-portfolio"
              >
                <ArrowLeft
                  size={14}
                  className="transition-transform duration-200 group-hover:-translate-x-1"
                />
                Back to Portfolio
              </button>
            </div>
          </motion.div>
        </div>

        {/* Other projects */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-24"
        >
          <hr className="border-hairline-soft mb-12" />
          <span className="t-caption-uppercase mb-8 block">Other Projects</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects
              .filter((p) => p.slug !== slug)
              .map((p) => (
                <button
                  key={p.slug}
                  onClick={() => navigate(`/projects/${p.slug}`)}
                  className="group text-left bg-surface-card border border-hairline rounded-2xl overflow-hidden hover:border-hairline-strong transition-all duration-300 hover:shadow-xl hover:shadow-black/10"
                  id={`other-project-${p.slug}`}
                >
                  {/* Thumbnail */}
                  <div className="relative h-40 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${p.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute top-3 left-3 bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full">
                      {p.tag}
                    </span>
                  </div>
                  {/* Text */}
                  <div className="p-5">
                    <h3 className="t-display-sm !text-[18px] mb-1">{p.title}</h3>
                    <p className="text-muted text-sm line-clamp-1">{p.subtitle}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-ink/60 text-sm font-medium group-hover:text-ink transition-colors">
                      View Project
                      <ArrowLeft
                        size={14}
                        className="rotate-180 transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </button>
              ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

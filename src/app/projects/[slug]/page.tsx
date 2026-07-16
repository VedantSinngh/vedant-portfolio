import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "../../../../data/projects";

// Next.js App Router specific generateStaticParams for SSG if needed
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30">
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] md:h-[50vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-12 max-w-5xl">
            <Link
              href="/#projects"
              className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {project.tag}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              {project.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Description & Features */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Overview</h2>
              <div className="text-gray-300 leading-relaxed space-y-4 text-lg">
                {project.description.split("\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start bg-white/5 p-4 rounded-xl border border-white/10">
                    <span className="text-white mr-3 mt-0.5">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column: Links & Metadata */}
          <div className="space-y-8">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-6">Links</h3>
              <div className="flex flex-col gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-lg font-medium transition-colors border border-white/10"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Source
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-white text-black hover:bg-gray-200 py-3 px-4 rounded-lg font-bold transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

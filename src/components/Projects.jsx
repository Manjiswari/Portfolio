import React from 'react'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="py-12 relative">
      <div className="absolute bottom-10 right-5 text-4xl transform rotate-12 opacity-80">🌿</div>
      <div className="mb-10 text-center relative z-10">
        <p className="font-handwritten text-xl text-accent mb-2 inline-block px-4 py-1 doodle-border bg-white transform -rotate-2">Featured Projects</p>
        <h2 className="font-handwritten text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
          Applied AI, data science, and <span className="bg-mint px-2 doodle-border inline-block rotate-1">software engineering</span> in practice.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
        {projects.map((project, index) => (
          <article key={project.number} className={`bg-white p-8 doodle-border shadow-[8px_8px_0_0_#ff8fab] tape-top relative transform ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}>
            <div className="absolute -top-4 -left-4 bg-yellow-soft w-12 h-12 flex items-center justify-center doodle-border rounded-full font-handwritten font-bold text-xl rotate-12">
              {project.number}
            </div>
            
            <div className="mt-4 mb-4 pb-4 border-b-2 border-dashed border-ink">
              <h3 className="font-handwritten text-3xl font-bold">{project.title}</h3>
              <p className="text-accent font-handwritten text-xl">{project.subtitle}</p>
            </div>

            <p className="text-lg text-ink-light mb-6 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((item) => (
                <span key={item} className="px-3 py-1 font-handwritten bg-paper-dark doodle-border text-sm">{item}</span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="bg-lavender p-3 doodle-border transform rotate-1 flex flex-col justify-center items-center text-center">
                  <strong className="font-handwritten text-2xl mb-1">{metric.value}</strong>
                  <span className="text-xs font-bold uppercase tracking-wider">{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center font-handwritten text-xl border-t-2 border-solid border-ink pt-4 mt-4">
              <a href="#contact" className="hover:text-accent transition-colors hover:underline decoration-wavy">View Case Study →</a>
              <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-mint transition-colors bg-ink text-white px-4 py-1 doodle-border">GitHub ↗</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

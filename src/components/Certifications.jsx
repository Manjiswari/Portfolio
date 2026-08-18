import React from 'react'
import { certifications } from '../data'

export default function Certifications() {
  return (
    <section className="py-12 relative">
      <div className="mb-10 text-center">
        <p className="font-handwritten text-xl text-accent mb-2 inline-block px-4 py-1 doodle-border bg-white transform rotate-2 tape-top">Certifications</p>
        <h2 className="font-handwritten text-3xl md:text-5xl font-bold max-w-2xl mx-auto">
          Continuous learning in AI, cloud, and modern <span className="underline decoration-wavy decoration-lavender">software practices</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div key={cert.title} className={`bg-paper-dark p-6 doodle-border border-dashed shadow-sm flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}>
            <span className="font-handwritten text-sm text-ink-light bg-white px-3 py-1 rounded-full mb-3 doodle-border">{cert.provider}</span>
            <strong className="font-handwritten text-xl">{cert.title}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

import React from 'react'
import { education } from '../data'

export default function Education() {
  return (
    <section className="py-12 relative">
      <div className="absolute top-10 right-20 text-4xl transform rotate-12 opacity-80 animate-float">🎓</div>
      <div className="mb-10 text-center">
        <p className="font-handwritten text-xl text-accent mb-2 transform -rotate-2 inline-block px-4 py-1 bg-white doodle-border tape-top">Education</p>
        <h2 className="font-handwritten text-3xl md:text-5xl font-bold max-w-2xl mx-auto">
          Academic foundation with strong performance and a focus on <span className="bg-mint px-2 doodle-border inline-block rotate-1">AI & ML</span>.
        </h2>
      </div>

      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {education.map((edu, index) => (
          <div key={edu.school} className={`bg-white p-6 md:p-8 doodle-border shadow-[4px_4px_0_0_#333] transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} relative`}>
            <div className="absolute -left-3 top-6 w-6 h-6 bg-paper-dark border-2 border-ink rounded-full"></div>
            <div className="absolute -left-3 top-16 w-6 h-6 bg-paper-dark border-2 border-ink rounded-full"></div>
            
            <div className="font-handwritten text-2xl font-bold mb-2">{edu.school}</div>
            <div className="flex flex-col sm:flex-row justify-between gap-2 text-ink-light mb-4 border-b-2 border-dashed border-ink pb-2">
              <strong className="font-body text-lg">{edu.degree}</strong>
              <span className="bg-lavender px-2 doodle-border inline-block font-handwritten text-sm">{edu.period}</span>
            </div>
            <div className="font-handwritten text-xl text-accent bg-yellow-soft inline-block px-3 py-1 doodle-border">{edu.note}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

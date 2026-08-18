import React from 'react'
import { serviceCards } from '../data'

export default function Services() {
  const bgColors = ['bg-lavender', 'bg-blush', 'bg-yellow-soft', 'bg-mint']
  return (
    <section className="py-12 relative">
      <div className="absolute top-0 left-5 text-4xl transform -rotate-12 opacity-80">🦋</div>
      <div className="mb-10 text-center">
        <p className="font-handwritten text-xl text-accent mb-2 inline-block px-4 py-1 doodle-border bg-white transform rotate-2">What I Do</p>
        <h2 className="font-handwritten text-3xl md:text-4xl font-bold max-w-3xl mx-auto">
          Building systems that <span className="text-accent underline decoration-dashed">learn, reason,</span> and solve real-world problems.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceCards.map(({ icon, title, text }, index) => (
          <article key={title} className={`p-6 doodle-border shadow-[4px_4px_0_0_#333] tape-top flex flex-col items-center text-center transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:scale-105 transition-transform ${bgColors[index % 4]}`}>
            <div className="text-5xl mb-4 bg-white w-20 h-20 rounded-full flex items-center justify-center doodle-border border-dashed">{icon}</div>
            <h3 className="font-handwritten text-2xl font-bold mb-3">{title}</h3>
            <p className="text-base text-ink-light leading-relaxed">{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

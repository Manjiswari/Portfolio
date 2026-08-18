import React from 'react'
import { achievementCards } from '../data'

export default function Achievements() {
  return (
    <section id="achievements" className="py-12 relative">
      <div className="absolute top-5 left-10 text-4xl transform rotate-12 opacity-80 animate-wobble">🏆</div>
      <div className="mb-10 text-center">
        <p className="font-handwritten text-xl text-accent mb-2 transform -rotate-2 inline-block px-4 py-1 bg-white doodle-border">Achievements</p>
        <h2 className="font-handwritten text-3xl md:text-5xl font-bold max-w-2xl mx-auto">
          Academic performance, <span className="bg-blush px-2 doodle-border inline-block rotate-1">problem-solving</span>, and competitive momentum.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievementCards.map((item, index) => (
          <div key={item.label} className={`bg-white p-6 pb-10 doodle-border shadow-[4px_4px_0_0_#333] flex flex-col items-center text-center transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} hover:scale-105 transition-transform`}>
            <div className="font-handwritten text-4xl font-bold text-accent mb-2">{item.value}</div>
            <div className="font-bold text-lg mb-2 uppercase tracking-wide bg-yellow-soft px-2 transform -rotate-1 inline-block border border-dashed border-ink">{item.label}</div>
            <div className="text-ink-light font-handwritten text-lg leading-relaxed">{item.detail}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

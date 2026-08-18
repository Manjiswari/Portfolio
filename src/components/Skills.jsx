import React from 'react'
import { skillGroups } from '../data'

export default function Skills() {
  const bgColors = ['bg-blush', 'bg-mint', 'bg-yellow-soft', 'bg-lavender', 'bg-sage']
  return (
    <section id="skills" className="py-12 relative">
      <div className="absolute top-20 right-10 text-4xl transform -rotate-12 opacity-80">✏️</div>
      <div className="mb-10 text-center">
        <p className="font-handwritten text-xl text-accent mb-2 inline-block px-4 py-1 doodle-border bg-white transform rotate-3">Tech Stack</p>
        <h2 className="font-handwritten text-3xl md:text-5xl font-bold max-w-2xl mx-auto">
          Tools and technologies I use to <span className="underline decoration-wavy decoration-mint">design and deploy</span> intelligent systems.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group, index) => (
          <div key={group.label} className={`p-6 doodle-border tape-top shadow-[4px_4px_0_0_#333] transform ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'} ${bgColors[index % 5]}`}>
            <h3 className="font-handwritten text-2xl font-bold mb-4 border-b-2 border-dashed border-ink pb-2">{group.label}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="px-3 py-1 bg-white font-handwritten text-base doodle-border shadow-sm hover:scale-105 transition-transform">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import React from 'react'
import { specialties } from '../data'

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 py-10 relative">
      <div className="flex-1">
        <div className="inline-block px-4 py-1 mb-6 bg-lavender doodle-border transform rotate-2">
          <p className="font-handwritten text-sm uppercase tracking-widest text-ink">AI / ML Engineer & CS Student</p>
        </div>
        <h1 className="font-handwritten text-5xl md:text-7xl font-bold leading-tight mb-4">
          Hi, I&apos;m <span className="text-accent underline decoration-wavy decoration-mint">Manjiswari Jajula</span> 🌸
        </h1>
        <p className="text-lg md:text-xl text-ink-light leading-relaxed max-w-2xl bg-white p-4 doodle-border shadow-[4px_4px_0_0_#ccc] mb-8 transform -rotate-1">
          I build intelligent, data-driven systems using Machine Learning, NLP, LLMs,
          and modern software technologies. Welcome to my digital sketchbook! ✏️
        </p>

        <div className="flex flex-wrap gap-4 mb-8 font-handwritten text-xl">
          <a className="px-6 py-2 bg-accent text-white doodle-border hover:scale-105 transition-transform" href="#projects">View My Projects</a>
          <a className="px-6 py-2 bg-paper-dark doodle-border hover:bg-blush transition-colors" href="https://github.com/Manjiswari" target="_blank" rel="noreferrer">GitHub</a>
          <a className="px-6 py-2 bg-paper-dark doodle-border hover:bg-mint transition-colors" href="https://www.linkedin.com/in/jajula-manjiswari-985765291/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>

        <div className="flex flex-wrap gap-3 mb-6" aria-label="Areas of focus">
          {specialties.map((item, index) => (
            <span key={item} className={`px-3 py-1 font-handwritten text-sm doodle-border ${index % 2 === 0 ? 'bg-mint rotate-1' : 'bg-yellow-soft -rotate-1'}`}>{item}</span>
          ))}
        </div>

        <div className="inline-block px-4 py-2 tape-top mt-4 bg-white doodle-border transform rotate-1">
          <p className="font-handwritten text-ink-light">B.Tech CSE (AI & ML) · VIT-AP · CGPA 9.18/10</p>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center relative" aria-label="AI system visualization">
        <div className="absolute top-0 right-0 text-5xl animate-wobble">✨</div>
        <div className="absolute bottom-10 left-0 text-4xl animate-float">🌿</div>
        
        <div className="bg-white p-6 doodle-border doodle-shadow w-full max-w-sm transform rotate-3 relative tape-top">
          <div className="flex justify-center mb-6">
            <span className="font-handwritten text-2xl border-b-2 border-dashed border-ink pb-1">AI Lab Notes</span>
          </div>
          <div className="flex flex-col items-center gap-4 font-handwritten text-xl">
            <div className="px-6 py-3 bg-blush doodle-border">Data Input 📥</div>
            <div className="h-8 border-l-2 border-dashed border-ink"></div>
            <div className="px-6 py-3 bg-lavender doodle-border transform -rotate-2">Magic Model 🧠</div>
            <div className="h-8 border-l-2 border-dashed border-ink"></div>
            <div className="px-6 py-3 bg-mint doodle-border transform rotate-2">Cool Output 🎉</div>
          </div>
        </div>
      </div>
    </section>
  )
}

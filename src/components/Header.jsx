import React from 'react'

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b-2 border-dashed border-ink tape-top pt-4">
      <div className="flex items-center gap-3 bg-blush px-4 py-2 doodle-border transform -rotate-2 hover:rotate-0 transition-transform">
        <span className="font-handwritten font-bold text-2xl text-accent">MJ</span>
        <span className="font-handwritten text-lg">Manjiswari Jajula</span>
      </div>

      <nav className="flex flex-wrap justify-center gap-4 font-handwritten text-xl" aria-label="Main navigation">
        <a href="#about" className="px-3 py-1 bg-yellow-soft doodle-border hover:bg-mint transition-colors transform hover:-translate-y-1">About</a>
        <a href="#projects" className="px-3 py-1 bg-mint doodle-border hover:bg-blush transition-colors transform hover:translate-y-1">Projects</a>
        <a href="#skills" className="px-3 py-1 bg-lavender doodle-border hover:bg-yellow-soft transition-colors transform hover:-translate-y-1">Skills</a>
        <a href="#achievements" className="px-3 py-1 bg-blush doodle-border hover:bg-lavender transition-colors transform hover:translate-y-1">Achievements</a>
        <a href="#contact" className="px-3 py-1 bg-sage doodle-border hover:bg-mint transition-colors transform hover:-translate-y-1">Contact</a>
      </nav>
    </header>
  )
}

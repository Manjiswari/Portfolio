import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 relative flex justify-center">
      <div className="absolute top-0 right-1/4 text-4xl transform -rotate-12 opacity-80 animate-wobble">✉️</div>
      <div className="bg-paper p-10 max-w-2xl w-full doodle-border border-dashed shadow-[8px_8px_0_0_#ff8fab] transform rotate-1 text-center relative tape-top">
        <p className="font-handwritten text-xl text-ink-light mb-4 transform -rotate-2">Let&apos;s build something intelligent.</p>
        <h2 className="font-handwritten text-4xl md:text-5xl font-bold mb-6 text-accent">Interested in AI, ML, data, or software development?</h2>
        <p className="text-lg text-ink-light mb-8">I&apos;m always open to interesting projects and opportunities. Drop me a note!</p>

        <div className="mb-10">
          <a className="inline-block px-8 py-3 bg-mint text-ink font-handwritten text-2xl font-bold doodle-border hover:bg-yellow-soft hover:-translate-y-1 transition-transform" href="mailto:manjiswarijajula@gmail.com">Get In Touch 💌</a>
        </div>

        <div className="flex flex-col items-center gap-6 border-t-2 border-dashed border-ink pt-6">
          <a href="mailto:manjiswarijajula@gmail.com" className="font-handwritten text-2xl hover:text-accent transition-colors">manjiswarijajula@gmail.com</a>
          <div className="flex flex-wrap justify-center gap-6 font-handwritten text-xl">
            <a href="https://www.linkedin.com/in/jajula-manjiswari-985765291/" target="_blank" rel="noreferrer" className="hover:text-mint transition-colors transform hover:-translate-y-1">LinkedIn</a>
            <a href="https://github.com/Manjiswari" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors transform hover:-translate-y-1">GitHub</a>
            <a href="https://leetcode.com/u/Jajula_Manjiswari/" target="_blank" rel="noreferrer" className="hover:text-yellow-600 transition-colors transform hover:-translate-y-1">LeetCode</a>
          </div>
        </div>
      </div>
    </section>
  )
}

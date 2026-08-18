import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-12 relative">
      <div className="absolute top-10 right-10 text-4xl transform rotate-12 opacity-80">🌸</div>
      <div className="mb-10 text-center">
        <p className="font-handwritten text-xl text-accent mb-2 transform -rotate-2 inline-block">About Me</p>
        <h2 className="font-handwritten text-3xl md:text-5xl font-bold max-w-2xl mx-auto leading-relaxed">
          AI-driven problem solver with a <span className="underline decoration-wavy decoration-yellow-soft">software engineering</span> mindset.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <p className="bg-blush p-6 doodle-border shadow-[4px_4px_0_0_#333] transform -rotate-1 hover:rotate-0 transition-transform text-lg">
          I&apos;m a Computer Science and Engineering student specializing in{' '}
          <strong className="font-handwritten text-xl">Artificial Intelligence and Machine Learning</strong> at Vellore Institute
          of Technology, Amaravati.
        </p>
        <p className="bg-mint p-6 doodle-border shadow-[4px_4px_0_0_#333] transform rotate-1 hover:rotate-0 transition-transform text-lg tape-top">
          My interests lie at the intersection of <strong className="font-handwritten text-xl">AI, data, and software engineering</strong>.
          I enjoy building practical systems that turn data into useful insights — from NLP-based
          classification and AI-powered customer support to computer vision and IoT applications.
        </p>
        <p className="bg-yellow-soft p-6 doodle-border shadow-[4px_4px_0_0_#333] transform -rotate-2 hover:rotate-0 transition-transform text-lg">
          I&apos;m particularly interested in <strong className="font-handwritten text-xl">Machine Learning, NLP, LLM applications, RAG systems,</strong>{' '}
          and intelligent automation, while continuously strengthening my foundations in algorithms and
          software development.
        </p>
      </div>
    </section>
  )
}

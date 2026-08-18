const specialties = [
  'Python', 'Machine Learning', 'NLP', 'LLMs', 'RAG', 'React', 'FastAPI'
]

const serviceCards = [
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    text: 'Machine Learning, Deep Learning, NLP, LLMs, and retrieval-augmented generation systems.'
  },
  {
    icon: '📊',
    title: 'Data & Intelligence',
    text: 'Data-driven solutions, feature engineering, model evaluation, and actionable insights.'
  },
  {
    icon: '💻',
    title: 'Software Development',
    text: 'Python, Java, JavaScript, React, Node.js, Express.js, and modern application architecture.'
  },
  {
    icon: '🧩',
    title: 'Computer Science',
    text: 'Data structures, algorithms, OOP, DBMS, and strong problem-solving fundamentals.'
  }
]

const projects = [
  {
    number: '01',
    title: 'Support-Pilot',
    subtitle: 'AI Customer Support Automation Platform',
    description:
      'An AI-powered support workspace designed to automate ticket triage, response generation, escalation, and email workflows.',
    tech: ['FastAPI', 'Gemini', 'Pinecone', 'SQLAlchemy', 'RAG'],
    metrics: [
      { value: '50+', label: 'Tickets processed' },
      { value: '40%', label: 'Reduction in handling time' },
      { value: 'Human-in-the-loop', label: 'Review workflow' }
    ]
  },
  {
    number: '02',
    title: 'Non-Invasive Anemia Detection',
    subtitle: 'AI Healthcare Screening System',
    description:
      'An image-based machine learning system exploring non-invasive anemia screening using conjunctiva and palm image features.',
    tech: ['Python', 'ANN', 'OpenCV', 'CIELAB'],
    metrics: [
      { value: '93%', label: 'Accuracy & recall' },
      { value: '81%', label: 'Conjunctiva RGB baseline' },
      { value: '256 → 128 → 64', label: 'ANN architecture' }
    ]
  },
  {
    number: '03',
    title: 'Automated News Classification',
    subtitle: 'NLP News Classification Pipeline',
    description:
      'An NLP pipeline that classifies news articles across 20 categories and compares classical machine-learning approaches.',
    tech: ['Python', 'NLP', 'TF-IDF', 'Naive Bayes', 'Linear SVM'],
    metrics: [
      { value: '20', label: 'News categories' },
      { value: '91.11%', label: 'Linear SVM accuracy' },
      { value: '84.76%', label: 'Naive Bayes accuracy' }
    ]
  },
  {
    number: '04',
    title: 'Smart Library',
    subtitle: 'Seat Availability Indicator',
    description:
      'An IoT-based system that detects library seat occupancy and provides real-time availability through a web dashboard and LCD display.',
    tech: ['Arduino UNO', 'ESP32', 'Embedded C', 'IR Sensors'],
    metrics: [
      { value: 'Real-time', label: 'Occupancy detection' },
      { value: 'Wi‑Fi', label: 'Dashboard' },
      { value: 'LCD', label: 'Remote monitoring' }
    ]
  }
]

const skillGroups = [
  { label: 'Languages', items: ['Python', 'Java', 'SQL', 'JavaScript'] },
  { label: 'AI / ML', items: ['Machine Learning', 'Deep Learning', 'NLP', 'LLMs', 'RAG'] },
  { label: 'Development', items: ['React', 'Node.js', 'Express.js', 'FastAPI'] },
  { label: 'Data & Tools', items: ['MySQL', 'Git', 'GitHub', 'Pinecone'] },
  { label: 'CS Fundamentals', items: ['DSA', 'OOP', 'DBMS'] }
]

const achievementCards = [
  { value: '9.18 / 10', label: 'Current CGPA', detail: 'B.Tech CSE — AI & ML' },
  { value: '400+', label: 'LeetCode Problems', detail: 'Consistent DSA practice' },
  { value: '#84', label: 'VIT Top Coders', detail: 'Top 100 placement in the competition' },
  { value: 'District Topper', label: 'NTR District', detail: 'Government Junior College students — Intermediate' }
]

const certifications = [
  { provider: 'IBM', title: 'Generative AI using watsonx' },
  { provider: 'AWS Academy', title: 'Cloud Foundations' },
  { provider: 'AWS Academy', title: 'Cloud Architecting' }
]

const education = [
  {
    school: 'Vellore Institute of Technology, Amaravati',
    degree: 'B.Tech — Computer Science & Engineering (AI & ML)',
    period: '2023 — 2027',
    note: 'CGPA: 9.18 / 10'
  },
  {
    school: 'Government Junior College, Vijayawada',
    degree: 'Intermediate — MPC',
    period: '2021 — 2023',
    note: '95.8%'
  },
  {
    school: 'M.K. Baig Municipal Corporation High School',
    degree: 'Secondary Education',
    period: '2019 — 2021',
    note: '98.0%'
  }
]

import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 relative font-body text-ink">
      {/* Decorative background doodles */}
      <div className="absolute top-10 left-10 text-blush-dark opacity-50 text-4xl animate-float">🌸</div>
      <div className="absolute top-40 right-10 text-mint opacity-60 text-5xl animate-wobble">✨</div>
      <div className="absolute bottom-20 left-20 text-yellow-soft opacity-80 text-6xl animate-float" style={{animationDelay: '1s'}}>⭐</div>
      
      <div className="bg-paper-dark p-2 md:p-8 rounded-3xl doodle-border shadow-xl">
        <div className="bg-paper p-4 md:p-8 rounded-2xl doodle-border border-dashed relative">
          <Header />

          <main className="flex flex-col gap-16 mt-12">
            <Hero />
            <About />
            <Services />
            <Projects />
            <Skills />
            <Achievements />
            <Certifications />
            <Education />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App

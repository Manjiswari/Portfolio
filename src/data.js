export const specialties = [
  'Python', 'Machine Learning', 'NLP', 'LLMs', 'RAG', 'React', 'FastAPI'
]

export const serviceCards = [
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

export const projects = [
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
    ],
    link: 'https://github.com/Manjiswari/support-pilot'
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
    ],
    link: 'https://github.com/Manjiswari/Non_Invasive_anemia_detection'
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
    ],
    link: 'https://github.com/Manjiswari/News_Classification'
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
    ],
    link: 'https://github.com/Manjiswari/Smart-Library-Seating-Availability'
  }
]

export const skillGroups = [
  { label: 'Languages', items: ['Python', 'Java', 'SQL', 'JavaScript'] },
  { label: 'AI / ML', items: ['Machine Learning', 'Deep Learning', 'NLP', 'LLMs', 'RAG'] },
  { label: 'Development', items: ['React', 'Node.js', 'Express.js', 'FastAPI'] },
  { label: 'Data & Tools', items: ['MySQL', 'Git', 'GitHub', 'Pinecone'] },
  { label: 'CS Fundamentals', items: ['DSA', 'OOP', 'DBMS'] }
]

export const achievementCards = [
  { value: '9.18 / 10', label: 'Current CGPA', detail: 'B.Tech CSE — AI & ML' },
  { value: '400+', label: 'LeetCode Problems', detail: 'Consistent DSA practice' },
  { value: '#84', label: 'VIT Top Coders', detail: 'Top 100 placement in the competition' },
  { value: 'District Topper', label: 'NTR District', detail: 'Government Junior College students — Intermediate' }
]

export const certifications = [
  { provider: 'IBM', title: 'Generative AI using watsonx' },
  { provider: 'AWS Academy', title: 'Cloud Foundations' },
  { provider: 'AWS Academy', title: 'Cloud Architecting' }
]

export const education = [
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

export default {
  specialties,
  serviceCards,
  projects,
  skillGroups,
  achievementCards,
  certifications,
  education
}

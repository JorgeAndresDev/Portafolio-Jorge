import cvUrl from '../assets/cv/Jorge_Gomez_CV.pdf'
import type { Certification, EducationItem, ExperienceItem, TechnologyGroup } from './types'
import { projects } from './projects.en'

const profile = {
  name: 'Jorge Andrés Gómez Díaz',
  shortName: 'Jorge Gómez',
  brand: 'JORGE GÓMEZ DEV',
  role: 'Full Stack Developer',
  location: 'Bogotá, Colombia',
  email: 'jorgeandreg1207@gmail.com',
  phone: '+57 304 312 7385',
  whatsapp: 'https://wa.me/573043127385',
  github: 'https://github.com/JorgeAndresDev',
  linkedin: 'https://www.linkedin.com/in/jorge-andres-dev/',
  website: 'https://portafolio-jorge.vercel.app/',
  cv: cvUrl,

  hero: {
    badge: 'AVAILABLE FOR REMOTE / HYBRID ROLES',
    headlineA: 'SOFTWARE THAT',
    headlineB: 'SOLVES REAL',
    headlineC: 'PROBLEMS.',
    valueProposition:
      'Full Stack Developer. I build digital products end to end: extremely fluid frontends, fast and secure APIs, and architecture that scales. Performance, security and a premium experience from day one.',
  },

  metrics: [
    { value: '+2', label: 'Years of experience' },
    { value: '5', label: 'Projects completed' },
    { value: '2', label: 'Products online' },
  ],

  highlights: [
    { title: 'API Security', description: 'JWT protection' },
    { title: 'Premium UX', description: '60fps interactions' },
    { title: 'Architecture', description: 'Guaranteed scalability' },
    { title: 'Animations', description: 'Motion & GSAP' },
  ],

  about: {
    heading: 'I Build Solid, Attractive and Secure Software.',
    paragraphs: [
      'I am Jorge Andrés Gómez Díaz, a Full Stack developer. I create digital products that combine an extremely fluid frontend with fast, secure and maintainable backend APIs.',
      'With a Software Analysis and Development technologist degree (SENA, 2025) and real experience in end-to-end web and mobile projects, I have built complete applications: mobile apps with Offline First architecture, full stack platforms with JWT authentication and conversion-oriented landing pages.',
      'My focus is engineering thinking: analyze the problem, design the solution, choose the right architecture and deliver clean, scalable code ready for production.',
    ],
    pillars: [
      { label: 'Methodology', value: 'Clean & testable' },
      { label: 'Architecture', value: 'React + FastAPI' },
      { label: 'Priority', value: 'Performance' },
      { label: 'Delivery', value: 'High Impact' },
    ],
    impact: {
      title: 'Real Impact',
      text: 'Secure APIs, admin panels and transparent flows designed to scale.',
      points: ['Continuous Scalability', 'Premium UX (60fps)', 'Efficient Databases'],
    },
  },

  process: {
    steps: [
      { step: '01', name: 'Problem', text: 'Understand what needs to be solved and for whom.' },
      { step: '02', name: 'Analysis', text: 'Requirements, constraints and success criteria.' },
      { step: '03', name: 'Design', text: 'Experience, flows and product decisions.' },
      { step: '04', name: 'Architecture', text: 'System structure and technologies.' },
      { step: '05', name: 'Development', text: 'Clean, modular and typed code.' },
      { step: '06', name: 'Testing', text: 'Flow validation and quality.' },
      { step: '07', name: 'Deploy', text: 'Release and environment configuration.' },
      { step: '08', name: 'Iteration', text: 'Continuous improvement based on results.' },
    ],
  },
}

const experience: ExperienceItem[] = [
  {
    role: 'Full Stack Developer',
    company: 'LOGISTICOS.CO S.A.S.',
    location: 'Sincelejo, Colombia',
    period: 'Feb 2025 – Aug 2025',
    technologies: ['React', 'Python', 'MySQL', 'REST APIs', 'Axios'],
    highlights: [
      'Built interactive React interfaces with dynamic validation, state management and production UX flows.',
      'Automated logistics report generation with Python, reducing analysis time and enabling metric-driven decisions.',
      'Integrated RESTful APIs with Axios/Fetch managing async flows and complete CRUD operations over MySQL.',
    ],
  },
  {
    role: 'Freelance Full Stack Developer',
    company: 'JLUXURIES',
    location: 'Independent Project · Remote',
    period: 'Sep 2025 – Dec 2025',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'JWT'],
    highlights: [
      'Designed and built a Full Stack platform with JWT authentication, user management and production-ready scalable architecture.',
      'Implemented a premium React + TypeScript + Tailwind CSS frontend achieving an enterprise-level visual experience.',
      'Set up the backend with FastAPI + PostgreSQL establishing a robust REST API with documented endpoints and structured error handling.',
    ],
  },
  {
    role: 'Junior Developer — Academic Projects',
    company: 'SENA',
    location: 'Sincelejo, Colombia',
    period: 'Jan 2023 – Aug 2025',
    technologies: ['Python', 'JavaScript', 'MySQL', 'OOP', 'SRS'],
    highlights: [
      'Designed and implemented software solutions with OOP, efficient algorithms and MySQL databases.',
      'Produced SRS documents and managed requirements applying formal software analysis methodologies.',
    ],
  },
]

const education: EducationItem[] = [
  { title: 'Software Analysis and Development Technologist', institution: 'SENA', year: '2025' },
  { title: 'Computer Maintenance Technician', institution: 'SENA', year: '2023' },
]

const certifications: Certification[] = [
  { name: 'Object-Oriented Design', hours: '80h', year: '2025' },
  { name: 'MySQL Database Construction', hours: '48h', year: '2025' },
  { name: 'Software Requirements Management', hours: '96h', year: '2023' },
  { name: 'Problem Solving with Algorithms', hours: '96h', year: '2023' },
  { name: 'Programming Fundamentals', hours: '80h', year: '2023' },
  { name: 'SRS Requirements Specification', hours: '80h', year: '2023' },
]

const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Basic A2 · In progress' },
]

const technologyGroups: TechnologyGroup[] = [
  { category: 'Languages', items: ['TypeScript', 'Python', 'JavaScript', 'SQL'] },
  {
    category: 'Frontend',
    items: ['React', 'React Native', 'Tailwind CSS', 'HTML5', 'Expo', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'REST APIs', 'JWT', 'Express', 'Node.js'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Axios', 'Vite', 'Deployments'],
  },
  {
    category: 'Concepts',
    items: ['Offline First', 'Full Stack', 'OOP', 'Architecture'],
  },
]

export const en = { profile, projects, experience, education, certifications, languages, technologyGroups }
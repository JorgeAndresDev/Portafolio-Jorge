import cvUrl from '../assets/cv/Jorge_Gomez_CV.pdf'
import type { Certification, EducationItem, ExperienceItem, TechnologyGroup } from './types'
import { projects } from './projects.es'

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
    badge: 'ROLES REMOTOS / HÍBRIDOS / PRESENCIALES',
    headlineA: 'SOFTWARE QUE',
    headlineB: 'RESUELVE PROBLEMAS',
    headlineC: 'REALES.',
    valueProposition:
      'Desarrollador Full Stack. Construyo productos digitales de punta a punta: frontend extremadamente fluido, APIs rápidas y seguras, y arquitectura que escala. Rendimiento, seguridad y experiencia premium desde el inicio.',
  },

  metrics: [
    { value: '+2', label: 'Años de experiencia' },
    { value: '5', label: 'Proyectos completados' },
    { value: '2', label: 'Productos en línea' },
  ],

  highlights: [
    { title: 'Seguridad API', description: 'Protección JWT' },
    { title: 'UX Premium', description: 'Interacciones 60fps' },
    { title: 'Arquitectura', description: 'Escalabilidad asegurada' },
    { title: 'Animaciones', description: 'Motion & GSAP' },
  ],

  about: {
    heading: 'Construyo Software Sólido, Atractivo y Seguro.',
    paragraphs: [
      'Soy Jorge Andrés Gómez Díaz, desarrollador Full Stack. Creo productos digitales que combinan un frontend extremadamente fluido con APIs backend rápidas, seguras y mantenibles.',
      'Con Tecnología en Análisis y Desarrollo de Software (SENA, 2025) y experiencia real en proyectos web y móvil end-to-end, he construido aplicaciones completas: apps móviles con arquitectura Offline First, plataformas full stack con autenticación JWT y landing pages orientadas a conversión.',
      'Mi enfoque está en el pensamiento de ingeniería: analizar el problema, diseñar la solución, elegir la arquitectura correcta y entregar código limpio, escalable y listo para producción.',
    ],
    pillars: [
      { label: 'Metodología', value: 'Clean & testable' },
      { label: 'Arquitectura', value: 'React + FastAPI' },
      { label: 'Prioridad', value: 'Rendimiento' },
      { label: 'Entrega', value: 'Alto Impacto' },
    ],
    impact: {
      title: 'Impacto Real',
      text: 'APIs seguras, paneles administrativos y flujos transparentes diseñados para escalar.',
      points: ['Escalabilidad Continua', 'UX Premium (60fps)', 'Bases de Datos Eficientes'],
    },
  },

  process: {
    steps: [
      { step: '01', name: 'Problema', text: 'Entender qué se necesita resolver y para quién.' },
      { step: '02', name: 'Análisis', text: 'Requisitos, restricciones y criterios de éxito.' },
      { step: '03', name: 'Diseño', text: 'Experiencia, flujos y decisiones de producto.' },
      { step: '04', name: 'Arquitectura', text: 'Estructura del sistema y tecnologías.' },
      { step: '05', name: 'Desarrollo', text: 'Código limpio, modular y tipado.' },
      { step: '06', name: 'Pruebas', text: 'Validación de flujos y calidad.' },
      { step: '07', name: 'Deploy', text: 'Publicación y configuración del entorno.' },
      { step: '08', name: 'Iteración', text: 'Mejora continua basada en resultados.' },
    ],
  },
}

const experience: ExperienceItem[] = [
  {
    role: 'Full Stack Developer',
    company: 'LOGISTICOS.CO S.A.S.',
    location: 'Sincelejo, Colombia',
    period: 'Feb 2025 – Ago 2025',
    technologies: ['React', 'Python', 'MySQL', 'REST APIs', 'Axios'],
    highlights: [
      'Desarrollé interfaces interactivas en React con validaciones dinámicas, manejo de estado y flujos UX en producción.',
      'Automaticé la generación de reportes logísticos con Python, reduciendo tiempos de análisis y facilitando decisiones basadas en métricas.',
      'Integré APIs RESTful con Axios/Fetch gestionando flujos asíncronos y operaciones CRUD completas sobre MySQL.',
    ],
  },
  {
    role: 'Full Stack Developer Freelance',
    company: 'JLUXURIES',
    location: 'Proyecto Independiente · Remoto',
    period: 'Sep 2025 – Dic 2025',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'JWT'],
    highlights: [
      'Diseñé y construí una plataforma Full Stack con autenticación JWT, gestión de usuarios y arquitectura escalable lista para producción.',
      'Implementé un frontend premium con React + TypeScript + Tailwind CSS logrando una experiencia visual de nivel enterprise.',
      'Configuré el backend con FastAPI + PostgreSQL estableciendo una API REST robusta con endpoints documentados y manejo estructurado de errores.',
    ],
  },
  {
    role: 'Desarrollador Junior — Proyectos Académicos',
    company: 'SENA',
    location: 'Sincelejo, Colombia',
    period: 'Ene 2023 – Ago 2025',
    technologies: ['Python', 'JavaScript', 'MySQL', 'POO', 'SRS'],
    highlights: [
      'Diseñé e implementé soluciones de software con POO, algoritmos eficientes y bases de datos MySQL.',
      'Elaboré documentos SRS y gestioné requisitos aplicando metodologías formales de análisis de software.',
    ],
  },
]

const education: EducationItem[] = [
  { title: 'Tecnólogo en Análisis y Desarrollo de Software', institution: 'SENA', year: '2025' },
  { title: 'Técnico en Mantenimiento de Computadores', institution: 'SENA', year: '2023' },
]

const certifications: Certification[] = [
  { name: 'Diseño Orientado a Objetos', hours: '80h', year: '2025' },
  { name: 'Construcción de BD con MySQL', hours: '48h', year: '2025' },
  { name: 'Gestión de Requisitos de Software', hours: '96h', year: '2023' },
  { name: 'Solución de Problemas con Algoritmos', hours: '96h', year: '2023' },
  { name: 'Fundamentos de Programación', hours: '80h', year: '2023' },
  { name: 'Especificación de Requisitos SRS', hours: '80h', year: '2023' },
]

const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Básico A2 · En progreso' },
]

const technologyGroups: TechnologyGroup[] = [
  { category: 'Lenguajes', items: ['TypeScript', 'Python', 'JavaScript', 'SQL'] },
  {
    category: 'Frontend',
    items: ['React', 'React Native', 'Tailwind CSS', 'HTML5', 'Expo', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'REST APIs', 'JWT', 'Express', 'Node.js'],
  },
  {
    category: 'Bases de Datos',
    items: ['PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    category: 'Herramientas',
    items: ['Git', 'GitHub', 'Axios', 'Vite', 'Deployments'],
  },
  {
    category: 'Conceptos',
    items: ['Offline First', 'Full Stack', 'POO', 'Arquitectura'],
  },
]

export const es = { profile, projects, experience, education, certifications, languages, technologyGroups }
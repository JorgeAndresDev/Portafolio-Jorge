import { mergeProject } from './projectBase'
import type { Project } from './types'

export const projects: Project[] = [
  mergeProject('cobrago', {
    title: 'COBRAGO',
    tagline: 'All-in-one mobile app to manage collections, loans and personal finances.',
    description:
      'Mobile app with Offline First architecture for loan and collections management: local SQLite with automatic server synchronization.',
    categoryLabel: 'Fintech App',
    status: 'Ready for commercial use',
    features: ['Real-time Sync', 'Local Portfolio Management', 'Statistics Dashboard'],
    github: [
      { label: 'API Backend', url: 'https://github.com/JorgeAndresDev/API-cobrago.git' },
      { label: 'Mobile App', url: 'https://github.com/JorgeAndresDev/cobrago-mobile.git' },
    ],
    caseStudy: {
      context:
        'COBRAGO is an all-in-one mobile app for managing collections, loans and personal finances. It is built with Offline First architecture: data lives in a local SQLite database and syncs automatically with the server when connectivity is available.',
      problem:
        'Managing a portfolio of collections and loans requires operating even without a stable connection. Information (clients, loans and payments) must always be available on the device and reflected on the server as soon as connectivity is restored, without losing or duplicating operations.',
      solution:
        'A React Native + Expo mobile app with a local SQLite database, automatic sync against a JWT-protected FastAPI API, statistics dashboard and light/dark theme. Designed for commercial use and ready to operate reliably.',
      functionalities: [
        'Client, loan and payment management',
        'Real-time sync with the server',
        'Local portfolio management (Offline First)',
        'Statistics dashboard',
        'JWT authentication',
        'Light/dark theme',
      ],
      architecture: [
        'Mobile app: React Native + Expo (TypeScript)',
        'Local database: SQLite (offline mode)',
        'REST API: FastAPI',
        'Server database: PostgreSQL',
        'Authentication: JWT',
      ],
      technologies: ['React Native', 'Expo', 'TypeScript', 'FastAPI', 'PostgreSQL', 'SQLite', 'JWT'],
      decisions: [
        {
          title: 'Offline First architecture',
          text: 'I chose a local SQLite so the app works without connection and syncs when connectivity returns, prioritizing information availability over server availability.',
        },
        {
          title: 'React Native + Expo',
          text: 'Expo makes it possible to iterate fast and ship to iOS and Android keeping a single TypeScript codebase.',
        },
        {
          title: 'FastAPI + JWT API',
          text: 'A fast backend with automatic documentation and secure authentication to protect sensitive portfolio operations.',
        },
      ],
      challenges: [
        {
          title: 'Synchronization',
          text: 'Coordinating local and remote data so operations done offline are neither lost nor duplicated when reconnecting.',
        },
        {
          title: 'Offline state',
          text: 'Ensuring that actions taken offline are correctly reflected on the server once connectivity is restored.',
        },
      ],
      result:
        'A mobile app ready for commercial use that lets you manage loans and collections reliably, even offline, with data always in sync.',
    },
  }),
  mergeProject('jluxuries', {
    title: 'JLUXURIES STORE',
    tagline: 'Professional platform with admin panel, JWT Auth and optimized cart.',
    description:
      'Full stack e-commerce with admin panel, JWT authentication, optimized cart and inventory management.',
    categoryLabel: 'E-Commerce',
    status: 'Ready for production',
    features: ['Protected Routes (RBAC)', 'Fast RESTful API', 'Inventory Management'],
    github: [
      { label: 'API Backend', url: 'https://github.com/JorgeAndresDev/JLUXURIES-API.git' },
      { label: 'Frontend', url: 'https://github.com/JorgeAndresDev/JLUXURIES-Front' },
    ],
    caseStudy: {
      context:
        'JLUXURIES is a full stack e-commerce platform developed as an end-to-end freelance project: frontend, backend, authentication and deployment. It includes an admin panel, optimized cart and inventory management.',
      problem:
        'An e-commerce needs to clearly separate the shopping experience from the admin panel, protect routes according to the user role and keep inventory consistent with every sale operation.',
      solution:
        'A premium frontend with React + TypeScript + Tailwind CSS and a FastAPI + PostgreSQL backend with documented REST API, JWT authentication and structured error handling. The frontend and the API live in independent repositories.',
      functionalities: [
        'Admin panel',
        'Optimized cart',
        'Inventory management',
        'JWT authentication',
        'Protected routes (RBAC)',
        'Documented RESTful API',
      ],
      architecture: [
        'Frontend: React + TypeScript + Tailwind CSS',
        'Backend: FastAPI',
        'Database: PostgreSQL',
        'Authentication: JWT',
        'Separate repositories for API and frontend',
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'JWT'],
      decisions: [
        {
          title: 'Decoupled frontend and backend',
          text: 'Two independent repositories so the user experience and the API can evolve without coupling.',
        },
        {
          title: 'JWT auth with role control',
          text: 'Admin routes protected with tokens and role-based access control (RBAC).',
        },
        {
          title: 'Documented API',
          text: 'Documented endpoints and structured errors to make frontend integration and maintenance easier.',
        },
      ],
      challenges: [
        {
          title: 'Protected routes',
          text: 'Ensuring that only authorized users can access the admin panel.',
        },
        {
          title: 'Inventory consistency',
          text: 'Keeping stock coherent between cart, purchases and the admin panel.',
        },
      ],
      result:
        'A production-ready full stack platform with enterprise-level visual experience, secure authentication and scalable architecture.',
    },
  }),
  mergeProject('logisys', {
    title: 'LOGI SYS',
    tagline: 'Advanced point-of-sale and logistics inventory system.',
    description:
      'SaaS point-of-sale and logistics inventory platform with light/dark views and statistical reports.',
    categoryLabel: 'SaaS Platform',
    status: 'Code on GitHub',
    features: ['Stock Management', 'Statistical Reports', 'Point of Sale'],
    github: [
      { label: 'API Backend', url: 'https://github.com/JorgeAndresDev/Backend-LogiSys.git' },
      { label: 'Frontend', url: 'https://github.com/JorgeAndresDev/Frontend-LogiSys.git' },
    ],
    caseStudy: {
      context:
        'LOGI SYS is a point-of-sale and logistics inventory system. It is a SaaS-style platform that lets you record sales, control stock and get statistical reports in a light or dark environment.',
      problem:
        'A point of sale needs to operate with speed: record sales without friction, keep inventory under control and have statistical metrics available for decision-making.',
      solution:
        'A React + Tailwind CSS frontend with light/dark views and a Node.js + Express backend with a REST API that handles sales, inventory and reports.',
      functionalities: [
        'Point of sale',
        'Stock management',
        'Statistical reports',
        'Logistics inventory',
        'Light/dark views',
      ],
      architecture: ['Frontend: React + Tailwind CSS', 'Backend: Node.js + Express', 'REST API', 'Light/dark views'],
      technologies: ['React', 'Node.js', 'Express', 'Tailwind CSS'],
      decisions: [
        {
          title: 'Node.js + Express',
          text: 'A lightweight and efficient API for the CRUD operations of sales and inventory.',
        },
        {
          title: 'Light/dark views',
          text: 'Visual adaptation for operation environments with different lighting conditions.',
        },
      ],
      challenges: [
        {
          title: 'Stock consistency',
          text: 'Ensuring every sale and every inventory entry always reflects real stock.',
        },
        {
          title: 'Useful reports',
          text: 'Turning operational data into actionable statistical metrics.',
        },
      ],
      result: 'A complete system to manage a business operating cycle: sales, inventory and analytics.',
    },
  }),
  mergeProject('gCurly', {
    title: 'G-CURLY BRAND',
    tagline: 'E-commerce and website for a beauty center focused on conversion.',
    description:
      'E-commerce and website for a beauty center, with dark/light mode, sticky navigation and mobile-first focus.',
    categoryLabel: 'Branding SPA',
    status: 'Online',
    features: ['Active Dark/Light Mode', 'Sticky Navigation', 'Mobile First'],
    github: [{ label: 'Repository', url: 'https://github.com/JorgeAndresDev/G-CURLY.git' }],
    demoLabel: 'View site',
  }),
  mergeProject('electropower', {
    title: 'ELECTRO POWER',
    tagline: 'High-impact landing page for industrial and residential electrical services.',
    description:
      'High-impact landing page for electrical services, with optimized performance, on-page SEO and lead generation.',
    categoryLabel: 'Landing Page',
    status: 'Online',
    features: ['Optimized Performance', 'On-Page SEO', 'Lead Generation'],
    github: [{ label: 'Repository', url: 'https://github.com/JorgeAndresDev/ELECTROPOWER.git' }],
    demoLabel: 'View site',
  }),
]
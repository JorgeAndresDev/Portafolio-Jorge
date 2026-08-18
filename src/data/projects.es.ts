import { mergeProject } from './projectBase'
import type { Project } from './types'

export const projects: Project[] = [
  mergeProject('cobrago', {
    title: 'COBRAGO',
    tagline: 'App móvil integral para el control de cobros, préstamos y finanzas personales.',
    description:
      'App móvil con arquitectura Offline First para la gestión de préstamos y cobranza: SQLite local con sincronización automática al servidor.',
    categoryLabel: 'Fintech App',
    status: 'Lista para uso comercial',
    features: ['Sincronización Tiempo Real', 'Gestión de Cartera Local', 'Dashboard Estadístico'],
    github: [
      { label: 'API Backend', url: 'https://github.com/JorgeAndresDev/API-cobrago.git' },
      { label: 'App Móvil', url: 'https://github.com/JorgeAndresDev/cobrago-mobile.git' },
    ],
    caseStudy: {
      context:
        'COBRAGO es una app móvil integral para el control de cobros, préstamos y finanzas personales. Está construida con arquitectura Offline First: los datos viven en una base local SQLite y se sincronizan automáticamente con el servidor cuando hay conectividad.',
      problem:
        'La gestión de una cartera de cobros y préstamos requiere operar incluso sin conexión estable. La información (clientes, préstamos y pagos) debe estar siempre disponible en el dispositivo y reflejarse en el servidor en cuanto se recupera la conectividad, sin perder ni duplicar operaciones.',
      solution:
        'Una app móvil React Native + Expo con base de datos local SQLite, sincronización automática contra una API FastAPI protegida con JWT, dashboard estadístico y tema claro/oscuro. Diseñada para uso comercial y lista para operar de forma confiable.',
      functionalities: [
        'Gestión de clientes, préstamos y pagos',
        'Sincronización en tiempo real con el servidor',
        'Gestión de cartera local (Offline First)',
        'Dashboard estadístico',
        'Autenticación JWT',
        'Tema claro/oscuro',
      ],
      architecture: [
        'App móvil: React Native + Expo (TypeScript)',
        'Base de datos local: SQLite (modo offline)',
        'API REST: FastAPI',
        'Base de datos del servidor: PostgreSQL',
        'Autenticación: JWT',
      ],
      technologies: ['React Native', 'Expo', 'TypeScript', 'FastAPI', 'PostgreSQL', 'SQLite', 'JWT'],
      decisions: [
        {
          title: 'Arquitectura Offline First',
          text: 'Elegí SQLite local para que la app funcione sin conexión y sincronice al recuperar conectividad, priorizando la disponibilidad de la información sobre la del servidor.',
        },
        {
          title: 'React Native + Expo',
          text: 'Expo permite iterar rápido y publicar en iOS y Android manteniendo una única base de código en TypeScript.',
        },
        {
          title: 'API FastAPI + JWT',
          text: 'Backend rápido con documentación automática y autenticación segura para proteger las operaciones sensibles de la cartera.',
        },
      ],
      challenges: [
        {
          title: 'Sincronización',
          text: 'Coordinar los datos locales y remotos para que las operaciones hechas sin conexión no se pierdan ni se dupliquen al reconectar.',
        },
        {
          title: 'Estado offline',
          text: 'Asegurar que las acciones realizadas sin conexión se reflejen correctamente en el servidor una vez restaurada la conectividad.',
        },
      ],
      result:
        'Una app móvil lista para uso comercial que permite gestionar préstamos y cobranza de forma confiable, incluso sin conexión, con datos siempre sincronizados.',
    },
  }),
  mergeProject('jluxuries', {
    title: 'JLUXURIES STORE',
    tagline: 'Plataforma profesional con panel admin, Auth JWT y carrito optimizado.',
    description:
      'E-commerce full stack con panel de administración, autenticación JWT, carrito optimizado y gestión de inventario.',
    categoryLabel: 'E-Commerce',
    status: 'Lista para producción',
    features: ['Rutas Protegidas (RBAC)', 'API RESTful Rápida', 'Gestión de Inventario'],
    github: [
      { label: 'API Backend', url: 'https://github.com/JorgeAndresDev/JLUXURIES-API.git' },
      { label: 'Frontend', url: 'https://github.com/JorgeAndresDev/JLUXURIES-Front' },
    ],
    caseStudy: {
      context:
        'JLUXURIES es una plataforma de e-commerce full stack desarrollada como proyecto freelance de punta a punta: frontend, backend, autenticación y despliegue. Incluye panel de administración, carrito optimizado y gestión de inventario.',
      problem:
        'Un e-commerce necesita separar con claridad la experiencia de compra del panel de administración, proteger las rutas según el rol del usuario y mantener un inventario consistente ante cada operación de venta.',
      solution:
        'Un frontend premium con React + TypeScript + Tailwind CSS y un backend FastAPI + PostgreSQL con API REST documentada, autenticación JWT y manejo estructurado de errores. El frontend y la API viven en repositorios independientes.',
      functionalities: [
        'Panel de administración',
        'Carrito optimizado',
        'Gestión de inventario',
        'Autenticación JWT',
        'Rutas protegidas (RBAC)',
        'API RESTful documentada',
      ],
      architecture: [
        'Frontend: React + TypeScript + Tailwind CSS',
        'Backend: FastAPI',
        'Base de datos: PostgreSQL',
        'Autenticación: JWT',
        'Repositorios separados para API y frontend',
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'JWT'],
      decisions: [
        {
          title: 'Frontend y backend desacoplados',
          text: 'Dos repositorios independientes para poder evolucionar la experiencia de usuario y la API sin acoplarlas.',
        },
        {
          title: 'Auth JWT con control por rol',
          text: 'Protección de las rutas de administración mediante tokens y control de acceso basado en roles (RBAC).',
        },
        {
          title: 'API documentada',
          text: 'Endpoints documentados y errores estructurados para facilitar la integración y el mantenimiento del frontend.',
        },
      ],
      challenges: [
        {
          title: 'Rutas protegidas',
          text: 'Garantizar que únicamente usuarios autorizados accedan al panel de administración.',
        },
        {
          title: 'Consistencia del inventario',
          text: 'Mantener el stock coherente entre el carrito, las compras y el panel de administración.',
        },
      ],
      result:
        'Una plataforma full stack lista para producción, con experiencia visual de nivel enterprise, autenticación segura y arquitectura escalable.',
    },
  }),
  mergeProject('logisys', {
    title: 'LOGI SYS',
    tagline: 'Sistema avanzado de punto de venta e inventario logístico.',
    description:
      'Plataforma SaaS de punto de venta y gestión de inventario logístico, con vistas claro/oscuro y reportes estadísticos.',
    categoryLabel: 'SaaS Platform',
    status: 'Código en GitHub',
    features: ['Gestión de Stock', 'Reportes Estadísticos', 'Punto de Venta'],
    github: [
      { label: 'API Backend', url: 'https://github.com/JorgeAndresDev/Backend-LogiSys.git' },
      { label: 'Frontend', url: 'https://github.com/JorgeAndresDev/Frontend-LogiSys.git' },
    ],
    caseStudy: {
      context:
        'LOGI SYS es un sistema de punto de venta e inventario logístico. Es una plataforma tipo SaaS que permite registrar ventas, controlar el stock y obtener reportes estadísticos en un entorno claro u oscuro.',
      problem:
        'Un punto de venta necesita operar con velocidad: registrar ventas sin fricción, mantener el control del inventario y disponer de métricas estadísticas para tomar decisiones.',
      solution:
        'Un frontend React + Tailwind CSS con vistas claro/oscuro y un backend Node.js + Express con API REST que resuelve ventas, inventario y reportes.',
      functionalities: [
        'Punto de venta',
        'Gestión de stock',
        'Reportes estadísticos',
        'Inventario logístico',
        'Vistas claro/oscuro',
      ],
      architecture: [
        'Frontend: React + Tailwind CSS',
        'Backend: Node.js + Express',
        'API REST',
        'Vistas claro/oscuro',
      ],
      technologies: ['React', 'Node.js', 'Express', 'Tailwind CSS'],
      decisions: [
        {
          title: 'Node.js + Express',
          text: 'API ligera y eficiente para las operaciones CRUD de ventas e inventario.',
        },
        {
          title: 'Vistas claro/oscuro',
          text: 'Adaptación visual para entornos de operación con distintas condiciones de iluminación.',
        },
      ],
      challenges: [
        {
          title: 'Consistencia del stock',
          text: 'Asegurar que cada venta y cada entrada de inventario reflejen siempre el stock real.',
        },
        {
          title: 'Reportes útiles',
          text: 'Convertir los datos operativos en métricas estadísticas accionables.',
        },
      ],
      result: 'Un sistema completo para gestionar el ciclo operativo de un negocio: venta, inventario y análisis.',
    },
  }),
  mergeProject('gCurly', {
    title: 'G-CURLY BRAND',
    tagline: 'E-commerce y sitio web para centro de belleza enfocado en conversión.',
    description:
      'E-commerce y sitio web para un centro de belleza, con dark/light mode, navegación sticky y enfoque mobile first.',
    categoryLabel: 'Branding SPA',
    status: 'En línea',
    features: ['Dark/Light Mode Activo', 'Navegación Sticky', 'Mobile First'],
    github: [{ label: 'Repositorio', url: 'https://github.com/JorgeAndresDev/G-CURLY.git' }],
    demoLabel: 'Ver sitio',
  }),
  mergeProject('electropower', {
    title: 'ELECTRO POWER',
    tagline: 'Landing page de alto impacto para servicios eléctricos industriales y domésticos.',
    description:
      'Landing page de alto impacto para servicios eléctricos, con performance optimizado, SEO on-page y generación de leads.',
    categoryLabel: 'Landing Page',
    status: 'En línea',
    features: ['Performance Optimizado', 'SEO On-Page', 'Lead Generation'],
    github: [{ label: 'Repositorio', url: 'https://github.com/JorgeAndresDev/ELECTROPOWER.git' }],
    demoLabel: 'Ver sitio',
  }),
]
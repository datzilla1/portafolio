export const projectTypeMeta = {
  web: {
    label: 'Web',
    icon: 'mdi-web',
    accent: '#5eead4',
    placeholder: 'Página web',
  },
  mobile: {
    label: 'Móvil',
    icon: 'mdi-cellphone',
    accent: '#38bdf8',
    placeholder: 'Aplicación móvil',
  },
  desktop: {
    label: 'Escritorio',
    icon: 'mdi-monitor-dashboard',
    accent: '#f59e0b',
    placeholder: 'Sistema de escritorio',
  },
  api: {
    label: 'API / Backend',
    icon: 'mdi-api',
    accent: '#fb7185',
    placeholder: 'Servicio o API',
  },
}

export const projectTypes = [
  { value: 'all', label: 'Todos', icon: 'mdi-view-grid-outline' },
  { value: 'web', label: 'Web', icon: 'mdi-web' },
  { value: 'mobile', label: 'Móvil', icon: 'mdi-cellphone' },
  { value: 'desktop', label: 'Escritorio', icon: 'mdi-monitor-dashboard' },
  { value: 'api', label: 'API / Backend', icon: 'mdi-api' },
]

const slugifyProject = (value) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const normalizeGalleryItem = (item, projectTitle, index) => {
  if (typeof item === 'string') {
    return {
      src: item,
      alt: `Vista ${index + 1} de ${projectTitle}`,
      caption: '',
    }
  }

  return {
    src: item.src,
    alt: item.alt || `Vista ${index + 1} de ${projectTitle}`,
    caption: item.caption || '',
  }
}

const parseProjectYear = (value) => {
  const match = String(value ?? '').match(/\d{4}/)
  return match ? Number.parseInt(match[0], 10) : 0
}

const compareProjects = (left, right) => {
  if (left.featured !== right.featured) {
    return left.featured ? -1 : 1
  }

  const yearDiff = parseProjectYear(right.year) - parseProjectYear(left.year)

  if (yearDiff !== 0) {
    return yearDiff
  }

  return left.title.localeCompare(right.title, 'es', { sensitivity: 'base' })
}

const rawProjects = [
  {
    id: 1,
    title: 'Web de Tempo',
    type: 'web',
    year: '2026',
    role: 'Astro + WordPress Headless',
    summary: 'Web de inscripción de torneos y eventos de videojuegos.',
    overview: [
      'Proyecto orientado a centralizar el registro de participantes, la organización de eventos y la publicación de resultados en un solo sitio.',
      'La implementación usa Astro y WordPress Headless para separar la capa visual del contenido administrable, facilitando cambios editoriales y crecimiento futuro.',
    ],
    highlights: [
      'Creación de brackets para torneos',
      'Visualización de resultados en tiempo real',
      'Registro de usuarios',
      'Gestion de torneos',
      'historial de equipos ganadores',
    ],
    results: [
      'Estructura lista para gestionar torneos, eventos y páginas informativas',
      'Gestion de ganador de torneos y actualizacion de brackets en tiempo real',
    ],
    tags: ['Astro', 'WordPress', 'Node.js', 'API'],
    proof: '',
    image: '/projects/tempo/Inicio.png',
    gallery: [
    {
      src: '/projects/tempo/Inicio.png',
      alt: 'Página principal',
      caption: 'Vista general del proyecto',
    },
    {
      src: '/projects/tempo/1.png',
      alt: 'Servicios',
      caption: 'Servicios disponibles para los usuarios',
    },
    {
      src: '/projects/tempo/2.png',
      alt: 'Juegos activos',
      caption: 'Juegos disponibles para los usuarios',
    },
        {
      src: '/projects/tempo/3.png',
      alt: 'Brackets de torneos',
      caption: 'Brackets de torneos con resultados en tiempo real',
    },
    {
      src: '/projects/tempo/4.png',
      alt: 'Equipo ganador por torneo',
      caption: 'Equipo campeón del torneo',
    },
    {
      src: '/projects/tempo/5.png',
      alt: 'En vivo de los torneos',
      caption: 'Transmisión en vivo de los torneos',
    },
    {
      src: '/projects/tempo/6.png',
      alt: 'Mapa del evento de videojuegos',
      caption: 'Mapa del evento de videojuegos',
    },
    {
      src: '/projects/tempo/7.png',
      alt: 'Noticias y actualizaciones de torneos',
      caption: 'Noticias y actualizaciones de torneos internacionales y nacionales',
    },
    {
      src: '/projects/tempo/8.png',
      alt: 'Contacto',
      caption: 'Formualrio de contacto para consultas',
    },
    {
      src: '/projects/tempo/9.png',
      alt: 'Inicio de sesión',
      caption: 'Formulario de inicio de sesión para usuarios registrados',
    },
    {
      src: '/projects/tempo/10.png',
      alt: 'Registro de usuario',
      caption: 'Formulario de registro para nuevos usuarios',
    },
  ],
    featured: true,
  },
  {
    id: 2,
    title: 'Sistema de contratos',
    type: 'desktop',
    year: '2025',
    role: 'C# y Json',
    summary: 'Diseño de aplicacion de escritorio para gestión de contratos',
    overview: [
      'Este proyecto está pensado para automatizar la gestión de contratos de compraventa de diferentes vehiculos, con un enfoque en la claridad de los contratos, la escalabilidad del sistema para futuros empleados y con clave administrativa para facilitar la gestión de los contratos.',
      'El sistema permite editar informacion de contratos, generar documentos PDF y mantener un registro organizado de los contratos realizados.',
      'El sistema trabaja localmente con archivos JSON para almacenar la información de los contratos, lo que facilita su manejo y permite una estructura flexible para futuros cambios o ampliaciones del sistema.',
      'no utiliza una base de datos tradicional, lo que lo hace más sencillo y directo para su propósito actual, aunque está diseñado para poder integrar una base de datos en el futuro si se requiere.',
    ],
    highlights: [
      'C# con Json para almacenamiento local',
      'Documentación y estructura clara para gestión de contratos',
      'Preparada para futuras ampliaciones o integración de base de datos',
      'Generación de documentos PDF a partir de contratos',
      'imprimir contratos con formato profesional',
    ],
    results: [
      'Sistema funcional para gestión de contratos de compraventa de vehículos',
      'Estructura organizada de contratos con posibilidad de edición y generación de documentos',
    ],
    tags: ['C#', 'JSON', 'Local', 'PDF', 'Desktop'],
    proof: '',
    image: '/projects/ssDocumentos/inicio.png',
    gallery: [
    {
      src: '/projects/ssDocumentos/inicio.png',
      alt: 'Intefaz principal del sistema de contratos',
      caption: 'Vista general del sistema de contratos',
    },
    {
      src: '/projects/ssDocumentos/menu.png',
      alt: 'Menu de opciones del sistema de contratos',
      caption: 'Menu de opciones para gestionar contratos',
    },
    {
      src: '/projects/ssDocumentos/1.png',
      alt: 'Interfaz de llenado de contrato segun tipo de contrato',
      caption: 'Interfaz de llenado de contrato segun tipo de contrato',
    },
        {
      src: '/projects/ssDocumentos/2.png',
      alt: 'vizualización de contratos creados',
      caption: 'Vizualización de contratos creados con opciones de imprimir, zoom.',
    },
    {
      src: '/projects/ssDocumentos/3.png',
      alt: 'interfaz de imprimir contrato',
      caption: 'Interfaz de impresión de contrato con formato profesional',
    },
    {
      src: '/projects/ssDocumentos/4.png',
      alt: 'Ajustes de contrato (editar informacion del contrato)',
      caption: 'Ajustes de contrato (editar informacion del contrato)',
    },
    {
      src: '/projects/ssDocumentos/5.png',
      alt: 'Solo el que tenga acceso a la clave administrativa puede editar contratos',
      caption: 'Solo el que tenga acceso a la clave administrativa puede editar contratos',
    },
    {
      src: '/projects/ssDocumentos/6.png',
      alt: 'Cerrar sesión del sistema de contratos',
      caption: 'Cerrar sesión del sistema de contratos',
    },
  ],
    links: [],
    availability: '',
    featured: true,
  },
  {
    id: 3,
    title: 'Aplicación de recordatorio de horarios de medicamentos',
    type: 'mobile',
    year: '2025',
    role: 'Ionic + vue',
    summary: 'App orientada a mejorar la experiencia del usuario al recordar los horarios de sus medicamentos, con una interfaz sencilla y funcional.',
    overview: [
      'La app busca mejorar la experiencia del usuario al recordar los horarios de sus medicamentos, con una interfaz sencilla y funcional.',
      'La app registra medicamentos, horarios y recordatorios para que el usuario pueda mantenerse al día con su medicación de manera fácil y efectiva.',
    ],
    highlights: [
      'Recordatorio personalizable por horario',
      'Gestión completa (editar, eliminar y añadir medicamentos)',
      'Diseño simple e intuitivo',
      'Notificaciones automáticas',
    ],
    results: [
      'Aplicación funcional para recordar horarios de medicamentos',
      'Interfaz amigable para el usuario con opciones de personalización',
    ],
    tags: ['Ionic', 'Vue', 'local', 'app', 'Notificaciones'],
    proof: '',
    image: '/projects/proyectoHora/inicio.jpeg',
        gallery: [
    {
      src: '/projects/proyectoHora/inicio.jpeg',
      alt: 'Intefaz principal de la aplicación de recordatorio de horarios de medicamentos',
      caption: 'Vista general de la aplicación de recordatorio de horarios de medicamentos.',
    },
    {
      src: '/projects/proyectoHora/1.jpeg',
      alt: 'Editar medicamentos registrados',
      caption: 'Interfaz para editar medicamentos registrados.',
    },
    {
      src: '/projects/proyectoHora/2.jpeg',
      alt: 'Agregar nuevos medicamentos',
      caption: 'Interfaz para agregar nuevos medicamentos.',
    },
        {
      src: '/projects/proyectoHora/3.jpeg',
      alt: 'Ver el historial de medicamentos tomados',
      caption: 'Interfaz para ver el historial de medicamentos tomados.',
    },
    {
      src: '/projects/proyectoHora/4.jpeg',
      alt: 'Ajustes de la aplicación',
      caption: 'Interfaz de ajustes de la aplicación editar notificaciones, horarios.',
    },
  ],
    links: [],
    availability: '',
    featured: true,
  },
  {
    id: 4,
    title: 'Imagen a pdf',
    type: 'mobile',
    year: '2024',
    role: 'Ionic + Vue',
    summary: 'Aplicación móvil para convertir imágenes a PDF.',
    overview: [
      'Proyecto orientado a facilitar la conversión de imágenes a PDF desde un dispositivo móvil.',
      'La aplicación permite a los usuarios seleccionar imágenes desde su galería o tomar nuevas fotos, recortarlas si es necesario y luego generar un archivo PDF que se puede compartir o guardar localmente.',
    ],
    highlights: [
      'Selección de imágenes desde galería o cámara',
      'Generación de PDF a partir de imágenes',
      'Guardar localmente o compartir el PDF generado',
    ],
    results: [
      'Aplicación funcional para convertir imágenes a PDF',
      'Interfaz sencilla para seleccionar imágenes y generar PDF de manera rápida',
    ],
    tags: ['Ionic', 'Vue', 'PDF', 'Multimedia'],
    proof: '',
    image: '/projects/imagenPDF/inicio.jpeg',
    gallery: [
    {
      src: '/projects/imagenPDF/inicio.jpeg',
      alt: 'Intefaz principal de la aplicación de convertir imágenes a PDF',
      caption: 'Vista general de la aplicación de convertir imágenes a PDF.',
    },
    {
      src: '/projects/imagenPDF/1.jpeg',
      alt: 'Editar el nombre del PDF y la información de las imágenes seleccionadas',
      caption: 'Interfaz para editar el nombre del PDF y la información de las imágenes seleccionadas.',
    },
    {
      src: '/projects/imagenPDF/2.jpeg',
      alt: 'Ver donde se guardará el PDF generado',
      caption: 'Interfaz para ver dónde se guardará el PDF generado.',
    },
        {
      src: '/projects/imagenPDF/3.jpeg',
      alt: 'Compartir el PDF generado',
      caption: 'Interfaz para compartir el PDF generado.',
    },
  ],
    links: [],
    availability: '',
    featured: false,
  },
  {
    id: 5,
    title: 'QR Ionic',
    type: 'mobile',
    year: '2025',
    role: 'ionic + Vue',
    summary: 'Aplicación Ionic para generar, compartir o trabajar con códigos QR.',
    overview: [
      'Proyecto utilitario orientado a tareas rápidas con QR desde una app móvil moderna.',
      'Su valor está en la combinación de interfaz ligera, capacidades del dispositivo y flujo simple de uso.',
    ],
    highlights: [
      'Comvertir texto, url, contactos a QR',
      'Agregar imagenes o logos personalizados a los QR',
      'Cambiar colores del QR',
      'Vista previa del QR generado',
    ],
    results: [
      'Aplicación funcional para generar códigos QR personalizados',
      'Interfaz ligera y fácil de usar para tareas rápidas con QR',
    ],
    tags: ['Ionic', 'Vue', 'TypeScript', 'QR', 'Multiplataforma'],
    proof: '',
    image: '/projects/generadorQR/inicio.jpeg',
    gallery: [
    {
      src: '/projects/generadorQR/inicio.jpeg',
      alt: 'Intefaz principal de la aplicación de generar QR',
      caption: 'Vista general de la aplicación de generar QR.',
    },
    {
      src: '/projects/generadorQR/1.jpeg',
      alt: 'Vista previa del QR generado',
      caption: 'Interfaz para ver la vista previa del QR generado.',
    },
    {
      src: '/projects/generadorQR/2.jpeg',
      alt: 'Texto a QR',
      caption: 'Interfaz para convertir texto a QR.',
    },
        {
      src: '/projects/generadorQR/3.jpeg',
      alt: 'Contacto a QR',
      caption: 'Interfaz para convertir contacto a QR.',
    },
  ],
    links: [],
    availability: '',
    featured: false,
  },

]

export const projects = rawProjects.map((project) => {
  const gallery = (project.gallery ?? [])
    .filter(Boolean)
    .map((item, index) => normalizeGalleryItem(item, project.title, index))

  if (!gallery.length && project.image) {
    gallery.push({
      src: project.image,
      alt: `Vista principal de ${project.title}`,
      caption: '',
    })
  }

  return {
    ...project,
    slug: project.slug ?? slugifyProject(project.title),
    image: project.image || gallery[0]?.src || '',
    gallery,
    overview:
      project.overview?.length ? project.overview : [project.summary, project.proof || project.availability].filter(Boolean),
    results: project.results ?? [],
    links: project.links ?? [],
  }
}).sort(compareProjects)

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug)

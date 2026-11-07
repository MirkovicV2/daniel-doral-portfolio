import { canPublish, danielConfirmed, type Editorial } from './editorial';

export type VisualKind =
  'deja-vu' | 'identity' | 'renewal' | 'data' | 'migration';
export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  contextLabel: string;
  summary: string;
  role: string;
  period: string;
  context: string;
  problem: string;
  scope: string;
  decisions: string[];
  technologies: string[];
  technologyScope: string;
  deliverables: string[];
  evidence: { label: string; url: string; description: string }[];
  visual: VisualKind;
  ongoing?: boolean;
  editorial: Editorial;
}

const linkedIn = 'https://es.linkedin.com/in/daniel-doral-ignjatovic';
const projectContent: Project[] = [
  {
    slug: 'deja-vu',
    title: 'Una web a la altura de Déjà Vu.',
    shortTitle: 'Déjà Vu Kebab',
    category: 'Web comercial',
    contextLabel: 'Encargo conjunto · Rivas Vaciamadrid',
    summary:
      'Desarrollo y modernización web para un negocio local, en colaboración con el trabajo visual de Pablo Castillo.',
    role: 'Desarrollo y modernización web',
    period: 'Encargo profesional · 2026',
    context:
      'Déjà Vu Kebab es un negocio de Rivas Vaciamadrid. Pablo y yo trabajamos en un encargo pagado que unió su presencia visual y su web.',
    problem:
      'El encargo consistía en trabajar la presencia del negocio con una web modernizada y materiales de diseño y comunicación.',
    scope:
      'Me ocupé del desarrollo y la modernización de la web. Pablo realizó diseño, fotografía, cartelería, vídeos y la puesta en marcha de Instagram. El alcance de este caso es ese trabajo conjunto.',
    decisions: [
      'Repartir el trabajo según nuestras especialidades: desarrollo web por mi parte y dirección visual y contenido por parte de Pablo.',
      'Conectar el trabajo de la web con los materiales de presentación del negocio.',
    ],
    technologies: ['Desarrollo web'],
    technologyScope:
      'Desarrollo y modernización web, coordinado con el diseño y los materiales visuales del negocio.',
    deliverables: [
      'Web desarrollada y modernizada.',
      'Diseño, fotografía y cartelería realizados por Pablo.',
      'Vídeos promocionales y puesta en marcha de Instagram por Pablo.',
    ],
    evidence: [
      {
        label: 'Visitar la web de Déjà Vu',
        url: 'https://bar-dejavu-kebab.es/',
        description: 'Web del negocio facilitada como referencia del trabajo.',
      },
      {
        label: 'Ver el caso de diseño de Pablo',
        url: 'https://pablelas.es/proyectos/deja-vu',
        description:
          'Publicación del encargo profesional de 2026 en su portfolio.',
      },
    ],
    visual: 'deja-vu',
    editorial: {
      ...danielConfirmed,
      sources: ['daniel-2026-11-07', 'portfolio-pablo', 'web-deja-vu'],
    },
  },
  {
    slug: 'identidad-digital',
    title: 'Aplicaciones para la expedición del DNI.',
    shortTitle: 'DNI 5 y DNI en el móvil',
    category: 'Aplicaciones empresariales',
    contextLabel: 'Experiencia profesional · Babel',
    summary:
      'Participo en las aplicaciones de gestión de expedición del DNI 5 de la Policía Nacional y de DNI en el móvil.',
    role: 'Software Engineer FullStack',
    period: 'Enero de 2026–actualidad',
    ongoing: true,
    context:
      'En mi etapa actual en Babel participo en las aplicaciones de gestión de expedición del DNI 5 de la Policía Nacional y de DNI en el móvil.',
    problem:
      'El ámbito de trabajo es el desarrollo de aplicaciones de gestión de expedición y de identidad en el móvil, dentro de un equipo.',
    scope:
      'Mi participación es full stack y continúa en la actualidad. Trabajo en el contexto de interfaces, servicios e integraciones que necesitan estas aplicaciones.',
    decisions: [
      'Abordar mi contribución desde las dos capas: interfaz y servicios.',
      'Trabajar en las APIs e integraciones dentro del alcance del equipo.',
    ],
    technologies: ['Spring Boot', 'Angular', 'APIs', 'Integraciones'],
    technologyScope: 'Contexto técnico compartido para mi etapa en Babel.',
    deliverables: [
      'Contribuciones de desarrollo a las aplicaciones de gestión de expedición.',
      'Participación en las aplicaciones de DNI en el móvil. Trabajo en curso.',
    ],
    evidence: [
      {
        label: 'Ver mi trayectoria en LinkedIn',
        url: linkedIn,
        description:
          'Puesto y periodo en Babel. El contexto de las funciones procede de mi experiencia profesional.',
      },
    ],
    visual: 'identity',
    editorial: danielConfirmed,
  },
  {
    slug: 'hacienda',
    title: 'Renovar las dos capas de una aplicación.',
    shortTitle: 'Renovación para Hacienda',
    category: 'Modernización',
    contextLabel: 'Experiencia profesional · Minsait / Indra',
    summary:
      'Renovación completa del frontend y el backend de una aplicación de Hacienda, dentro de mi trabajo con aplicaciones del Estado.',
    role: 'Programador full stack',
    period: 'Febrero de 2024–enero de 2026',
    context:
      'En Minsait trabajé en mantenimiento y evolución de aplicaciones del Estado. Dentro de esa etapa, renové completamente el frontend y el backend de una aplicación de Hacienda.',
    problem:
      'La intervención requería renovar ambas capas de una aplicación existente y formar parte de su evolución.',
    scope:
      'Mi aportación abarcó la renovación completa del frontend y el backend de esa aplicación. También realicé mantenimiento y evolución de otras aplicaciones del Estado durante esta etapa.',
    decisions: [
      'Trabajar sobre la aplicación existente con una intervención tanto en la interfaz como en el backend.',
      'Abordar el mantenimiento y la evolución como parte del ciclo de vida de las aplicaciones.',
    ],
    technologies: [
      'Java',
      'Spring MVC / Security',
      'JPA / Hibernate',
      'Oracle',
      'Struts2',
      'JSP / JSTL',
      'jQuery',
      'Bootstrap',
      'DataTables',
      'WildFly / JBoss',
    ],
    technologyScope:
      'Contexto técnico de mi etapa en Minsait. Esta lista no atribuye todo el stack a la aplicación de Hacienda.',
    deliverables: [
      'Renovación completa de frontend y backend de una aplicación de Hacienda.',
      'Mantenimiento y evolución de aplicaciones del Estado.',
    ],
    evidence: [
      {
        label: 'Ver mi trayectoria en LinkedIn',
        url: linkedIn,
        description:
          'Puesto y periodo en Minsait. Las funciones detalladas proceden de mi experiencia profesional.',
      },
    ],
    visual: 'renewal',
    editorial: danielConfirmed,
  },
  {
    slug: 'ciemat',
    title: 'Del papel y Excel a una aplicación de gestión.',
    shortTitle: 'Gestión de datos para CIEMAT',
    category: 'Digitalización de procesos',
    contextLabel: 'Experiencia profesional · ALTEN SPAIN',
    summary:
      'Participación desde el inicio en una aplicación de gestión de datos, con análisis de casos de uso y contacto estrecho con el cliente.',
    role: 'Analista Programador FullStack-Java - Angular',
    period: 'Junio de 2022–enero de 2024',
    context:
      'En ALTEN SPAIN participé desde el inicio en el desarrollo de una aplicación de gestión de datos para CIEMAT.',
    problem:
      'Parte de los procesos se gestionaba en papel y hojas Excel. El trabajo consistía en entenderlos con el cliente y trasladarlos a una aplicación de gestión de datos.',
    scope:
      'Trabajé en contacto estrecho con el cliente, elaboré casos de uso y participé en el desarrollo full stack y la digitalización de esos procesos.',
    decisions: [
      'Definir los casos de uso a partir del trabajo conjunto con el cliente.',
      'Trasladar procesos de papel y hojas de cálculo a la aplicación de gestión.',
      'Conectar el análisis funcional con el desarrollo de frontend y backend.',
    ],
    technologies: [
      'Angular',
      'Angular Material',
      'Java',
      'Spring Boot',
      'APIs REST',
      'Oracle / JPA',
    ],
    technologyScope:
      'Stack compartido para esta etapa, sin atribuir versiones concretas.',
    deliverables: [
      'Análisis de casos de uso junto al cliente.',
      'Participación en el desarrollo full stack desde el inicio.',
      'Digitalización de procesos que se gestionaban en papel y Excel.',
    ],
    evidence: [
      {
        label: 'Ver mi trayectoria en LinkedIn',
        url: linkedIn,
        description:
          'Puesto y periodo en ALTEN SPAIN. El contexto del proyecto procede de mi experiencia profesional.',
      },
    ],
    visual: 'data',
    editorial: danielConfirmed,
  },
  {
    slug: 'modernizacion-bancaria',
    title: 'Modernizar funcionalidades de COBOL a Java.',
    shortTitle: 'Modernización bancaria',
    category: 'Migración de software',
    contextLabel: 'Experiencia profesional · Redsys',
    summary:
      'Participación en la renovación de una aplicación bancaria mediante la migración de funcionalidades de COBOL a Java.',
    role: 'Desarrollador FullStack Java-Angular',
    period: 'Septiembre de 2021–junio de 2022',
    context:
      'En Redsys Servicios de Procesamiento S. L. participé en la renovación de una aplicación bancaria, dentro de un equipo.',
    problem:
      'La aplicación necesitaba modernizar funcionalidades existentes escritas en COBOL y trasladarlas a Java.',
    scope:
      'Contribuí a la migración de funcionalidades de COBOL a Java. Mi experiencia en esta etapa también incluye desarrollo de aplicaciones Java con Angular y Spring.',
    decisions: [
      'Trabajar sobre funcionalidades existentes como parte de una renovación de software.',
      'Participar en su migración de COBOL a Java dentro del alcance del equipo.',
    ],
    technologies: ['COBOL → Java', 'Angular', 'Spring'],
    technologyScope:
      'La migración fue confirmada por Daniel; el uso de Angular y Spring consta en su trayectoria publicada.',
    deliverables: [
      'Contribuciones a la migración de funcionalidades de COBOL a Java.',
      'Participación full stack en la renovación de la aplicación bancaria.',
    ],
    evidence: [
      {
        label: 'Ver mi trayectoria en LinkedIn',
        url: linkedIn,
        description:
          'Puesto, periodo y trabajo con Angular y Spring en Redsys.',
      },
    ],
    visual: 'migration',
    editorial: {
      ...danielConfirmed,
      sources: ['linkedin-daniel', 'daniel-2026-11-07'],
    },
  },
];

export const projects = projectContent.filter(canPublish);
export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

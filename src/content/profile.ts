import { canPublish, danielConfirmed, linkedinVerified } from './editorial';

export const experience = [
  {
    company: 'Babel',
    role: 'Software Engineer FullStack',
    period: 'Enero de 2026–actualidad',
    arrangement: 'Jornada completa',
    contribution:
      'Participo en las aplicaciones de gestión de expedición del DNI 5 de la Policía Nacional y de DNI en el móvil.',
    contributionEditorial: danielConfirmed,
    editorial: linkedinVerified,
  },
  {
    company: 'Minsait / Indra',
    role: 'Programador full stack',
    period: 'Febrero de 2024–enero de 2026',
    arrangement: 'Jornada completa',
    contribution:
      'Mantenimiento y evolución de aplicaciones del Estado. Renovación completa del frontend y backend de una aplicación de Hacienda.',
    contributionEditorial: danielConfirmed,
    editorial: linkedinVerified,
  },
  {
    company: 'ALTEN SPAIN',
    role: 'Analista Programador FullStack-Java - Angular',
    period: 'Junio de 2022–enero de 2024',
    arrangement: 'Jornada completa',
    contribution:
      'Participé desde el inicio en una aplicación de gestión de datos para CIEMAT, trabajando con el cliente en casos de uso y en la digitalización de papel y Excel.',
    contributionEditorial: danielConfirmed,
    editorial: linkedinVerified,
  },
  {
    company: 'Redsys Servicios de Procesamiento S. L.',
    role: 'Desarrollador FullStack Java-Angular',
    period: 'Septiembre de 2021–junio de 2022',
    arrangement: 'Jornada parcial',
    contribution:
      'Participé en la renovación de una aplicación bancaria mediante la migración de funcionalidades de COBOL a Java.',
    contributionEditorial: danielConfirmed,
    editorial: linkedinVerified,
  },
].filter(canPublish);

export const education = [
  {
    centre: 'Centro Nelson',
    course: 'Ciclo superior relacionado con desarrollo web',
    period: '2020–2022',
    editorial: linkedinVerified,
  },
  {
    centre: 'Centro de Estudios Superiores Afuera',
    course: 'Técnico en microinformática y redes',
    period: '2017–2019',
    editorial: linkedinVerified,
  },
].filter(canPublish);

export const capabilities = [
  {
    name: 'Frontend',
    description: 'Interfaces para trabajar con claridad.',
    items: ['Angular', 'Angular Material', 'JSP / JSTL', 'jQuery', 'Bootstrap'],
    editorial: danielConfirmed,
  },
  {
    name: 'Backend',
    description: 'Lógica de negocio y aplicaciones empresariales.',
    items: ['Java', 'Spring Boot', 'Spring MVC / Security', 'Struts2'],
    editorial: danielConfirmed,
  },
  {
    name: 'Datos e integraciones',
    description: 'Conectar la aplicación con sus datos y servicios.',
    items: ['APIs REST', 'Oracle', 'JPA / Hibernate', 'Integraciones'],
    editorial: danielConfirmed,
  },
  {
    name: 'Herramientas de trabajo',
    description: 'Del análisis funcional a la evolución del sistema.',
    items: [
      'Casos de uso',
      'Interlocución con cliente',
      'WildFly / JBoss',
      'DataTables',
    ],
    editorial: danielConfirmed,
  },
].filter(canPublish);

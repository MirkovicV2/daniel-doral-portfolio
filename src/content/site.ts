export const portfolio = {
  name: 'Daniel Doral Ignjatovic',
  shortName: 'Daniel Doral',
  role: 'Desarrollador full stack',
  location: 'Madrid / Rivas Vaciamadrid',
  email: 'danieldoral7@gmail.com',
  linkedin: 'https://es.linkedin.com/in/daniel-doral-ignjatovic',
  collaborator: { name: 'Pablo Castillo Flores', url: 'https://pablelas.es/' },
  studioUrl: import.meta.env.PUBLIC_STUDIO_URL?.trim() || undefined,
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: portfolio.name,
  jobTitle: portfolio.role,
  email: `mailto:${portfolio.email}`,
  homeLocation: { '@type': 'Place', name: portfolio.location },
  sameAs: [portfolio.linkedin],
};

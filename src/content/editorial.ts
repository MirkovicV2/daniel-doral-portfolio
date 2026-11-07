export type EditorialStatus =
  'verificado' | 'facilitado-por-daniel' | 'pendiente';
export type SourceId =
  'linkedin-daniel' | 'daniel-2026-11-07' | 'portfolio-pablo' | 'web-deja-vu';
export interface Editorial {
  status: EditorialStatus;
  approved: boolean;
  sources: SourceId[];
}
export const sources = {
  'linkedin-daniel': {
    label:
      'LinkedIn de Daniel: puestos y periodos contrastados en el documento aportado',
    url: 'https://es.linkedin.com/in/daniel-doral-ignjatovic',
  },
  'daniel-2026-11-07': {
    label:
      'Confirmación directa de Daniel, 7 de noviembre de 2026. Documento Prompts_Codex_Daniel_Pablo.md.',
  },
  'portfolio-pablo': {
    label: 'Caso DEJA VU del portfolio de Pablo',
    url: 'https://pablelas.es/proyectos/deja-vu',
  },
  'web-deja-vu': {
    label: 'URL del trabajo comercial facilitada por Daniel',
    url: 'https://bar-dejavu-kebab.es/',
  },
} satisfies Record<SourceId, { label: string; url?: string }>;
export const canPublish = (item: { editorial: Editorial }) =>
  item.editorial.approved && item.editorial.status !== 'pendiente';
export const danielConfirmed: Editorial = {
  status: 'facilitado-por-daniel',
  approved: true,
  sources: ['daniel-2026-11-07'],
};
export const linkedinVerified: Editorial = {
  status: 'verificado',
  approved: true,
  sources: ['linkedin-daniel'],
};

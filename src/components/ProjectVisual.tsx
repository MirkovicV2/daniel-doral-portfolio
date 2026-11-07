import type { VisualKind } from '../content/projects';

export function Architecture() {
  return (
    <div
      className="architecture"
      role="img"
      aria-label="Esquema conceptual original: interfaz, API y datos conectados"
    >
      <div className="architecture-top">
        <span>DEL PROBLEMA A LA APLICACIÓN</span>
        <span aria-hidden="true">↗</span>
      </div>
      <div className="architecture-grid" aria-hidden="true">
        <div className="architecture-line" />
        <div className="layer layer-ui">
          <span className="layer-index">01 / INTERFAZ</span>
          <div className="mini-interface">
            <i />
            <i />
            <i />
            <span />
          </div>
          <strong>Lo que usas.</strong>
        </div>
        <div className="layer layer-api">
          <span className="layer-index">02 / API</span>
          <span className="api-symbol">{'{ }'}</span>
          <strong>Lo que conecta.</strong>
        </div>
        <div className="layer layer-data">
          <span className="layer-index">03 / DATOS</span>
          <div className="data-lines">
            <i />
            <i />
            <i />
          </div>
          <strong>Lo que importa.</strong>
        </div>
      </div>
      <div className="architecture-bottom">
        <span>INTERFAZ</span>
        <span>↔</span>
        <span>SERVICIOS</span>
        <span>↔</span>
        <span>DATOS</span>
      </div>
    </div>
  );
}

export function ProjectVisual({
  kind,
  compact = false,
}: {
  kind: VisualKind;
  compact?: boolean;
}) {
  if (kind === 'deja-vu')
    return (
      <div
        className={`project-visual visual-deja ${compact ? 'is-compact' : ''}`}
        role="img"
        aria-label="Composición tipográfica original para el caso Déjà Vu, sin material gráfico del cliente"
      >
        <div className="visual-meta">
          <span>RIVAS VACIAMADRID</span>
          <span>WEB / DISEÑO / CONTENIDO</span>
        </div>
        <div className="deja-type" aria-hidden="true">
          <span>DÉJÀ</span>
          <span>
            VU<span className="deja-spark">✳</span>
          </span>
        </div>
        <div className="visual-foot">
          <span>
            UN NEGOCIO LOCAL.
            <br />
            UNA PRESENCIA CONECTADA.
          </span>
          <span>Daniel + Pablo ↗</span>
        </div>
      </div>
    );
  const visuals = {
    identity: {
      number: '01',
      title: 'Identidad.',
      subtitle: 'INTERFAZ · SERVICIOS · INTEGRACIONES',
      a: 'GESTIÓN',
      b: 'EXPEDICIÓN',
      glyph: '◎',
    },
    renewal: {
      number: '02',
      title: 'Evolucionar.',
      subtitle: 'RENOVACIÓN DE SOFTWARE EXISTENTE',
      a: 'FRONTEND',
      b: 'BACKEND',
      glyph: '↗',
    },
    data: {
      number: '03',
      title: 'Dar forma.',
      subtitle: 'DE LOS PROCESOS A LA APLICACIÓN',
      a: 'PAPEL / EXCEL',
      b: 'GESTIÓN',
      glyph: '▤',
    },
    migration: {
      number: '04',
      title: 'Modernizar.',
      subtitle: 'MIGRACIÓN DE FUNCIONALIDADES',
      a: 'COBOL',
      b: 'JAVA',
      glyph: '↔',
    },
  };
  const visual = visuals[kind];
  return (
    <div
      className={`project-visual visual-system visual-${kind} ${compact ? 'is-compact' : ''}`}
      role="img"
      aria-label={`Esquema conceptual original: ${visual.a} y ${visual.b}. No representa una arquitectura interna.`}
    >
      <div className="visual-meta">
        <span>ESQUEMA CONCEPTUAL</span>
        <span>{visual.number} / SOFTWARE</span>
      </div>
      <div className="system-centre" aria-hidden="true">
        <span className="system-glyph">{visual.glyph}</span>
        <span className="system-title">{visual.title}</span>
        <div className="system-nodes">
          <span>{visual.a}</span>
          <i>↔</i>
          <span>{visual.b}</span>
        </div>
      </div>
      <div className="visual-foot">
        <span>{visual.subtitle}</span>
        <span>DD.</span>
      </div>
    </div>
  );
}

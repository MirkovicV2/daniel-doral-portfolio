import type { VisualKind } from '../content/projects';

export function Architecture() {
  return (
    <div
      className="architecture"
      role="group"
      aria-label="Explora las capas de una aplicación"
    >
      <div className="architecture-top">
        <span>UNA MIRADA AL SISTEMA COMPLETO</span>
        <span className="architecture-cross" aria-hidden="true">
          +
        </span>
      </div>
      <div className="architecture-grid" aria-hidden="true">
        <svg className="architecture-wires" viewBox="0 0 640 220" fill="none">
          <path
            d="M130 122H275V66H465V122H555M275 66V174H465V122"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="275" cy="122" r="4" fill="currentColor" />
          <circle cx="465" cy="122" r="4" fill="currentColor" />
        </svg>
        <div className="layer layer-ui">
          <span className="layer-index">01 / INTERFAZ</span>
          <div className="mini-interface">
            <i />
            <i />
            <i />
            <span />
          </div>
          <strong>Interfaz</strong>
        </div>
        <div className="layer layer-api">
          <span className="layer-index">02 / API</span>
          <span className="api-symbol">{'{ }'}</span>
          <strong>Conexión</strong>
        </div>
        <div className="layer layer-data">
          <span className="layer-index">03 / DATOS</span>
          <div className="data-lines">
            <i />
            <i />
            <i />
          </div>
          <strong>Datos</strong>
        </div>
      </div>
      <div className="stack-choices">
        <details name="application-layers" data-stack-part="interface" open>
          <summary>
            <span>01</span> Interfaz <span aria-hidden="true">↗</span>
          </summary>
          <p>Angular. Una forma clara de trabajar con la aplicación.</p>
        </details>
        <details name="application-layers" data-stack-part="api">
          <summary>
            <span>02</span> Servicios <span aria-hidden="true">↗</span>
          </summary>
          <p>Java y Spring. Lógica de negocio y APIs que conectan piezas.</p>
        </details>
        <details name="application-layers" data-stack-part="data">
          <summary>
            <span>03</span> Datos <span aria-hidden="true">↗</span>
          </summary>
          <p>Oracle y JPA. Conexión entre la aplicación y sus datos.</p>
        </details>
      </div>
      <span className="architecture-caption">
        ESQUEMA CONCEPTUAL · EXPLORA CADA CAPA
      </span>
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

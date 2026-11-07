import { portfolio } from '../content/site';
import { projects, type Project } from '../content/projects';
import { Action, Arrow, Eyebrow } from './Primitives';
import { Architecture, ProjectVisual } from './ProjectVisual';
import { FeaturedProject, ProjectRows } from './Projects';
import { Capabilities, Education, Experience } from './Profile';
import { Contact } from './Contact';
import { withBase } from '../utils/paths';

export function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-heading">
          <Eyebrow>
            <span className="hero-index">DD /</span>
            Daniel Doral · Desarrollo full stack
          </Eyebrow>
          <h1>
            Del problema
            <br />
            <span>al sistema completo.</span>
          </h1>
          <span className="hero-coordinate">MADRID / RIVAS VACIAMADRID</span>
        </div>
        <div className="hero-copy">
          <p className="hero-description">
            Desarrollo aplicaciones web que conectan negocio, datos y procesos.
            De la interfaz al backend, con Java, Spring y Angular.
          </p>
          <div className="hero-actions">
            <Action href={withBase('/proyectos/')}>Ver proyectos</Action>
            <Action secondary href={withBase('/contacto/')}>
              Contactar
            </Action>
          </div>
        </div>
        <div className="hero-art">
          <Architecture />
        </div>
        <div className="hero-bottom">
          <span>
            <span className="status-dot" /> SOFTWARE · PERSONAS · PROCESOS
          </span>
          <a href="#proyectos">
            Explora mi trabajo <Arrow />
          </a>
        </div>
      </section>
      <section className="section shell" id="proyectos">
        <div className="section-heading heading-inline" data-reveal>
          <div>
            <Eyebrow number="01">Proyectos seleccionados / 05</Eyebrow>
            <h2>
              Menos abstracción.
              <br />
              <span className="muted">Más contexto.</span>
            </h2>
          </div>
          <p>
            Un encargo comercial y casos de mi experiencia profesional. Cada
            uno, con su problema y mi aportación.
          </p>
        </div>
        <FeaturedProject />
        <ProjectRows />
        <a className="text-link all-projects" href={withBase('/proyectos/')}>
          Explorar todos los casos
          <Arrow />
        </a>
      </section>
      <Capabilities />
      <Experience />
      <section className="section shell about-strip" data-reveal>
        <div>
          <Eyebrow number="04">Sobre mí</Eyebrow>
          <h2>
            Entender primero.
            <br />
            <span className="muted">Construir después.</span>
          </h2>
        </div>
        <div>
          <p>
            Soy desarrollador full stack en Madrid / Rivas Vaciamadrid. Me
            interesa el punto donde una necesidad de negocio se convierte en una
            aplicación que se puede usar, mantener y hacer evolucionar.
          </p>
          <p>
            Con Pablo Castillo preparo un estudio digital que une desarrollo,
            diseño y contenido visual. Nuestro trabajo conjunto en Déjà Vu es un
            primer ejemplo de esa colaboración.
          </p>
          <a className="text-link" href={withBase('/sobre-mi/')}>
            Conocer mi enfoque
            <Arrow />
          </a>
        </div>
      </section>
      <Contact />
    </>
  );
}

export function ProjectsPage() {
  return (
    <>
      <section className="page-intro shell">
        <Eyebrow>Selección de trabajo</Eyebrow>
        <h1>
          Proyectos con
          <br />
          <span>un porqué.</span>
        </h1>
        <p>
          De modernizar una aplicación bancaria a dar forma a la presencia web
          de un negocio local. El contexto cambia; entender el problema es el
          punto de partida.
        </p>
      </section>
      <section className="shell projects-page" aria-label="Casos de trabajo">
        <FeaturedProject />
        <ProjectRows />
      </section>
      <Contact />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <section className="page-intro shell about-intro">
        <Eyebrow>Daniel Doral Ignjatovic</Eyebrow>
        <h1>
          Desarrollo software.
          <br />
          <span>Trabajo con personas.</span>
        </h1>
        <div className="about-intro-grid">
          <p className="large-copy">
            Me muevo entre el análisis de lo que hace falta y el desarrollo de
            las piezas que lo hacen posible.
          </p>
          <div>
            <p>
              Mi trayectoria pasa por software bancario, gestión de datos y
              aplicaciones de la Administración. He trabajado en modernización,
              en desarrollo full stack y en la conversación con el cliente para
              definir casos de uso.
            </p>
            <p>
              Trabajo principalmente con Java, Spring y Angular. Cuando hablo de
              un proyecto, me interesa explicar la necesidad, mi contribución y
              el contexto de las decisiones.
            </p>
            <a className="text-link" href={withBase('/#experiencia')}>
              Ver mi experiencia
              <Arrow />
            </a>
          </div>
        </div>
      </section>
      <Capabilities />
      <Education />
      <section className="section shell collaboration" data-reveal>
        <Eyebrow>Diseño + desarrollo</Eyebrow>
        <h2>
          Dos miradas.
          <br />
          <span className="muted">Un trabajo conectado.</span>
        </h2>
        <div className="collaboration-content">
          <p>
            Estoy preparando un estudio digital con Pablo Castillo Flores. Yo
            aporto desarrollo web, backend, APIs e integraciones; Pablo, diseño
            de marca, motion, fotografía y vídeo.
          </p>
          <p>
            Ya hemos trabajado juntos en Déjà Vu Kebab: desarrollo y
            modernización de la web por mi parte, y diseño y contenido visual
            por la suya.
          </p>
          <div className="contact-actions">
            <Action href={withBase('/proyectos/deja-vu/')}>
              Ver el caso conjunto
            </Action>
            <a
              className="text-link"
              href={portfolio.collaborator.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver portfolio de Pablo
              <Arrow diagonal />
            </a>
            {portfolio.studioUrl && (
              <a
                className="text-link"
                href={portfolio.studioUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conocer el estudio
                <Arrow diagonal />
              </a>
            )}
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}

export function CasePage({ project }: { project: Project }) {
  const position = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(position + 1) % projects.length];
  return (
    <>
      <article>
        <header className="case-intro shell">
          <a className="back-link" href={withBase('/proyectos/')}>
            ← Todos los proyectos
          </a>
          <Eyebrow>{project.contextLabel}</Eyebrow>
          <h1>{project.title}</h1>
          <p className="case-lead">{project.summary}</p>
          <dl className="case-meta">
            <div>
              <dt>Mi papel</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Periodo</dt>
              <dd>{project.period}</dd>
            </div>
            <div>
              <dt>Ámbito</dt>
              <dd>
                {project.category}
                {project.ongoing && (
                  <span className="ongoing">
                    <span className="status-dot" />
                    En curso
                  </span>
                )}
              </dd>
            </div>
          </dl>
        </header>
        <figure className="case-cover shell">
          <ProjectVisual kind={project.visual} />
          <figcaption>
            {project.visual === 'deja-vu'
              ? 'Composición tipográfica original para presentar el caso.'
              : 'Esquema conceptual original para explicar el ámbito de trabajo.'}
          </figcaption>
        </figure>
        <div className="case-body shell">
          <aside className="case-index">
            <span className="eyebrow">En este caso</span>
            <a href="#contexto">01 · Contexto</a>
            <a href="#alcance">02 · Mi contribución</a>
            <a href="#decisiones">03 · Enfoque</a>
            <a href="#tecnologias">04 · Tecnologías</a>
            <a href="#entregables">05 · Trabajo realizado</a>
            <a href="#evidencias">06 · Referencias</a>
          </aside>
          <div className="case-story">
            <section id="contexto" data-reveal>
              <Eyebrow number="01">Contexto y problema</Eyebrow>
              <h2>El punto de partida.</h2>
              <p>{project.context}</p>
              <p>{project.problem}</p>
            </section>
            <section id="alcance" data-reveal>
              <Eyebrow number="02">Alcance y papel</Eyebrow>
              <h2>Mi contribución.</h2>
              <p>{project.scope}</p>
            </section>
            <section id="decisiones" data-reveal>
              <Eyebrow number="03">Decisiones y enfoque</Eyebrow>
              <h2>Cómo abordé el trabajo.</h2>
              <ul className="editorial-list">
                {project.decisions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section id="tecnologias" data-reveal>
              <Eyebrow number="04">Tecnologías</Eyebrow>
              <h2>El contexto técnico.</h2>
              <p>{project.technologyScope}</p>
              <ul className="tags tech-tags">
                {project.technologies.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section id="entregables" data-reveal>
              <Eyebrow number="05">Entregables y aportación</Eyebrow>
              <h2>
                {project.ongoing
                  ? 'El trabajo en curso.'
                  : 'El trabajo realizado.'}
              </h2>
              <ul className="editorial-list">
                {project.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section id="evidencias" data-reveal>
              <Eyebrow number="06">Evidencias y referencias</Eyebrow>
              <h2>Para seguir explorando.</h2>
              {project.evidence.map((item) => (
                <div className="evidence" key={item.url}>
                  <a
                    className="text-link"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                    <Arrow diagonal />
                  </a>
                  <p>{item.description}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </article>
      {next && (
        <section className="next-case shell" data-reveal>
          <Eyebrow>Siguiente proyecto</Eyebrow>
          <a href={withBase(`/proyectos/${next.slug}/`)}>
            <span>{next.shortTitle}</span>
            <Arrow diagonal />
          </a>
        </section>
      )}
      <Contact />
    </>
  );
}

export function NotFound() {
  return (
    <section className="page-intro shell error-page">
      <Eyebrow>404 / Ruta no encontrada</Eyebrow>
      <h1>
        Aquí no hay una página.
        <br />
        <span>Hay otros caminos.</span>
      </h1>
      <p>
        Puedes volver al inicio, conocer mi trabajo o escribirme directamente.
      </p>
      <div className="hero-actions">
        <Action href={withBase('/')}>Volver al inicio</Action>
        <Action secondary href={withBase('/proyectos/')}>
          Ver proyectos
        </Action>
      </div>
    </section>
  );
}

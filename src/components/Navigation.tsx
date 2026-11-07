import { portfolio } from '../content/site';
import { Arrow } from './Primitives';

const items = [
  { href: '/proyectos/', label: 'Proyectos' },
  { href: '/#experiencia', label: 'Experiencia' },
  { href: '/sobre-mi/', label: 'Sobre mí' },
];
export function Header({ path }: { path: string }) {
  return (
    <header className="site-header shell">
      <a className="wordmark" href="/" aria-label="Daniel Doral, inicio">
        <span className="monogram" aria-hidden="true">
          d.
        </span>
        <span>
          Daniel Doral
          <span className="wordmark-subtitle">Desarrollador full stack</span>
        </span>
      </a>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={
              path === item.href ||
              (item.href === '/proyectos/' && path.startsWith('/proyectos/'))
                ? 'page'
                : undefined
            }
          >
            {item.label}
          </a>
        ))}
        <a
          className="nav-contact"
          href="/contacto/"
          aria-current={path === '/contacto/' ? 'page' : undefined}
        >
          Hablemos
          <Arrow diagonal />
        </a>
      </nav>
      <details className="mobile-menu" data-mobile-menu>
        <summary aria-label="Abrir o cerrar navegación">
          <span>Menú</span>
          <span className="menu-symbol" aria-hidden="true">
            +
          </span>
        </summary>
        <nav aria-label="Navegación móvil">
          {items.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="/contacto/">
            Hablemos <Arrow diagonal />
          </a>
        </nav>
      </details>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer shell">
      <a className="footer-name" href="/">
        {portfolio.shortName}
        <span>Desarrollo full stack · Madrid</span>
      </a>
      <div className="footer-links">
        <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
          <Arrow diagonal />
        </a>
        <a href={`mailto:${portfolio.email}`}>
          Email
          <Arrow diagonal />
        </a>
        <a
          href={portfolio.collaborator.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Pablo Castillo
          <Arrow diagonal />
        </a>
      </div>
      <span className="footer-note">Ideas claras. Software que conecta.</span>
    </footer>
  );
}

import { portfolio } from '../content/site';
import { stripBase, withBase } from '../utils/paths';
import { Arrow } from './Primitives';

const items = [
  { href: '/proyectos/', label: 'Proyectos' },
  { href: '/#experiencia', label: 'Experiencia' },
  { href: '/sobre-mi/', label: 'Sobre mí' },
];
export function Header({ path }: { path: string }) {
  const currentPath = stripBase(path);
  return (
    <header className="site-header shell">
      <a
        className="wordmark"
        href={withBase('/')}
        aria-label="Daniel Doral, inicio"
      >
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
            href={withBase(item.href)}
            aria-current={
              currentPath === item.href ||
              (item.href === '/proyectos/' &&
                currentPath.startsWith('/proyectos/'))
                ? 'page'
                : undefined
            }
          >
            {item.label}
          </a>
        ))}
        <a
          className="nav-contact"
          href={withBase('/contacto/')}
          aria-current={currentPath === '/contacto/' ? 'page' : undefined}
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
            <a key={item.href} href={withBase(item.href)}>
              {item.label}
            </a>
          ))}
          <a href={withBase('/contacto/')}>
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
      <a className="footer-name" href={withBase('/')}>
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

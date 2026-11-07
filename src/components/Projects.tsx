import { projects, type Project } from '../content/projects';
import { Arrow, Eyebrow } from './Primitives';
import { ProjectVisual } from './ProjectVisual';

export function FeaturedProject({
  project = projects[0],
}: {
  project?: Project;
}) {
  if (!project)
    return (
      <p>
        Podemos hablar de mi experiencia y de tu próximo proyecto por correo.
      </p>
    );
  return (
    <a
      className="featured-project"
      href={`/proyectos/${project.slug}/`}
      data-reveal
    >
      <div className="featured-media">
        <ProjectVisual kind={project.visual} />
        <span className="project-open" aria-hidden="true">
          <Arrow diagonal />
        </span>
      </div>
      <div className="featured-info">
        <Eyebrow>01 / Encargo comercial · 2026</Eyebrow>
        <h3>{project.shortTitle}</h3>
        <p>{project.summary}</p>
        <div className="tags">
          <span>Desarrollo web</span>
          <span>Colaboración con Pablo</span>
        </div>
        <span className="text-link">
          Conocer el proyecto
          <Arrow />
        </span>
      </div>
    </a>
  );
}

export function ProjectRows({
  items = projects.slice(1),
}: {
  items?: Project[];
}) {
  return (
    <div className="project-rows">
      {items.map((project, index) => (
        <a
          href={`/proyectos/${project.slug}/`}
          className="project-row"
          key={project.slug}
          data-reveal
        >
          <span className="row-number">
            {String(index + 2).padStart(2, '0')}
          </span>
          <div className="row-main">
            <span className="row-context">{project.contextLabel}</span>
            <h3>{project.shortTitle}</h3>
            <p>{project.summary}</p>
          </div>
          <div className="row-preview" aria-hidden="true">
            <ProjectVisual kind={project.visual} compact />
          </div>
          <div className="row-end">
            <span className="project-category">{project.category}</span>
            <Arrow diagonal />
          </div>
        </a>
      ))}
    </div>
  );
}

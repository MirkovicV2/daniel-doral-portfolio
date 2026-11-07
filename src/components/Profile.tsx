import { experience, capabilities, education } from '../content/profile';
import { canPublish } from '../content/editorial';
import { Eyebrow } from './Primitives';

export function Experience() {
  return (
    <section className="section shell experience-section" id="experiencia">
      <div className="section-heading" data-reveal>
        <Eyebrow number="03">Experiencia profesional</Eyebrow>
        <h2>
          El recorrido
          <br />
          <span className="muted">detrás del código.</span>
        </h2>
      </div>
      <div className="timeline">
        {experience.map((item, index) => (
          <article className="timeline-item" key={item.company} data-reveal>
            <div className="timeline-date">
              <span
                className={`timeline-dot ${index === 0 ? 'is-current' : ''}`}
              />
              {item.period}
              <span>{item.arrangement}</span>
            </div>
            <div className="timeline-description">
              <h3>{item.company}</h3>
              <p className="timeline-role">{item.role}</p>
              {canPublish({ editorial: item.contributionEditorial }) && (
                <p>{item.contribution}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Capabilities() {
  return (
    <section className="section shell" id="capacidades">
      <div className="section-heading" data-reveal>
        <Eyebrow number="02">Capacidades</Eyebrow>
        <h2>
          De la interfaz
          <br />
          <span className="muted">a lo que hay detrás.</span>
        </h2>
        <p>
          Mi experiencia profesional conecta desarrollo, datos y comprensión del
          proceso de negocio.
        </p>
      </div>
      <div className="capabilities">
        {capabilities.map((group, index) => (
          <article className="capability" key={group.name} data-reveal>
            <span className="capability-number">0{index + 1}</span>
            <h3>{group.name}</h3>
            <p>{group.description}</p>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section className="section shell education-section">
      <div className="section-heading" data-reveal>
        <Eyebrow>Formación</Eyebrow>
        <h2>La base del recorrido.</h2>
      </div>
      <div className="education-list">
        {education.map((item) => (
          <article key={item.centre} data-reveal>
            <span className="eyebrow">{item.period}</span>
            <h3>{item.centre}</h3>
            <p>{item.course}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

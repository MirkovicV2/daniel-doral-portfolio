import { portfolio } from '../content/site';
import { Action, Arrow, Eyebrow } from './Primitives';

export function Contact({ full = false }: { full?: boolean }) {
  return (
    <section
      className={`${full ? 'contact-page' : 'section contact-section'} shell`}
      id="contacto"
      data-reveal
    >
      <Eyebrow>Hablemos</Eyebrow>
      {full ? (
        <h1>
          El siguiente proyecto
          <br />
          <span>empieza conversando.</span>
        </h1>
      ) : (
        <h2>
          ¿Qué necesitas
          <br />
          <span>conectar?</span>
        </h2>
      )}
      <div className="contact-content">
        <p>
          Cuéntame qué quieres construir, modernizar o conectar. También podemos
          hablar de una oportunidad para trabajar juntos.
        </p>
        <a className="email-link" href={`mailto:${portfolio.email}`}>
          {portfolio.email}
          <Arrow diagonal />
        </a>
        <div className="contact-actions">
          <Action href={`mailto:${portfolio.email}`}>Escríbeme</Action>
          <a
            className="text-link"
            href={portfolio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Encontrarme en LinkedIn
            <Arrow diagonal />
          </a>
        </div>
        <p className="contact-location">{portfolio.location}</p>
      </div>
    </section>
  );
}

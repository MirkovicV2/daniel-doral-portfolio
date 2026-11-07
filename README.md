# Daniel Doral — Portfolio profesional

Proyecto independiente del portfolio de Daniel Doral Ignjatovic. La implementación se desarrolla en `feature/portfolio-daniel`, desde `develop`. `main` conserva el punto de partida.

El contenido sigue `Prompts_Codex_Daniel_Pablo.md`, facilitado el 7 de noviembre de 2026. No hay despliegue en producción.

## Ejecutar en este equipo

Las dependencias ya están instaladas. Node 24 recomendado; mínimo 22.23.4.

```powershell
cd C:\Users\brank\IdeaProjects\daniel-doral-portfolio
npm.cmd run dev
```

Abre **http://127.0.0.1:4321/**. También puedes hacer doble clic en `INICIAR.cmd`. En otro equipo, ejecutar primero `npm.cmd ci`. Se usa `npm.cmd` para funcionar con la política de scripts de PowerShell sin cambiarla; en otros sistemas se puede usar `npm`.

## Comandos

| Comando                    | Función                                             |
| -------------------------- | --------------------------------------------------- |
| `npm.cmd run dev`          | Desarrollo con recarga                              |
| `npm.cmd run check`        | Tipos y archivos Astro                              |
| `npm.cmd run lint`         | ESLint para TypeScript, React y scripts             |
| `npm.cmd run format:check` | Formato con Prettier                                |
| `npm.cmd run build`        | HTML estático en `dist/` e imagen Open Graph        |
| `npm.cmd run preview`      | Vista local del resultado del build                 |
| `npm.cmd test`             | Navegación, accesibilidad y capturas con Playwright |

Hacer build antes de las pruebas. Estas usan Edge si está instalado en Windows. En otros entornos puede instalarse Chromium con `npx.cmd playwright install chromium`; `PLAYWRIGHT_CHANNEL` permite elegir un canal instalado. El servidor de pruebas se inicia y termina automáticamente.

## Páginas

Inicio `/`, selección `/proyectos/`, sobre mí `/sobre-mi/`, contacto `/contacto/` y 404 para rutas desconocidas. Cinco casos completos:

- `/proyectos/deja-vu/`: trabajo comercial conjunto.
- `/proyectos/identidad-digital/`: DNI 5 y DNI en el móvil, en curso.
- `/proyectos/hacienda/`: renovación de frontend y backend.
- `/proyectos/ciemat/`: gestión de datos y digitalización.
- `/proyectos/modernizacion-bancaria/`: migración de funcionalidades COBOL–Java.

## Arquitectura y contenido

TypeScript y componentes React renderizados a HTML estático por Astro. No se necesita backend. El contenido principal y los enlaces funcionan sin JavaScript.

- `src/content/site.ts`: identidad, contactos, enlaces y datos Person.
- `src/content/editorial.ts`: procedencia, estados y filtro de publicación.
- `src/content/projects.ts`: fichas tipadas de los casos.
- `src/content/profile.ts`: trayectoria, funciones, capacidades y formación.
- `src/components/`: piezas React.
- `src/layouts/Layout.astro`: HTML semántico y metadatos por ruta.
- `src/styles/global.css` y `motion.css`: diseño y único sistema de animación.
- `src/scripts/interactions.ts`: revelados y menú móvil con Escape y foco.

Para añadir un caso, crear su ficha en `projects.ts` con procedencia y aprobación. `getStaticPaths()` genera su ruta. Un elemento con `approved: false` o estado `pendiente` queda fuera de la web; documentar también el motivo en `CONTENT_REVIEW.md`.

Puestos y periodos conservan la procedencia de LinkedIn. Las funciones detalladas proceden de la confirmación directa de Daniel del 07/11/2026. No hay proyectos inventados, autoría exclusiva de sistemas corporativos, métricas ni etiquetas editoriales para visitantes. React, TypeScript y Astro se usan para esta implementación y no se añaden al historial laboral de Daniel. El juego móvil no se muestra.

Los esquemas y las composiciones tipográficas son originales. No se reutilizan fotografías o piezas del cliente ni capturas corporativas. Fontsource sirve las fuentes desde el propio sitio; sus licencias están en las dependencias. Las animaciones respetan reduced motion. No hay analítica ni recursos de seguimiento de terceros.

El contacto abre el correo profesional real. No existe formulario simulado.

## SEO y futuro despliegue

`npm.cmd run test:seo` comprueba la configuración SEO con una URL reservada `.invalid` en una salida de prueba aislada. No modifica `dist/`.

Cada ruta tiene título, descripción y Open Graph. La información estructurada Person utiliza datos reales. `public/og.png` se regenera en cada build.

Copiar `.env.example` a `.env` cuando exista un dominio aprobado:

- `SITE_URL`: URL real de producción. Activa canonical, Open Graph absoluto, `sitemap-index.xml`, `sitemap-0.xml` y robots indexable.
- `PUBLIC_STUDIO_URL`: enlace opcional al estudio, solo cuando exista una URL real.

Sin dominio, la entrega local queda en noindex y no genera URLs de producción inventadas. La 404 queda fuera del sitemap. Después de completar la configuración, ejecutar build y revisar el contenido antes de cualquier despliegue.

`dist/` puede alojarse más adelante en un servidor estático con rutas por directorio y `404.html` para errores. Esta entrega no configura alojamiento.

## Git, pruebas y pendientes

Repositorio privado: [MirkovicV2/daniel-doral-portfolio](https://github.com/MirkovicV2/daniel-doral-portfolio). Las ramas `main`, `develop` y `feature/portfolio-daniel` están publicadas en `origin` y tienen seguimiento local. La integración se realiza hacia `develop` mediante la [PR #1](https://github.com/MirkovicV2/daniel-doral-portfolio/pull/1); `main` queda reservada para versiones estables.

- [Flujo Git y pasos para publicar ramas](docs/GIT_WORKFLOW.md).
- [Descripción de PR preparada](docs/PR_PORTFOLIO.md).
- [Verificaciones y capturas](VERIFICATION.md).
- [Procedencia, datos y recursos pendientes](CONTENT_REVIEW.md).

Documentación oficial consultada: [Astro con React](https://docs.astro.build/en/guides/integrations-guide/react/), [sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/), [transiciones](https://docs.astro.build/en/guides/view-transitions/) y [Fontsource](https://fontsource.org/docs/getting-started/variable).

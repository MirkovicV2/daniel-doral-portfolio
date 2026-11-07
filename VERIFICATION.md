# Verificación — Portfolio de Daniel

## Resultado

- `npm.cmd run lint`: correcto.
- `npm.cmd run check`: 0 errores, 0 avisos y 0 sugerencias.
- `npm.cmd run build`: correcto; 9 rutas públicas, la ruta 404 y el endpoint robots.
- `npm.cmd test`: **16 pruebas Playwright superadas** en Edge headless sobre Windows.
- `npm.cmd run test:seo`: canonical, Open Graph, robots, sitemap y enlaces configurables comprobados con una URL reservada `.invalid` en `artifacts/seo-fixture/`. La prueba verifica que el `dist/` original queda intacto; no se ha inventado un dominio de producción.

## Alcance de las pruebas de navegador

Se verifican HTML en español, un único h1 por página, títulos, descripciones, datos estructurados, ausencia de errores JavaScript, enlaces internos y sus anclas, ruta 404 y vuelta al inicio. Axe no detectó incidencias en las reglas WCAG 2 A/AA y 2.1 AA analizadas en las rutas públicas.

La navegación móvil se prueba con teclado, enlace para saltar al contenido, foco y cierre mediante Escape. Se prueba la lectura y navegación sin JavaScript, así como `prefers-reduced-motion`, incluido el cambio de preferencia con la página abierta. Las capas del esquema se abren con teclado y también sin JavaScript.

## Rediseño del 7 de noviembre de 2026

La investigación, las fuentes primarias y las decisiones adoptadas están en [docs/DESIGN_RESEARCH.md](docs/DESIGN_RESEARCH.md). Se han rehecho la jerarquía del inicio, los gráficos y el archivo de proyectos; las capacidades preceden a una trayectoria más compacta. Se han revisado las capturas de móvil, tablet y escritorio, la composición completa del inicio y las portadas de caso. Se corrigió el contraste de los metadatos de la capa activa y se amplió la descripción del esquema a todo su ancho. Las pruebas Axe finales no presentan incidencias en las reglas analizadas. Las microinteracciones son finitas y los efectos de hover se limitan a dispositivos compatibles.

Todas las rutas se recorren a 375, 768 y 1440 px, comprobando que no hay desbordamiento horizontal. Se han inspeccionado visualmente las capturas del inicio en los tres tamaños y la composición general de la página. Son tamaños emulados en navegador, no dispositivos físicos.

Los cinco casos se generan a partir del contenido aprobado. Babel se mantiene en curso.

## Capturas locales

En `artifacts/screenshots/`:

- `inicio-375.png`, `inicio-768.png`, `inicio-1440.png`.
- `inicio-completa-375.png`, `inicio-completa-768.png`, `inicio-completa-1440.png`.
- `caso-deja-vu-375.png`, `caso-deja-vu-1440.png`.
- `grafico-deja-vu-375.png`, `grafico-deja-vu-1440.png`: composición completa, revisada sin recortes de sus letras y acentos.

El informe navegable de Playwright queda en `playwright-report/index.html`. Capturas, informes y fixtures están excluidos de Git.

## Referencias y límites

Las peticiones HEAD a https://pablelas.es/, https://pablelas.es/proyectos/deja-vu y https://bar-dejavu-kebab.es/ respondieron HTTP 200. No se enviaron formularios, mensajes ni correos.

Se ha verificado que [MirkovicV2/daniel-doral-portfolio](https://github.com/MirkovicV2/daniel-doral-portfolio) es público y que GitHub Pages responde HTTP 200 en https://mirkovicv2.github.io/daniel-doral-portfolio/, incluida la ruta de proyectos y el favicon. El despliegue se ejecuta desde `develop` con GitHub Actions. La integración reciente se hizo mediante las [PR #3 — Movimiento y páginas](https://github.com/MirkovicV2/daniel-doral-portfolio/pull/3) y [PR #4 — GitHub Pages](https://github.com/MirkovicV2/daniel-doral-portfolio/pull/4), ambas hacia `develop`. Ver `docs/GIT_WORKFLOW.md`.

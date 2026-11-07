# Git y GitHub

## Estado local

- `main`: punto de partida independiente.
- `develop`: rama de integración mediante pull requests.
- `feature/portfolio-daniel`: implementación completa, pruebas y documentación.
- Commits separados para configuración, contenido, interfaz y verificación.
- `origin`: https://github.com/MirkovicV2/daniel-doral-portfolio.git. Todas las ramas anteriores están publicadas y tienen seguimiento del remoto.

Git no estaba disponible en PATH. Se ha preparado MinGit oficial en `C:\Users\brank\AppData\Local\CodexTools\mingit\cmd\git.exe`, comprobando el SHA256 publicado en su release. No se ha modificado el PATH global ni la configuración Git de otros proyectos. La identidad del autor solo se ha configurado en este repositorio con los datos profesionales facilitados.

## Repositorio y revisión

Repositorio privado de la cuenta **MirkovicV2**: https://github.com/MirkovicV2/daniel-doral-portfolio.

La implementación se integra hacia `develop` mediante la [PR #1 — Portfolio profesional](https://github.com/MirkovicV2/daniel-doral-portfolio/pull/1).

El rediseño basado en investigación se integra mediante la [PR #2 — Jerarquía editorial y capas interactivas](https://github.com/MirkovicV2/daniel-doral-portfolio/pull/2). Sus referencias y decisiones están en [DESIGN_RESEARCH.md](DESIGN_RESEARCH.md).

El bloqueo de la cuenta anterior se resolvió al autorizar GitHub CLI con la cuenta nueva. GitHub CLI guarda la autenticación en el almacén de credenciales del sistema. Este repositorio utiliza su ayudante de credenciales local; no se guardan credenciales en el código ni se cambia el ayudante de otros proyectos.

## Flujo habitual

Desde este proyecto, con Git y GitHub CLI disponibles y autenticados, actualizar la rama de trabajo antes de continuar:

```powershell
git fetch origin
git switch develop
git pull --ff-only
git switch feature/portfolio-daniel
git merge develop
```

Publicar los siguientes commits en la rama de trabajo y abrir la PR correspondiente hacia `develop`. No hacer force push ni borrar las ramas requeridas. `main` queda reservada para la promoción de una versión estable. El repositorio no configura GitHub Pages ni un despliegue del sitio.

En este equipo puede añadirse Git solo al terminal actual:

```powershell
$env:Path = 'C:\Users\brank\AppData\Local\CodexTools\mingit\cmd;' + $env:Path
```

# Git y publicación pendiente en GitHub

## Estado local

- `main`: punto de partida independiente.
- `develop`: base de integración, conservada sin merges para respetar el flujo por pull request.
- `feature/portfolio-daniel`: implementación completa, pruebas y documentación.
- Commits separados para configuración, contenido, interfaz y verificación.
- No hay remoto configurado ni upstream ficticio.

Git no estaba disponible en PATH. Se ha preparado MinGit oficial en `C:\Users\brank\AppData\Local\CodexTools\mingit\cmd\git.exe`, comprobando el SHA256 publicado en su release. No se ha modificado el PATH global ni la configuración Git de otros proyectos. La identidad del autor solo se ha configurado en este repositorio con los datos profesionales facilitados.

## Bloqueo comprobado

La herramienta conectada de GitHub devuelve HTTP 403:

> Sorry. Your account was suspended

Por ese motivo no ha sido posible crear el repositorio privado, publicar ramas, configurar el seguimiento del remoto ni abrir/integrar la pull request. No se ha intentado eludir esta restricción ni se ha publicado el sitio.

## Cuando la cuenta vuelva a tener acceso

Desde este proyecto, con Git y GitHub CLI disponibles y autenticados:

```powershell
gh repo create daniel-doral-portfolio --private --source . --remote origin
git push -u origin main
git push -u origin develop feature/portfolio-daniel
gh pr create --base develop --head feature/portfolio-daniel --title "Crea el portfolio profesional de Daniel Doral" --body-file docs/PR_PORTFOLIO.md
```

Revisar y fusionar esa PR hacia `develop` mediante GitHub. No hacer force push ni borrar las ramas requeridas. `main` queda reservada para la promoción de una versión estable, no para el desarrollo cotidiano.

En este equipo puede añadirse Git solo al terminal actual:

```powershell
$env:Path = 'C:\Users\brank\AppData\Local\CodexTools\mingit\cmd;' + $env:Path
```

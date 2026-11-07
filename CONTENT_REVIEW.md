# Revisión editorial — Daniel Doral

La fuente de trabajo es `C:\Users\brank\Desktop\Prompts_Codex_Daniel_Pablo.md`. Contiene investigación fechada el 7 de noviembre de 2026 y confirmaciones directas de Daniel. La implementación no ha vuelto a autenticar LinkedIn ni ha usado un CV.

## Contenido aprobado en esta versión

| Contenido                                                                                                        | Procedencia                                    | Estado                                                |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------------- |
| Puestos, periodos y jornadas de Babel, Minsait, ALTEN y Redsys                                                   | LinkedIn, contrastado en el documento aportado | Verificado; aprobado                                  |
| DNI 5 y DNI en el móvil; participación actual en equipo                                                          | Daniel, 07/11/2026                             | Facilitado por Daniel; aprobado                       |
| Mantenimiento de aplicaciones del Estado y renovación completa de frontend/backend de una aplicación de Hacienda | Daniel, 07/11/2026                             | Facilitado por Daniel; aprobado                       |
| Gestión de datos para CIEMAT desde el inicio, interlocución, casos de uso y digitalización de papel/Excel        | Daniel, 07/11/2026                             | Facilitado por Daniel; aprobado                       |
| Migración de funcionalidades bancarias de COBOL a Java                                                           | Daniel, 07/11/2026                             | Facilitado por Daniel; aprobado                       |
| Stack técnico de cada etapa, con cautela específica para Minsait                                                 | Documento aportado                             | Facilitado por Daniel; aprobado                       |
| Centros, denominaciones de estudios y periodos                                                                   | LinkedIn según documento aportado              | Verificado; aprobado con denominaciones del documento |
| Déjà Vu: encargo pagado y reparto del trabajo                                                                    | Daniel y caso de Pablo de 2026                 | Facilitado por Daniel; aprobado                       |
| Contacto y enlaces profesionales                                                                                 | Documento aportado                             | Aprobado                                              |

Los detalles profesionales anteriores están aprobados por la confirmación directa: no son pendientes por no aparecer completos en LinkedIn. El modelo de procedencia está en `src/content/editorial.ts`, `profile.ts` y `projects.ts`. Los proyectos se filtran con `canPublish`; los estados editoriales no se muestran a visitantes.

## Pendientes concretos

- Dominio aprobado para `SITE_URL`. Hasta entonces no hay canonical ni URLs de producción inventadas. La versión local tiene `noindex` y `robots.txt` bloqueando indexación.
- URL real del estudio para el enlace opcional `PUBLIC_STUDIO_URL`. La colaboración y el enlace al portfolio real de Pablo ya se muestran.
- CV descargable real y su contraste con la trayectoria: no hay enlace de descarga.
- Retrato y autorización de uso: no se ha generado ni publicado un retrato.
- URL profesional de GitHub: no se ha inventado un perfil ni un repositorio público.
- Materiales y ficha del juego móvil en desarrollo: queda fuera de la web.
- Evidencias visuales autorizadas para Déjà Vu. Las composiciones tipográficas de esta entrega son originales; no se han reutilizado fotografías, carteles, logos o vídeos del cliente ni del portfolio de Pablo.
- Stack concreto de la web comercial de Déjà Vu: no se atribuye una tecnología sin documentación.
- Alcance y estado reales de QR, PDF y Kafka: quedan fuera de los casos.
- Si se quiere normalizar el título académico de Centro Nelson, aportar el documento oficial. La web conserva la denominación facilitada.
- Revisar la publicación final de nombres y contextos profesionales antes de un eventual despliegue. En esta entrega solo se ha creado una versión local.

## Límites de publicación aplicados

No hay datos de ciudadanos, código de empresas, endpoints, nombres internos, arquitectura corporativa ni capturas de aplicaciones de trabajo. Los esquemas son conceptuales originales. Los casos describen la contribución individual; Babel permanece en curso. No hay métricas, cifras de dominio de tecnologías, citas del cliente ni testimonios inventados.

La satisfacción del propietario de Déjà Vu está comunicada por Daniel; no se ha convertido en un testimonio. Los proyectos de Pablo no se presentan como trabajo de Daniel.

## Enlaces

Comprobados mediante peticiones HTTP HEAD desde este equipo: portfolio de Pablo, su caso Déjà Vu y web de Déjà Vu respondieron HTTP 200. LinkedIn se conserva como fuente facilitada, sin afirmar una nueva lectura autenticada.

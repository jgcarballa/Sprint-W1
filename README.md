# Práctica para curso de introducción a Angular

Crear una aplicación para un mantenimiento básico.

La temática es sencilla, una lista de proyectos sólo con su nombre.

Necesitamos
- un formulario de alta
- un formulario de consulta
- una tabla de listado
- un página para ver un proyecto concreto
- un contador total en el dashborad


## TrainingProjects

- [Sprint W1 - Application structure](/sprint-week-1.md)
- [Sprint W2 - Routes and layout](/sprint-week-2.md)
- [Sprint W3 - Data Management](/sprint-week-3.md)
- [Sprint W4 - Http communications](/sprint-week-4.md)
- [Sprint W5 - User experience](/sprint-week-5.md)

## Habilitación de GitHubPages

La publicación en github pages requiere varios pasos:

1 - Habilitar en github la carpeta `docs` como servidor estático [Instrucciones](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages#publishing-your-github-pages-site-from-a-docs-folder-on-your-master-branch)
2 - Ajustar las url  con `--base-href` con la url obtenida en el paso 1
3 - Compilar la aplicación en modo producción con destino a docs

En la aplicación de ejemplo os propongo unos scripts de ayuda.
- "pub": "npm run build:pub && npm run push"

Es un script maestro que invoca a otros dos auxiliares
- "build:pub": "ng build --prod --output-path docs --base-href https://trainingit-introangular-ed3.github.io/angular-board/",

> Sustituye la `--base-href` con la dirección más apropiada a tu repositorio

Este es el script de compilación. Determina la carpeta destino y asigna la url según tu repositorio
- "push": "git add * && git commit -m 'pub' && git push",



### Subid el código a Git y publicad la url del repositorio en la plataforma del curso.

Cuando todo funcione, incluso puedes asignar la url obtenida a la descripción del propio repositorio.
Solo hay que editar la descripción del proyecto en su página de github y te permite asignarle una página web.

Por ejemplo en https://github.com/trainingit-introangular-ed2/angular-board
Hay un enlace a https://trainingit-introangular.github.io/angular-board/

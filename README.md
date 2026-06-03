# Portfolio Personal

Portfolio web personal desarrollado con React y Vite para presentar perfil profesional, proyectos destacados y vías de contacto.

## Demo

- GitHub Pages: https://delberrepository.github.io/portfolio/
- Repositorio: https://github.com/delberRepository/portfolio

## Descripción

Este proyecto funciona como carta de presentación online de Íñigo Martín. Incluye:

- Sección de presentación profesional.
- Resumen del perfil como desarrollador Full Stack.
- Listado de proyectos con enlaces a GitHub y demos públicas.
- Datos de contacto y acceso a LinkedIn y GitHub.

## Tecnologías

- React 19
- Vite 6
- Bootstrap 5
- React Bootstrap
- ESLint
- gh-pages

## Puesta en marcha

### Requisitos

- Node.js 18 o superior
- npm

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

La aplicación quedará disponible en `http://localhost:5173`.

### Build de producción

```bash
npm run build
```

### Vista previa del build

```bash
npm run preview
```

## Despliegue en GitHub Pages

El proyecto ya está preparado para publicar la carpeta `dist` en GitHub Pages usando `gh-pages`.

```bash
npm run deploy
```

Este comando ejecuta:

1. `npm run build`
2. Publicación del contenido de `dist/` en la rama de despliegue de GitHub Pages

URL pública esperada:

- https://delberrepository.github.io/portfolio/

## Scripts disponibles

- `npm run dev`: arranca el servidor de desarrollo.
- `npm run build`: genera el build de producción.
- `npm run preview`: sirve localmente el build generado.
- `npm run lint`: ejecuta ESLint.
- `npm run deploy`: publica el proyecto en GitHub Pages.

## Estructura del proyecto

```text
portfolio/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Contenido actual del portfolio

Proyectos enlazados actualmente desde la web:

- Sistema de Reservas
- Retro Movies
- Sitio web para estudio de danza
- Página web para estudio de grabación
- Tienda online

## Contacto

- Email: `imartinllantada@gmail.com`
- LinkedIn: https://www.linkedin.com/in/i%C3%B1igo-martin-llantada-566563277/
- GitHub: https://github.com/delberRepository

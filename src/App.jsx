import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function Portfolio() {
  return (
    <div className="min-vh-100 bg-blue text-light d-flex flex-column ">
      <header className="mb-5">
        <h1 className="display-4 fw-bold text-primary">IÑIGO MARTIN</h1>
        <p className="lead text-secondary">Desarrollador Full Stack</p>
      </header>

      <section className="container-fluid bg-light text-dark p-5 rounded-4 shadow-lg mb-4">
        <h2 className="h3 fw-bold text-primary mb-3">Sobre Mí</h2>
        <p>Soy un desarrollador web con experiencia en frontend y backend. Me encanta crear aplicaciones funcionales y atractivas.</p>
      </section>

      <section className="container-fluid bg-light text-dark p-5 rounded-4 shadow-lg mb-4">
        <h2 className="h3 fw-bold text-primary mb-3">Proyectos</h2>
        <ul className="list-unstyled">
          <li className="mb-3">
            🎵 <strong>Gestor de música</strong> - Aplicación para compartir música. 
            <a href="https://github.com/delberRepository/MusicMuse" className="text-primary"> Ver en GitHub</a>
          </li>
          <li className="mb-3">
            📊 <strong>Campus virtual</strong> - Sistema para residencia de estudiantes. 
            <a href="https://github.com/delberRepository/ctr-foes.es" className="text-primary"> Ver en GitHub</a>
          </li>
          <li>
            🌐 <strong>Portfolio Personal</strong> - Este mismo portfolio. 
            <a href="#" className="text-primary"> Ver en GitHub</a>
          </li>
        </ul>
      </section>

      <section className="container-fluid bg-light text-dark p-5 rounded-4 shadow-lg">
        <h2 className="h3 fw-bold text-primary mb-3">Contacto</h2>
        <p>📧 Email: <a href="mailto:vindalooestudios@gmail.com" className="text-primary">vindalooestudios@gmail.com</a></p>
        <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/i%C3%B1igo-martin-llantada-566563277/" className="text-primary">LinkedIn</a></p>
        <p>👨‍💻 GitHub: <a href="https://github.com/delberRepository" className="text-primary">GitHub</a></p>
      </section>
    </div>
  );
}

import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function Portfolio() {
  return (
    <div className="min-vh-100 bg-blue text-light d-flex flex-column ">
      <header className="mb-5">
        
        <p className="lead">ÍÑIGO MARTÍN</p>
        <h1 className="display-4 fw-bold text-secondary">Desarrollador Full Stack</h1>
      </header>

      <section className="container-fluid bg-light text-dark p-5 rounded-4 shadow-lg mb-4">
        <h2 className="h3 fw-bold text-secondary mb-3">Sobre Mí</h2>
        <p>Soy Full Stack Developer con formación en Desarrollo de Aplicaciones Web (DAW) y
          experiencia construyendo aplicaciones utilizando Java Spring Boot y React.
          He desarrollado proyectos completos integrando frontend y backend, trabajando
          con APIs REST, autenticación, bases de datos SQL y despliegues cloud, incluyendo
          aplicaciones desplegadas en producción con Render, PostgreSQL y Docker.
          Me interesa especialmente el desarrollo de aplicaciones escalables y seguir creciendo
          en entornos donde pueda aportar soluciones reales, aprender de otros desarrolladores y
          continuar evolucionando técnicamente..</p>
      </section>

      <section className="container-fluid bg-light text-dark p-5 rounded-4 shadow-lg mb-4">
        <h2 className="h3 fw-bold text-secondary mb-3">Proyectos</h2>
     
        
        <ul className="list-unstyled">
          <li className="mb-3 project-item">
            <i className="fa fa-calendar"></i>
            <strong> Sistema de Reservas</strong> — Spring Boot · React
            <p>Aplicación full stack con frontend React y backend Spring Boot conectado mediante API REST.</p>
            <div className="mt-2">
              <a href="https://github.com/delberRepository/coworking-boocking" className="colorsitoLetras">Ver en GitHub</a>
              <span className="mx-2">|</span>
              <a href="https://coworking-booking-frontend.onrender.com/" className="colorsitoLetras">Ver App</a>
            </div>
          </li>
       
       
          <li className="mb-3 project-item">
          <i class="fa fa-film"></i>
            <strong> Retro Movies</strong> — Spring Boot · PostgreSQL · Docker.
            <p>Aplicación full stack con autenticación, Spring Security, PostgreSQL y despliegue en Render.</p>
            <div className="mt-2"> 
            <a href="https://github.com/delberRepository/retroMovies" className="colorsitoLetras"> Ver en GitHub</a>
            <span className="mx-2">|</span>
            <a href="https://appmoviesv3.onrender.com/" className="colorsitoLetras"> Ver App</a>
          </div>  
          </li>
          <li className="mb-3 project-item">
            <i class="fas fa-globe"></i>
            <strong>Sitio Web para Estudio de Danza  </strong> - React · Vite
            <p>Aplicación web SPA desarrollada con React y Vite para un centro de danza y bienestar.
              </p>
            <div className="mt-2">
              <a href="https://delberrepository.github.io/escuelaPranature/" className="colorsitoLetras"> Ver en GitHub</a>
              <span className="mx-2">|</span>
              <a href="https://pranature.es/" className="colorsitoLetras"> Ver web</a>
            </div>
          </li>

          <li className="mb-3 project-item">
          <i class="fas fa-globe"></i> <strong>Página web</strong> — HTML5 · CSS3 · Bootstrap · PHP
            <p>Pagina creada para estudio profesional de grabación.</p>
            <div className="mt-2">
              <a href="https://github.com/delberRepository/vindalooestudios" className="colorsitoLetras"> Ver en GitHub</a>
              <span className="mx-2">|</span>
            <a href="https://vindalooestudios.com/" className="colorsitoLetras"> Ver web</a>
           </div> 
          </li>
          <li className="mb-3 project-item">
            <i class="fa fa-gift"></i><strong> Tienda  online</strong> - Proyecto desarrollada con WooComerce y WordPress <br></br>
            para tienda virtual ficticia.
            <div className="mt-2">
              <a href="https://github.com/delberRepository/tienda" className="colorsitoLetras"> Ver en GitHub</a>

            </div>
          </li>
        </ul>  
      </section>
 
      <section className="container-fluid bg-light text-dark p-5 rounded-4 shadow-lg">
  <h2 className="h3 fw-bold text-secondary mb-3">Contacto</h2>
  <p>
    <i className="fas fa-envelope"></i> Email: 
    <a href="mailto:vindalooestudios@gmail.com" className="colorsitoLetras"> imartinllantada@gmail.com</a>
  </p>
  <p>
    <i className="fab fa-linkedin"></i> LinkedIn: 
    <a href="https://www.linkedin.com/in/i%C3%B1igo-martin-llantada-566563277/" className="colorsitoLetras"> LinkedIn</a>
  </p>
  <p>
    <i className="fab fa-github"></i> GitHub: 
    <a href="https://github.com/delberRepository" className="colorsitoLetras"> GitHub</a>
  </p>
</section>
    </div>
  );
}

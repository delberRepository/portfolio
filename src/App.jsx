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
        <p>Soy un desarrollador Full Stack con pasión por crear aplicaciones funcionales y atractivas. <br></br>
          Me especializo en ReactJS, PHP y MySQL, combinando diseño y lógica para construir soluciones <br></br>
          web optimizadas. Siempre busco mejorar mis habilidades y aportar innovación en cada proyecto.</p>
      </section>

      <section className="container-fluid bg-light text-dark p-5 rounded-4 shadow-lg mb-4">
        <h2 className="h3 fw-bold text-secondary mb-3">Proyectos</h2>
     
        
        <ul className="list-unstyled">
          <li className="mb-3 project-item">
            <i className="fas fa-headphones"></i>
            <strong> Gestor de música</strong> - Aplicación para compartir música.
            <div className="mt-2">
              <a href="https://github.com/delberRepository/MusicMuse" className="colorsitoLetras">Ver en GitHub</a>
              <span className="mx-2">|</span>
              <a href="http://s922207767.mialojamiento.es/Index.php" className="colorsitoLetras">Ver App</a>
            </div>
          </li>
       
       
          <li className="mb-3 project-item">
          <i class="fas fa-graduation-cap"></i><strong> Campus virtual</strong> - Sistema para residencia de estudiantes. 
            <div className="mt-2"> 
            <a href="https://github.com/delberRepository/ctr-foes.es" className="colorsitoLetras"> Ver en GitHub</a>
            <span className="mx-2">|</span>
            <a href="https://delberrepository.github.io/ctr-foes.es" className="colorsitoLetras"> Ver Web</a>
          </div>  
          </li>
          <li className="mb-3 project-item">
          <i class="fa fa-gift"></i><strong> Tienda  online</strong> - Proyecto desarrollada con WooComerce y WordPress <br></br>
          para tienda virtual ficticia. 
            <div className="mt-2"> 
            <a href="https://github.com/delberRepository/tienda" className="colorsitoLetras"> Ver en GitHub</a>
           
          </div>  
          </li>
          <li className="mb-3 project-item">
          <i class="fas fa-globe"></i> <strong>Página web</strong> - pagina creada para estudio profesional de grabación. 
            <div className="mt-2"> 
            <a href="https://vindalooestudios.com/" className="colorsitoLetras"> Ver web</a>
           </div> 
          </li>
        </ul>  
      </section>
 
      <section className="container-fluid bg-light text-dark p-5 rounded-4 shadow-lg">
  <h2 className="h3 fw-bold text-secondary mb-3">Contacto</h2>
  <p>
    <i className="fas fa-envelope"></i> Email: 
    <a href="mailto:vindalooestudios@gmail.com" className="colorsitoLetras"> vindalooestudios@gmail.com</a>
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

import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Tu Nombre</h1>
        <p className="text-gray-600 text-lg">Desarrollador Full Stack</p>
      </header>

      <section className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sobre Mí</h2>
        <p className="text-gray-600">Soy un desarrollador web con experiencia en frontend y backend. Me encanta crear aplicaciones funcionales y atractivas.</p>
      </section>

      <section className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Proyectos</h2>
        <ul className="text-gray-600">
          <li>🎵 <strong>Gestor de Estudio de Grabación</strong> - Aplicación para administrar reservas y clientes. <a href="#" className="text-blue-500">Ver en GitHub</a></li>
          <li>📊 <strong>CRM para Negocios</strong> - Sistema para gestionar clientes y ventas. <a href="#" className="text-blue-500">Ver en GitHub</a></li>
          <li>🌐 <strong>Portfolio Personal</strong> - Este mismo portfolio. <a href="#" className="text-blue-500">Ver en GitHub</a></li>
        </ul>
      </section>

      <section className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contacto</h2>
        <p className="text-gray-600">📧 Email: <a href="mailto:tuemail@example.com" className="text-blue-500">tuemail@example.com</a></p>
        <p className="text-gray-600">💼 LinkedIn: <a href="#" className="text-blue-500">Mi perfil</a></p>
        <p className="text-gray-600">👨‍💻 GitHub: <a href="#" className="text-blue-500">Mi GitHub</a></p>
      </section>
    </div>
  );
}

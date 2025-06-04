// src/pages/Home.jsx
import React from "react";
import pantallaLed from "../image/pantalla-led.png";
import Navbar from "../components/Navbar";
import img1 from "../image/img1.png";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Imagen de fondo */}
        <img
          src={pantallaLed}
          alt="pantalla led"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Menú encima de la imagen */}
        <Navbar />

        {/* Contenido encima */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
          <h1 className="text-5xl font-bold drop-shadow-lg mb-6">Pantallas LED</h1>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-medium drop-shadow-lg">
            Saber más
          </button>
        </div>
      </div>

      {/* Sección: Nuestros Eventos */}
<section className="bg-gray-100 py-20">
  <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
    
    {/* Texto */}
    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold text-black mb-4">Nuestros Eventos</h2>
      <p className="text-gray-700 text-lg">
        Participamos en todo tipo de eventos: conciertos, ferias, lanzamientos de marca y más. Nuestras pantallas LED se adaptan a cada ocasión, creando experiencias visuales inolvidables.
      </p>
    </div>

    {/* Imagen */}
    <div className="md:w-1/2">
      <img
        src={img1}
        alt="Evento destacado"
        className="rounded-lg shadow-xl w-full h-auto object-cover"
      />
    </div>

  </div>
</section>

    </div>
  );
}

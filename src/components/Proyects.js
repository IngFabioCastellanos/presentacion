import React from "react";

const Proyects = () => {
  return (
    <div className="text-white">
      <h2 className="text-2xl font-semibold text-center">
        Algunos de los proyectos que he realizado:
      </h2>
      <div className="justify-around mt-5 sm:flex">
        <div className="p-3 mb-5 border rounded-md shadow-sm sm:w-1/4 backdrop-filter backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-center">
            Diseño de pagina web Software Healt FC
          </h2>
          <p>
            Este es un emprendimiento en el cual se esta empezando a trabajar
            desde principios de febrero del 2021.
          </p>
          <a
            href="https://www.softwarehealtfc.com/"
            target="_blank"
            className="inline-block p-2 mr-2 border rounded-md"
          >
            Visitar sitio
          </a>
          <a
            target="_blank"
            href="https://github.com/IngFabioCastellanos/softwarehealtfc"
            className="inline-block p-2 border rounded-md"
          >
            Ver codigo fuente
          </a>
        </div>

        <div className="p-3 mb-5 border rounded-md shadow-sm sm:w-1/4 backdrop-filter backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-center">Lista de tareas</h2>
          <p>
            Una aplicación en React JS que gestiona tareas usando el
            LocalStorage, es completamente funcional y con un diseño sencillo.
          </p>
          <a
            href="https://ingfabiocastellanos.github.io/lista-de-tareas/"
            target="_blank"
            className="inline-block p-2 mr-2 border rounded-md"
          >
            Visitar sitio
          </a>
          <a
            target="_blank"
            href="https://github.com/IngFabioCastellanos/lista-de-tareas"
            className="inline-block p-2 border rounded-md"
          >
            Ver codigo fuente
          </a>
        </div>

        <div className="p-3 mb-5 border rounded-md shadow-sm sm:w-1/4 backdrop-filter backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-center">
            Proyecto en proceso
          </h2>
          <p>
            Una aplicación en React JS para un cliente, se esta usando la
            metodologia incremental, firebase como backend as a service y
            conciste en la gestión de pacientes en un consultorio.
          </p>
          <a
            href="https://draclaudia.softwarehealtfc.com/"
            target="_blank"
            className="inline-block p-2 mr-2 border rounded-md"
          >
            Visitar sitio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyects;

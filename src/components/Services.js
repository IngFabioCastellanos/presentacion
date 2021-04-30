import React from "react";
import responsive from "../img/responsive.jpg";
import design from "../img/design.svg";
import contenido from "../img/contenido.svg";

const Services = () => {
  return (
    <div className="mb-10 text-white">
      <h2 className="pb-5 text-3xl font-semibold text-center ">¿Que Hago?</h2>
      <p className="px-3 pb-20 font-mono font-semibold text-center ">
        Aquí puedes ver una pequeña muestra de algunos proyectos que he
        realizado por hobby o tal vez para algún conocido, también los
        principios usados en cada uno.
      </p>
      <div className="justify-around sm:flex">
        <div className="p-3 mx-3 mb-5 duration-200 border rounded-md shadow-sm sm:w-1/4 backdrop-filter backdrop-blur-sm hover:shadow-2xl">
          <img
            src={responsive}
            className="mx-auto mb-3 rounded-md h-30"
            alt=""
          />
          <h2 className="text-xl font-semibold text-center">
            Diseño responsivo
          </h2>
          <p>
            Cada aplicación o página web que diseño esta en la capacidad de
            adaptarse al tamaño de cualquier dispositivo
          </p>
        </div>

        <div className="p-3 mx-3 mb-5 duration-200 border rounded-md shadow-sm sm:w-1/4 backdrop-filter backdrop-blur-sm hover:shadow-2xl">
          <img
            src={design}
            className="mx-auto mb-3 bg-white rounded-md h-30"
            alt=""
          />
          <h2 className="text-xl font-semibold text-center">
            Diseño intuitivo y atractivo
          </h2>
          <p>
            Tu sitio debe reflejar el mismo profesionalismo que tu empresa, y
            brindar una buena y agradable experiencia.
          </p>
        </div>

        <div
          className="p-3 mx-3 mb-5 duration-200 border rounded-md shadow-sm sm:w-1/4 backdrop-filter backdrop-blur-sm hover:shadow-2xl"
        >
          <img
            src={contenido}
            className="mx-auto mb-3 bg-white rounded-md h-30"
            alt=""
          />
          <h2 className="text-xl font-semibold text-center">
            Contenido claro y bien estructurado
          </h2>
          <p>
            El contenido debe ser apegado a tu negocio, claro, original y bien
            explicado y que encaje con el resto del diseño.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

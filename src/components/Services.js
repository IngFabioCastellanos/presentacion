import React from "react";
import responsive from "../img/responsive.jpg";
import design from "../img/design.svg";
import contenido from "../img/contenido.svg";

const Services = () => {
  return (
    <div className="text-white ">
      <h2 className="pb-5 text-3xl font-semibold text-center ">¿Que Hago?</h2>
      <p className="px-3 pb-20 font-mono font-semibold text-center ">
        Aqui puedes ver una pequeña muestra de algunos proyectos que he
        realizado por hobbie o tal vez para algun conocido, tambien los
        principios usados en cada uno.
      </p>
      <div className="justify-around sm:flex">
        <div className="p-3 mb-5 border rounded-md shadow-sm sm:w-1/4 backdrop-filter backdrop-blur-sm">
          <img
            src={responsive}
            className="h-20 mx-auto mb-3 rounded-md"
            alt=""
          />
          <h2 className="text-xl font-semibold text-center">
            Diseño responsivo
          </h2>
          <p>
            Cada aplicación o pagina web que diseño esta en la capacidad de
            adaptarse al tamaño de cualquier dispositivo
          </p>
        </div>

        <div className="p-3 mb-5 border rounded-md shadow-sm sm:w-1/4 backdrop-filter backdrop-blur-sm">
          <img
            src={design}
            className="h-20 mx-auto mb-3 bg-white rounded-md"
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

        <div className="p-3 mb-5 border rounded-md shadow-sm sm:w-1/4 backdrop-filter backdrop-blur-sm">
          <img
            src={contenido}
            className="h-20 mx-auto mb-3 bg-white rounded-md"
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

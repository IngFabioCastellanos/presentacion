import React from "react";
import email from "../img/email.png";
import github from "../img/github.png";
import correo from "../img/correo.png";

const Contactme = () => {
  return (
    <div className="my-10 text-center text-white">
      <h2 className="text-3xl font-semibold">Mis datos de contacto</h2>
      <div className="flex flex-wrap mx-1 my-5 md:flex-nowrap">
        <div className="flex flex-wrap w-full p-3 mb-2 border rounded-lg sm:w-1/2 backdrop-filter backdrop-blur-sm">
          <img
            src={email}
            className="h-20 p-2 bg-white rounded-lg"
            alt="icono email"
          />
          <h2 className="flex items-center pl-1 mx-auto">
            fcastellanos782@gmail.com
          </h2>
        </div>

        <div className="flex flex-wrap w-full p-3 mb-2 border rounded-lg sm:w-1/2 backdrop-filter backdrop-blur-sm">
          <img
            src={correo}
            className="h-20 p-2 bg-white rounded-lg"
            alt="icono correo"
          />
          <h2 className="flex items-center pl-1 mx-auto">
            info@softwarehealtfc.com
          </h2>
        </div>

        <div className="flex flex-wrap w-full p-3 mb-2 border rounded-lg sm:w-1/2 backdrop-filter backdrop-blur-sm">
          <img
            src={github}
            className="h-20 p-2 bg-white rounded-xl"
            alt="icono github"
          />
          <h2 className="flex items-center pl-1 mx-auto">
            <a href="https://github.com/IngFabioCastellanos" target="_blank">
              IngFabioCastellanos
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contactme;

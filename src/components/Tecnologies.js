import React from "react";
import javascript from "../img/javascript.png";
import react from "../img/react.png";
import html from "../img/html.png";
import tailwind from "../img/tailwind.png";
import git from "../img/git.png";
import firebase from "../img/firebase.png";

const Tecnologies = () => {
  return (
    <div className="py-5 pr-3 mx-3 text-center text-white border rounded-lg backdrop-filter backdrop-blur-sm">
      <h2 className="mb-5 text-3xl font-semibold">
        Principales tecnologías usadas en los proyectos
      </h2>
      <div className="flex flex-wrap justify-center">
        <img
          src={javascript}
          alt="icono javscript"
          className="h-20 mb-3 ml-3 duration-150 ease-linear transform hover:scale-125"
        />
        <img
          src={react}
          alt="icono javscript"
          className="h-20 mb-3 ml-3 duration-150 ease-linear transform hover:scale-125"
        />
        <img
          src={tailwind}
          alt="icono tailwind"
          className="h-20 mb-3 ml-3 duration-150 ease-linear transform bg-white rounded-xl hover:scale-125"
        />
        <img
          src={html}
          alt="icono html5"
          className="h-20 mb-3 ml-3 duration-150 ease-linear transform bg-white rounded-xl hover:scale-125"
        />
        <img
          src={git}
          alt="icono git"
          className="h-20 mb-3 ml-3 duration-150 ease-linear transform bg-white rounded-xl hover:scale-125"
        />
        <img
          src={firebase}
          alt="icono firebase"
          className="h-20 mb-3 ml-3 duration-150 ease-linear transform bg-white rounded-xl hover:scale-125"
        />
      </div>
    </div>
  );
};

export default Tecnologies;

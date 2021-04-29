import React from "react";
import javascript from "../img/javascript.png";
import react from "../img/react.png";
import html from "../img/html.png";
import tailwind from "../img/tailwind.png";
import git from "../img/git.png";
import firebase from "../img/firebase.png";

const Tecnologies = () => {
  return (
    <div className="pr-3 mx-3 text-center text-white border rounded-lg backdrop-filter backdrop-blur-sm">
      <h2 className="mb-5 text-3xl font-semibold">
        Principales tecnologías usadas en los proyectos
      </h2>
      <div className="flex flex-wrap justify-center">
        <img
          src={javascript}
          alt="icono javscript"
          className="h-20 mb-3 ml-3"
        />
        <img src={react} alt="icono javscript" className="h-20 mb-3 ml-3" />
        <img
          src={tailwind}
          alt="icono javscript"
          className="h-20 mb-3 ml-3 bg-white rounded-xl"
        />
        <img
          src={html}
          alt="icono javscript"
          className="h-20 mb-3 ml-3 bg-white rounded-xl"
        />
        <img
          src={git}
          alt="icono javscript"
          className="h-20 mb-3 ml-3 bg-white rounded-xl"
        />
        <img
          src={firebase}
          alt="icono javscript"
          className="h-20 mb-3 ml-3 bg-white rounded-xl"
        />
      </div>
    </div>
  );
};

export default Tecnologies;

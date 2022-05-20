import React from "react";
import '../hojas-de-estilo/Boton.css';

function Boton(props){

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.');
  };

  return (
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}
      onClick={() => props.manejarClic(props.children)}>
      {props.children} {/*Muestra el contenido que esta entre la etiqueta de apertura y cierre de "Boton", su contenido.*/}
    </div>
  );
};

export default Boton;
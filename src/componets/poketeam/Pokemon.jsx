import React from "react";

const Pokemon = ({ pokemon, eliminarPokemon }) => {
  const { nombre, tipo, imgp, experiencia, id } = pokemon;
  const handlerEliminar = () => {
    eliminarPokemon(id);
  };
  return (
    <div className=" tex-center  wrapper">
      <div>
        {" "}
        <img className="size-img" src={imgp} alt="pokemon" />
      </div>
      <div>
        <div className="text-start white text-bold text-pokemon">
          {` Nombre del Pokemon: ${nombre}`}
        </div>
        <div className="text-start white text-bold text-pokemon">
          {`Puntos de experiencia: ${experiencia}`}
        </div>
        <div className="text-start white text-bold text-pokemon">
          {`Tipo: ${tipo}`}
        </div>
        <div>
          <button onClick={handlerEliminar}>Liberar</button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;

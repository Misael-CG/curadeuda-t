import React from "react";
import Pokemon from "./Pokemon";
const PokeTeam = ({ pokemons, setPokemon, eliminarPokemon }) => {
  return (
    <>
      {" "}
      <div className="h3-white pt-5 tex-center ">Pokemon Team</div>
      <div className="tex-center">
        {pokemons && pokemons.length ? (
          <>
            {pokemons.map((pokemon) => (
              <Pokemon
                key={pokemon.id}
                pokemon={pokemon}
                setPokemon={setPokemon}
                eliminarPokemon={eliminarPokemon}
              />
            ))}
          </>
        ) : (
          <>
            <div className="tex-center">No hay Pokemon</div>
            <p className="tex-center">Empieza agregar pokemons {""}</p>
          </>
        )}
      </div>
    </>
  );
};

export default PokeTeam;

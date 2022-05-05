import { useState, useEffect } from "react";
import "./App.css";

import Resultado from "./componets/buscador/Resultado";
import PokeTeam from "./componets/poketeam/PokeTeam";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    const obtenerLS = () => {
      const pokemonsLS = JSON.parse(localStorage.getItem("pokemons")) ?? [];
      setPokemons(pokemonsLS);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
  }, [pokemons]);

  const eliminarPokemon = (id) => {
    const pokemonsActualizados = pokemons.filter(
      (pokemon) => pokemon.id !== id
    );
    setPokemons(pokemonsActualizados);
  };
  return (
    <Provider store={store}>
      <div className="App">
        <div className="h1-white pt-5 tex-center  ">PokeDex</div>
        <br />
        <br />

        <Resultado
          pokemons={pokemons}
          setPokemons={setPokemons}
          pokemon={pokemon}
          setPokemon={setPokemon}
        />
        <PokeTeam
          pokemons={pokemons}
          setPokemon={setPokemon}
          eliminarPokemon={eliminarPokemon}
        />
      </div>
    </Provider>
  );
}

export default App;

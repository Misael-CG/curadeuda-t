import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import fetchPokemon from "../../redux/actions/buscadorAction";
import "../../App.css";

const Resultado = ({ pokemons, setPokemons, pokemon, setPokemon }) => {
  const buscador = useSelector((state) => state.buscador);
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const [nombre, setNombre] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [tipo, setTipo] = useState("");
  const [imgp, setImgp] = useState("");

  useEffect(() => {
    if (Object.keys(pokemon).length > 0) {
      setNombre(pokemon.nombre);
      setExperiencia(pokemon.experiencia);
      setTipo(pokemon.tipo);
      setImgp(pokemon.imgp);
    }
  }, [pokemon]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };
  const writeState = () => {
    setNombre(buscador.pokemon[0]?.name);
    setExperiencia(buscador.pokemon[0]?.base_experience);
    setTipo(buscador.pokemon[0]?.types[0].type.name);
    setImgp(buscador.pokemon[0]?.sprites.front_default);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchPokemon(pokemonName));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      writeState();
    }, 10);
    return () => clearTimeout(timer);
  }, [handleSearch]);

  const handleSubmit = (e) => {
    const objetoPokemon = {
      nombre,
      experiencia,
      tipo,
      imgp,
      id: generarId(),
    };
    setPokemons([...pokemons, objetoPokemon]);
  };

  return (
    <>
      <div>
        {" "}
        <div className="Row tex-center white"> Busca tu pokemon</div>
        <div className=" tex-center">
          <input
            type="text"
            id="buscar_pokemon"
            value={pokemonName}
            onChange={(e) => {
              setPokemonName(e.target.value);
            }}
          />
        </div>
        <div className="tex-center ">
          <button type="button" onClick={handleSearch}>
            Buscar
          </button>
        </div>
      </div>
      <br />

      {buscador.pokemon.length >= 1 && (
        <>
          <div className="Row tex-center white text-bold"> Encontrado!!!</div>
          <div className=" tex-center  wrapper">
            <div>
              {" "}
              <img
                className="size-img"
                src={buscador.pokemon[0].sprites.front_default}
                alt="pokemon"
              />
            </div>
            <div>
              <div className="text-start white text-bold text-pokemon">
                {` Nombre del Pokemon: ${buscador.pokemon[0].name}`}
              </div>
              <div className="text-start white text-bold text-pokemon">
                {`Puntos de experiencia: ${buscador.pokemon[0].base_experience}`}
              </div>
              <div className="text-start white text-bold text-pokemon">
                {`Tipo: ${buscador.pokemon[0].types[0].type.name}`}
              </div>
              <div>
                <button onClick={handleSubmit}>Añadir a mi equipo</button>
              </div>
            </div>
          </div>
        </>
      )}
      {buscador.error !== "" && <div>No se encuentra este pokemon</div>}
    </>
  );
};

export default Resultado;

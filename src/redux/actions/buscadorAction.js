import Axios from "axios";
export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCES = "FETCH_POKEMON_SUCCES";
export const FETCH_POKEMON_ERROR = "FETCH_POKEMON_ERROR";

export const fetchPokemonRequest = () => {
  return {
    type: FETCH_POKEMON_REQUEST,
  };
};
export const fetchPokemonSucces = (Pokemon) => {
  return {
    type: FETCH_POKEMON_SUCCES,
    payload: Pokemon,
  };
};
export const fetchPokemonError = (error) => {
  return {
    type: FETCH_POKEMON_ERROR,
    payload: error,
  };
};

const fetchPokemon = (valor) => {
  return (dispatch) => {
    dispatch(fetchPokemonRequest());
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
      .then((response) => {
        dispatch(fetchPokemonSucces([response.data]));
      })
      .catch((error) => {
        dispatch(fetchPokemonError("No se encontro pokemon"));
      });
  };
};

export default fetchPokemon;

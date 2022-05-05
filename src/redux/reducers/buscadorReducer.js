import {
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCES,
  FETCH_POKEMON_ERROR,
} from "../actions/buscadorAction";

const initialState = {
  succes: false,
  loadig: false,
  pokemon: [],
  error: "",
};

const buscador = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_REQUEST:
      return {
        ...state,

        loadig: true,
      };
    case FETCH_POKEMON_SUCCES:
      return {
        succes: true,
        loadig: false,
        pokemon: action.payload,
        error: "",
      };
    case FETCH_POKEMON_ERROR:
      return {
        succes: false,
        loadig: false,
        pokemon: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default buscador;

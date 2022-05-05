import { combineReducers } from "redux";

import buscador from "./buscadorReducer";

const rootReducer = combineReducers({
  buscador,
});

export default rootReducer;

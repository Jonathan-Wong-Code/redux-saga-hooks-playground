import { combineReducers } from "redux";
import userReducer from "./user";
import pokemonReducer from "./pokemon";

const rootReducer = combineReducers({
  user: userReducer,
  pokemon: pokemonReducer
});

export default rootReducer;

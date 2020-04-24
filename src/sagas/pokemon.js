import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import uuid from "uuid";
export function* addPokemon(action) {
  const { query } = action;
  try {
    const response = yield call(
      axios,
      `https://pokeapi.co/api/v2/pokemon/${query}`
    );

    const { name, sprites } = response.data;
    const pokemon = {
      name,
      img: sprites.front_default,
      id: uuid(),
    };

    yield put({ type: "ADD_POKEMON_ASYNC", pokemon });
  } catch (error) {
    yield put({ type: "ADD_POKEMON_ERROR", error: "Error loading pokemon" });
  }
}

export function* watchPokemon() {
  yield takeLatest("ADD_POKEMON", addPokemon);
}

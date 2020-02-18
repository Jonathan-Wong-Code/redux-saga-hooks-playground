import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers";
import { watchPokemon } from "../sagas/pokemon";

const sagaMiddleWare = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(watchPokemon);

export default store;

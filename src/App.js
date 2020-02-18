import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import PokeForm from "./components/Form";
import PokemonList from "./components/PokemonList";
function App() {
  return (
    <Provider store={store}>
      <main className="App">
        <h1>React Redux Demo</h1>
        <PokeForm />
        <PokemonList />
      </main>
    </Provider>
  );
}

export default App;

import React from "react";
import { useSelector } from "react-redux";
import PokemonItem from "./PokemonItem";

function PokemonList() {
  const pokemon = useSelector(state => state.pokemon.pokemon);
  const renderPokemonList = () => {
    return pokemon.length > 0 ? (
      <ul>
        {pokemon.map(pokemon => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    ) : (
      <p>No pokemon saved</p>
    );
  };

  return (
    <section>
      <h2>Your Pokemon</h2>
      {renderPokemonList()}
    </section>
  );
}

export default PokemonList;

import React from "react";
import { useDispatch } from "react-redux";

const removePokemon = id => ({
  type: "REMOVE_POKEMON",
  id
});

function PokemonItem({ pokemon }) {
  const dispatch = useDispatch();
  const { name, img, id } = pokemon;
  return (
    <li>
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <button onClick={() => dispatch(removePokemon(id))}>Delete</button>
    </li>
  );
}

export default PokemonItem;

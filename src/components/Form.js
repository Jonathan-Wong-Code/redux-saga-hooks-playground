import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";

const reducer = (oldState, newState) => ({ ...oldState, ...newState });

const addPokemon = query => {
  return {
    type: "ADD_POKEMON",
    query
  };
};

const PokemonForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.pokemon.error);
  const [{ query, loading }, setState] = useReducer(reducer, {
    query: "",
    loading: false
  });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await dispatch(addPokemon(query));
      setState({ loading: true });
    } catch (error) {
      setState({ error: "Error!" });
    }

    setState({ loading: false, query: "" });
  };

  return (
    <section>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          id="query"
          value={query}
          onChange={e => setState({ query: e.target.value })}
        />
        <button>Add Pokemon</button>
      </form>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
    </section>
  );
};

export default PokemonForm;

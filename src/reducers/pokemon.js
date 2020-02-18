const initialState = {
  pokemon: [],
  error: ""
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POKEMON_ASYNC": {
      return {
        ...state,
        pokemon: [...state.pokemon, action.pokemon],
        error: ""
      };
    }

    case "ADD_POKEMON_ERROR": {
      return { ...state, error: action.error };
    }

    case "REMOVE_POKEMON": {
      return {
        ...state,
        pokemon: state.pokemon.filter(pokemon => pokemon.id !== action.id)
      };
    }
    default: {
      return state;
    }
  }
};

export default pokemonReducer;

import { runSaga } from "redux-saga";
import { addPokemon } from "./pokemon";
import axios from "axios";
import uuid from "uuid";

jest.mock("axios");
jest.mock("uuid");

beforeEach(() => jest.clearAllMocks());

const mockPokemon = {
  data: {
    name: "test-name",
    sprites: {
      front_default: "test-img",
    },
    id: "test-id",
  },
};

it("Should add a pokemon on successful call", async () => {
  const dispatchedActions = [];
  axios.mockImplementationOnce(() => Promise.resolve(mockPokemon));
  uuid.mockImplementationOnce(() => "test-id");
  const fakeStore = {
    getState: () => ({ pokemon: [] }),
    dispatch: (action) => dispatchedActions.push(action),
  };

  await runSaga(fakeStore, addPokemon, "pikachu").done;

  expect(axios).toHaveBeenCalledTimes(1);
  expect(dispatchedActions).toEqual([
    {
      type: "ADD_POKEMON_ASYNC",
      pokemon: {
        name: "test-name",
        img: "test-img",
        id: "test-id",
      },
    },
  ]);
});

import { marvelHeroesReducer } from "redux/reducers/marvel-heroes.reducer";
import { loadMarvelHeroes } from "redux/action-creators/marvel-heroes.action-creators";

const state = {
  marvelHeroesList: [],
};

it("length of marvel heroes list should be incremented ", () => {
  const action = loadMarvelHeroes([
    {
      name: "Hulk",
      src: "",
      description: "Strong man.",
    },
    {
      name: "Iron Man",
      src: "",
      description: "Smart man.",
    },
  ]);

  const newState = marvelHeroesReducer(state, action);

  expect(newState.marvelHeroesList.length).toBe(2);
});

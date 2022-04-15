import { setMarvelHeroes } from "redux/action-creators/marvel-heroes.action-creators";
import { marvelHeroesReducer } from "redux/reducers/marvel-heroes.reducer";

const state = {
  marvelHeroesList: [],
  heroId: null,
};

it("length of marvel heroes list should be incremented ", () => {
  const action = setMarvelHeroes([
    {
      name: "Hulk",
      src: "",
      description: "Strong man.",
      id: 1,
    },
    {
      name: "Iron Man",
      src: "",
      description: "Smart man.",
      id: 2,
    },
  ]);

  const newState = marvelHeroesReducer(state, action);

  expect(newState.marvelHeroesList.length).toBe(2);
});

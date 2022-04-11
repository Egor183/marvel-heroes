import { RootStateOrAny } from "react-redux";

export const selectMarvelHeroes = (state: RootStateOrAny) =>
  state.marvelHeroes.marvelHeroesList;

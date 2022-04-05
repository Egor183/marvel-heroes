import { MarvelHeroesTypeList } from "./marvel-heroes.types";

export type InitialStateMarvelHeroesReducerType = {
  marvelHeroesList: MarvelHeroesTypeList | never[];
};

export type InitialStateErrorReducerType = {
  hasError: boolean;
};

export type InitialStateLoadingReducerType = {
  isLoading: boolean;
};

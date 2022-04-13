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

export type InitialStateSearchReducerType = {
  loading: boolean;
  results: MarvelHeroesTypeList;
  value: string;
  isRequestAvailable: boolean;
};

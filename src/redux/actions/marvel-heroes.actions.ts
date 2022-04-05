import { MarvelHeroesTypeList } from "types/marvel-heroes.types";
import { LOAD_MARVEL_HEROES } from "../action-types/marvel-heroes.action-types";

export const loadMarvelHeroes = (marvelHeroesList: MarvelHeroesTypeList) => {
  return { type: LOAD_MARVEL_HEROES, payload: marvelHeroesList };
};

import { MarvelHeroesTypeList } from "types/marvel-heroes.types";
import {
  LOAD_MARVEL_HEROES,
  SET_HERO_ID,
} from "../action-types/marvel-heroes.action-types";

export const loadMarvelHeroes = (marvelHeroesList: MarvelHeroesTypeList) => {
  return { type: LOAD_MARVEL_HEROES, payload: marvelHeroesList };
};

export const setHeroId = (heroId: number | null) => {
  return { type: SET_HERO_ID, payload: heroId };
};

import {
  CLEAN_VALUE,
  FINISH_SEARCH,
  START_SEARCH,
} from "redux/action-types/search.action-types";
import { MarvelHeroesTypeList } from "types/marvel-heroes.types";

export const startSearch = (value: string) => {
  return { type: START_SEARCH, value };
};

export const cleanValue = () => {
  return { type: CLEAN_VALUE };
};

export const finishSearch = (results: MarvelHeroesTypeList) => {
  return {
    type: FINISH_SEARCH,
    results,
  };
};

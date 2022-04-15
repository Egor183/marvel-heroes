import {
  FINISH_SEARCH,
  START_SEARCH,
  HANDLE_REQUEST,
} from "redux/actions/search.actions";
import { MarvelHeroesTypeList } from "types/marvel-heroes.types";

export const startSearch = (value: string) => {
  return { type: START_SEARCH, payload: value };
};

export const finishSearch = (results: MarvelHeroesTypeList) => {
  return {
    type: FINISH_SEARCH,
    payload: results,
  };
};

export const handleRequest = (requestState: boolean) => {
  return {
    type: HANDLE_REQUEST,
    payload: requestState,
  };
};

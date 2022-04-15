import { MarvelHeroesActionType } from "types/redux-actions.types";
import { InitialStateMarvelHeroesReducerType } from "types/redux-reducers.types";
import {
  LOAD_MARVEL_HEROES,
  SET_HERO_ID,
} from "../action-types/marvel-heroes.action-types";

const initialState: InitialStateMarvelHeroesReducerType = {
  marvelHeroesList: [],
  heroId: null,
};

export const marvelHeroesReducer = (
  state = initialState,
  action: MarvelHeroesActionType
) => {
  switch (action.type) {
    case LOAD_MARVEL_HEROES:
      return {
        ...state,
        marvelHeroesList: [...state.marvelHeroesList, ...action.payload],
      };

    case SET_HERO_ID:
      return {
        ...state,
        heroId: action.payload,
      };

    default:
      return state;
  }
};

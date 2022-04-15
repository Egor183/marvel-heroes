import { HYDRATE } from "next-redux-wrapper";
import { MarvelHeroesActionType } from "types/redux-actions.types";
import { InitialStateMarvelHeroesReducerType } from "types/redux-reducers.types";
import { MarvelHeroesTypeList } from "types/marvel-heroes.types";
import {
  LOAD_MARVEL_HEROES,
  SET_HERO_ID,
} from "../actions/marvel-heroes.actions";

const initialState: InitialStateMarvelHeroesReducerType = {
  marvelHeroesList: [],
  heroId: null,
};

export const marvelHeroesReducer = (
  state = initialState,
  action: MarvelHeroesActionType
) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        marvelHeroesList: state.marvelHeroesList.length
          ? state.marvelHeroesList
          : [
              ...state.marvelHeroesList,
              ...action.payload.marvelHeroes.marvelHeroesList,
            ],
      };

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

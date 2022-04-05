import { MarvelHeroesActionType } from "types/redux-actions.types";
import { InitialStateMarvelHeroesReducerType } from "types/redux-reducers.types";
import { LOAD_MARVEL_HEROES } from "../action-types/marvel-heroes.action-types";

const initialState: InitialStateMarvelHeroesReducerType = {
  marvelHeroesList: [],
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

    default:
      return state;
  }
};

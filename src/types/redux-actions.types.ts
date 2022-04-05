import { MarvelHeroesTypeList } from "./marvel-heroes.types";

type BasicActionType<T> = {
  type: string;
  payload: T;
};

export type ErrorActionType = BasicActionType<boolean>;

export type LoadingActionType = BasicActionType<boolean>;

export type MarvelHeroesActionType = BasicActionType<MarvelHeroesTypeList>;

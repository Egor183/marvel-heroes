import { RootStateOrAny } from "react-redux";
import { MarvelHeroesTypeList } from "./marvel-heroes.types";

type BasicActionType<T> = {
  type: string;
  payload: T;
};

export type ErrorActionType = BasicActionType<boolean | RootStateOrAny>;

export type LoadingActionType = BasicActionType<boolean>;

export type MarvelHeroesActionType = BasicActionType<
  MarvelHeroesTypeList | number | null | RootStateOrAny
>;

export type SearchActionType = BasicActionType<string | MarvelHeroesTypeList>;

export type MainActionType = BasicActionType<any>;

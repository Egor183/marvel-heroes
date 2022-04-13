import { DefaultRootState, RootStateOrAny } from "react-redux";
import { createSelector } from "reselect";
import { MarvelHeroRenderItemType } from "types/marvel-heroes.types";

export const selectMarvelHeroes = createSelector(
  (state: RootStateOrAny) => state.marvelHeroes.marvelHeroesList,
  (marvelHeroesList) => marvelHeroesList
);

export const selectMarvelHero = createSelector(
  selectMarvelHeroes,
  (state: DefaultRootState, heroId?: number) => heroId,
  (items, heroId) => {
    if (!heroId) {
      return null;
    }

    return items.find((item: MarvelHeroRenderItemType) => item.id === heroId);
  }
);

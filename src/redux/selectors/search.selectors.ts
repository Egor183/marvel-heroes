import { RootStateOrAny } from "react-redux";
import { createSelector } from "reselect";

export const selectSearchState = createSelector(
  (state: RootStateOrAny) => state.search,
  (searchState) => searchState
);

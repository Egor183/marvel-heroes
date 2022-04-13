import { RootStateOrAny } from "react-redux";
import { createSelector } from "reselect";

export const selectSearchState = createSelector(
  (state: RootStateOrAny) => state.search,
  (searchState) => searchState
);

export const selectIsRequestAvailableState = createSelector(
  (state: RootStateOrAny) => state.search.isRequestAvailable,
  (isRequestAvailable) => isRequestAvailable
);

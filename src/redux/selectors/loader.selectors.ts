import { RootStateOrAny } from "react-redux";
import { createSelector } from "reselect";

export const selectLoaderState = createSelector(
  (state: RootStateOrAny) => state.loading.isLoading,
  (isLoading) => isLoading
);

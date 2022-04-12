import { RootStateOrAny } from "react-redux";
import { createSelector } from "reselect";

export const selectErrorState = createSelector(
  (state: RootStateOrAny) => state.error.hasError,
  (hasError) => hasError
);

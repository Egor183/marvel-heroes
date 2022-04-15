import { SET_ERROR } from "../actions/error.actions";

export const setError = (isLoading: boolean) => {
  return { type: SET_ERROR, payload: isLoading };
};

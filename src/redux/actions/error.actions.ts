import { SET_ERROR } from "../action-types/error.action-types";

export const setError = (isLoading: boolean) => {
  return { type: SET_ERROR, payload: isLoading };
};

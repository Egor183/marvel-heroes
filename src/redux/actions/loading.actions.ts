import { SET_LOADING } from "../action-types/loading.action-types";

export const setLoading = (isLoading: boolean) => {
  return { type: SET_LOADING, payload: isLoading };
};

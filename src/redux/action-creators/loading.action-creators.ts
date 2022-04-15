import { SET_LOADING } from "../actions/loading.actions";

export const setLoading = (isLoading: boolean) => {
  return { type: SET_LOADING, payload: isLoading };
};

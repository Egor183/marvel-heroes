import { API_METHODS, API_ROUTES } from "constants/api.constants";
import { setError } from "redux/action-creators/error.action-creators";
import { setLoading } from "redux/action-creators/loading.action-creators";
import { setMarvelHeroes } from "redux/action-creators/marvel-heroes.action-creators";
import { selectMarvelHeroes } from "redux/selectors/marvel-heroes.selectors";
import { selectIsRequestAvailableState } from "redux/selectors/search.selectors";
import { AppThunk } from "redux/store";
import makeRequest from "services/api.services";

export const loadMarvelHeroes = (): AppThunk => async (dispatch, getState) => {
  const isRequestAvailable = selectIsRequestAvailableState(getState());
  const marvelHeroes = selectMarvelHeroes(getState());

  if (!isRequestAvailable) {
    return;
  }

  try {
    dispatch(setLoading(true));
    const { data } = await makeRequest(
      API_ROUTES.MARVEL_HEROES,
      API_METHODS.GET,
      {
        offset: marvelHeroes.length,
      }
    );

    if (!data?.data?.results) {
      return;
    }
    dispatch(setMarvelHeroes(data.data.results));
  } catch (e) {
    dispatch(setError(true));
  } finally {
    dispatch(setLoading(false));
  }
};

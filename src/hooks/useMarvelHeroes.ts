import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_METHODS, API_ROUTES } from "constants/api.constants";
import { loadMarvelHeroes } from "redux/actions/marvel-heroes.actions";
import { selectMarvelHeroes } from "redux/selectors/marvel-heroes.selectors";
import { useRequest } from "./useRequest.hook";
import { selectIsRequestAvailableState } from "redux/selectors/search.selectors";

export const useMarvelHeroes = () => {
  const request = useRequest();
  const dispatch = useDispatch();
  const marvelHeroes = useSelector(selectMarvelHeroes);
  const isRequestAvailable = useSelector(selectIsRequestAvailableState);

  const getMarvelHeroes = useCallback(async () => {
    if (!isRequestAvailable) {
      return;
    }

    try {
      const { data } = await request(
        API_ROUTES.MARVEL_HEROES,
        API_METHODS.GET,
        {
          offset: marvelHeroes.length,
        }
      );

      if (!data?.data?.results) {
        return;
      }

      dispatch(loadMarvelHeroes(data.data.results));
    } catch (e) {
      //
    }
  }, [dispatch, request, marvelHeroes.length, isRequestAvailable]);

  useEffect(() => {
    (async () => {
      await getMarvelHeroes();
    })();
  }, []);

  return { marvelHeroes, getMarvelHeroes };
};

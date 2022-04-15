import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMarvelHeroes } from "redux/thunk-creators/marvel-heroes.thunk-creators";
import {
  selectMarvelHeroes,
  selectMarvelHeroId,
} from "redux/selectors/marvel-heroes.selectors";

export const useMarvelHeroes = () => {
  const dispatch = useDispatch();
  const marvelHeroes = useSelector(selectMarvelHeroes);
  const heroId = useSelector(selectMarvelHeroId);

  const getMarvelHeroes = useCallback(async () => {
    dispatch(loadMarvelHeroes());
  }, [dispatch]);

  return { marvelHeroes, heroId, getMarvelHeroes };
};

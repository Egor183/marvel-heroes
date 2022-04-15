import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setHeroId } from "redux/action-creators/marvel-heroes.action-creators";

export const useHero = (id: number) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeroId(id));
  }, [dispatch, id]);
};

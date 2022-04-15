import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setHeroId } from "redux/actions/marvel-heroes.actions";

export const useHero = (id: number) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeroId(id));
  }, [dispatch, id]);
};

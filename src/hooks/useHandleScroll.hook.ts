import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { setHeroId } from "redux/action-creators/marvel-heroes.action-creators";
import { MarvelHeroesTypeList } from "types/marvel-heroes.types";
import { SCROLL_GAP } from "constants/global.constants";

export const useHandleScroll = (
  callback: () => void,
  results: MarvelHeroesTypeList
) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollElementRef = useRef<null | HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!scrollElementRef || !scrollElementRef.current) {
      return;
    }

    scrollElementRef.current.scrollIntoView({ behavior: "smooth" });
  }, [results]);

  const handleScroll = () => {
    if (!scrollRef.current) {
      return;
    }

    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

    if (scrollTop + clientHeight + SCROLL_GAP < scrollHeight) {
      return;
    }
    dispatch(setHeroId(null));
    callback();
  };

  return { scrollRef, handleScroll, scrollElementRef };
};

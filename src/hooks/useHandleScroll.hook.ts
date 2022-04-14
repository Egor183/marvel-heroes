import { useRef } from "react";
import { SCROLL_GAP } from "./../constants/global.constants";

export const useHandleScroll = (callback: () => void) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) {
      return;
    }

    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

    if (scrollTop + clientHeight + SCROLL_GAP < scrollHeight) {
      return;
    }

    callback();
  };

  return { scrollRef, handleScroll };
};

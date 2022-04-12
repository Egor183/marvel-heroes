import { useRef } from "react";

export const useHandleScroll = (callback: () => void) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) {
      return;
    }

    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

    if (scrollTop + clientHeight !== scrollHeight) {
      return;
    }

    callback();
  };

  return { scrollRef, handleScroll };
};

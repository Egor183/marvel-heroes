import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectErrorState } from "redux/selectors/error.selectors";

export const useError = () => {
  const hasError = useSelector(selectErrorState);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(hasError);
  }, [hasError]);

  return isOpen;
};

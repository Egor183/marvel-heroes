import React, { useCallback, useEffect, useRef } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchState } from "redux/selectors/search.selectors";
import {
  finishSearch,
  handleRequest,
  startSearch,
} from "redux/action-creators/search.action-creators";
import { SearchType } from "types/search.types.";

export const useSearch = ({ source, filterField }: SearchType) => {
  const { loading, value } = useSelector(selectSearchState);
  const dispatch = useDispatch();

  const timeoutRef: React.MutableRefObject<number | undefined> = useRef();
  const handleSearchChange = useCallback(
    (e, data) => {
      clearTimeout(timeoutRef.current);
      dispatch(startSearch(data.value));
      dispatch(handleRequest(false));

      timeoutRef.current = window.setTimeout(() => {
        if (!data.value.length) {
          dispatch(finishSearch(source));
          dispatch(handleRequest(true));
          return;
        }
        const re = new RegExp(_.escapeRegExp(data.value), "i");
        const isMatch = (result: any) => {
          return re.test(result[filterField]);
        };

        dispatch(finishSearch(_.filter(source, isMatch)));
      }, 300);
    },
    [dispatch, source, filterField]
  );

  useEffect(() => {
    dispatch(finishSearch(source));

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [dispatch, source]);

  return { loading, value, handleSearchChange };
};

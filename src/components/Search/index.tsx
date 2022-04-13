import React, { memo, useCallback, useEffect, useRef } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchState } from "redux/selectors/search.selectors";
import { Search as SearchComponent } from "semantic-ui-react";
import { finishSearch, startSearch } from "redux/actions/search.actions";
import { SearchType } from "types/search.types.";

const Search: React.FC<SearchType> = ({ source, filterField }) => {
  const { loading, results, value } = useSelector(selectSearchState);
  const dispatch = useDispatch();

  const timeoutRef: React.MutableRefObject<number | undefined> = useRef();
  const handleSearchChange = useCallback(
    (e, data) => {
      clearTimeout(timeoutRef.current);
      dispatch(startSearch(data.value));

      timeoutRef.current = window.setTimeout(() => {
        if (!data.value.length) {
          dispatch(finishSearch(source));
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

  return (
    <SearchComponent
      loading={loading}
      placeholder="Search..."
      onSearchChange={handleSearchChange}
      value={value}
      showNoResults={false}
    />
  );
};

export default memo(Search);

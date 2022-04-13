import { memo } from "react";
import { useSelector } from "react-redux";
import { selectSearchState } from "redux/selectors/search.selectors";
import { Search as SearchComponent } from "semantic-ui-react";

const Search = () => {
  const { loading, results, value } = useSelector(selectSearchState);

  return (
    <SearchComponent
      loading={loading}
      placeholder="Search..."
      // onResultSelect={(e, data) =>
      //   dispatch({ type: "UPDATE_SELECTION", selection: data.result.title })
      // }
      // onSearchChange={handleSearchChange}
      results={results}
      value={value}
    />
  );
};

export default memo(Search);

import React, { memo } from "react";
import { Search as SearchComponent } from "semantic-ui-react";
import { SearchType } from "types/search.types.";
import { useSearch } from "hooks/useSearch";

const Search: React.FC<SearchType> = ({ source, filterField }) => {
  const { loading, value, handleSearchChange } = useSearch({
    source,
    filterField,
  });

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

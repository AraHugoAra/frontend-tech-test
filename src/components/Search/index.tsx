import React, { useContext } from "react";
import { TextField } from "@lumx/react";
import { mdiMagnify } from "@lumx/icons";
import debounce from "./debounce";
import {
  SearchBarContext,
  SearchBarContextStateType,
} from "../../context/searchBarContext";

interface DebounceSearchResultType {
  (text: string): void;
}

const Search = () => {
  const { setSearchText }: SearchBarContextStateType =
    useContext(SearchBarContext);

  const debounceSearchResult: DebounceSearchResultType = debounce(
    (text: string) => {
      setSearchText(text);
    },
    350
  );

  return (
    <TextField
      className="search-field"
      placeholder="Search ..."
      icon={mdiMagnify}
      onChange={(text) => debounceSearchResult(text)}
    />
  );
};

export default Search;

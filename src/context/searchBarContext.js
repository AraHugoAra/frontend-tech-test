import React, { createContext, useState } from "react";

export const SearchBarContext = createContext({ searchText: "" });

export function SearchBarContextProvider({ children }) {
  const [searchText, setSearchText] = useState("");
  return (
    <SearchBarContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchBarContext.Provider>
  );
}

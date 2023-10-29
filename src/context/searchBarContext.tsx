import React, { createContext, useState } from "react";

export type SearchBarContextStateType = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

interface SearchBarProviderType {
  children: React.ReactNode;
}

export const SearchBarContext: any = createContext<SearchBarContextStateType>({
  searchText: "",
  setSearchText: () => {},
});

export function SearchBarContextProvider({ children }: SearchBarProviderType) {
  const [searchText, setSearchText] = useState<string>("");
  const value = {
    searchText,
    setSearchText,
  };

  return (
    <SearchBarContext.Provider value={value}>
      {children}
    </SearchBarContext.Provider>
  );
}

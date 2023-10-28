import React, { useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import calculatePageNumber from "../../api/calculatePageNumber";
import CharacterCard from "../CharacterCard";
import Pagination from "../Pagination";
import { SearchBarContext, SearchBarContextStateType } from "../../context/searchBarContext";
import { CharacterType } from '../../api/types'

const ListContainer = () => {
  const { searchText }: SearchBarContextStateType = useContext(SearchBarContext)

  // USE OF THE API
  const [currentPage, setCurrentPage] = useState<number>(1);
  const resultsPerPage = 4;
  const offset = (currentPage - 1) * resultsPerPage;
  const { data, loading, error } = useFetch(
    `/characters?${searchText ? `nameStartsWith=${searchText}&` : ''}limit=${resultsPerPage}&offset=${offset > 0 ? offset : 0}`,
    {},
    [currentPage, searchText]
  );
  const lastIndex = currentPage * resultsPerPage;
  const firstIndex = lastIndex - resultsPerPage;
  const pagesNumber = calculatePageNumber(
    data?.response?.data?.data?.total,
    resultsPerPage
  );

    useEffect(() => {
      //Resets current page after every new name query
      setCurrentPage(1)
    }, [searchText])
  // const data = placeholder;
  // const loading = false;
  // const error = null;

  // const [currentPage, setCurrentPage] = useState(1);

  // const resultsPerPage = 4;
  // const lastIndex = currentPage * resultsPerPage;
  // const firstIndex = lastIndex - resultsPerPage;
  // const pagesNumber = calculatePageNumber(
  //   data.response.data.data.results.length,
  //   resultsPerPage
  // );

  return !loading && !error ? ( //TO DO: "No results" screen
    <div className="list-page">
      <div className="list-container">
        {data?.response?.data?.data.results
          .map((item: CharacterType, index: number) => (
            <CharacterCard key={item.id ?? index} character={item} /> //id is optionnal in database so index has been added to prevent key's absence
          ))}
        {pagesNumber > 1 && (
          <Pagination
            firstIndex={firstIndex}
            lastIndex={lastIndex}
            resultsPerPage={resultsPerPage}
            pagesNumber={pagesNumber}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  ) : (
    <div className="list-container">
      <span className="loader"></span>
    </div>
  );
};

export default ListContainer;

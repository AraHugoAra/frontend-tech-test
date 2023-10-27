import React, { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import calculatePageNumber from "../../api/calculatePageNumber";
import CharacterCard from "../CharacterCard";
import placeholder from "../../api/placeholder";
import Pagination from "../Pagination";
import { SearchBarContext } from "../../context/searchBarContext";

const ListContainer = () => {
  const { searchText } = useContext(SearchBarContext)

  // USE OF THE API
  const [currentPage, setCurrentPage] = useState(1);
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

  // // USE OF THE PLACEHOLDER -> fold these lines
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
          // .slice(firstIndex, lastIndex) //Only when using placeholder
          .map((item, index) => (
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
    <p>Loading...</p> //TO DO: Switch to a real loading component
  );
};

export default ListContainer;

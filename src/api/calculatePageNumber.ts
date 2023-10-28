const calculatePageNumber = (totalResults: number, resultsParPage: number) =>
  Math.ceil(totalResults / resultsParPage);

export default calculatePageNumber;

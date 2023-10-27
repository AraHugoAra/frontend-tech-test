const calculatePageNumber = (totalResults, resultsParPage) => Math.ceil(totalResults / resultsParPage);

export default calculatePageNumber;

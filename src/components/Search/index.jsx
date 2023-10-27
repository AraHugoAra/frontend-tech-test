import React, { useContext } from 'react';
import { TextField } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';
import debounce from './debounce';
import { SearchBarContext } from '../../context/searchBarContext';

const Search = () => {
	const { setSearchText } = useContext(SearchBarContext)

	const debounceSearchResult = debounce((text) => {
		setSearchText(text)
	}, 350)

	return (
	<TextField className="search-field" placeholder="Search ..." icon={mdiMagnify} onChange={(e) => debounceSearchResult(e)} />
)};

export default Search;

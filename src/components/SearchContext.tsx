import { createContext } from 'react';

interface SearchContextProps {
    searchValue: string,
    setSearchValue: (value: string) => void;
}

const SearchContext = createContext<SearchContextProps>({
    searchValue: '',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setSearchValue: () => {},
});

export default SearchContext;
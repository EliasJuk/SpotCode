import Api from './api';

const SearchService = {
    index: (query) => Api.get(`/seach?query=${query}`)
}

export default SearchService;
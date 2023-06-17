import { createContext, useState ,useEffect} from "react";

// creating context
const SearchContext = createContext();
// provider to wrap fucntional components 
const SearchProvider =  ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks,setFilteredBooks] = useState(null);

  const handleSubmit =  () => {
    console.log( "searchContext",searchQuery);
    useFilteredFetchBooks("products",`${searchQuery}`);
  };

  // fetching filtered books according searchQuery
const useFilteredFetchBooks = (endpoint, searchQuery) => {
  console.log("usefilteredFetchBooks called ", searchQuery);

  useEffect(() => {
    filteredFetchBooks();
  }, [searchQuery]);

  const filteredFetchBooks = async () => {
    try {
      const response = await axios.get(
        `${API_CONFIG.BASE_URL}/${endpoint}?name=${searchQuery}`
      );
      const filteredData = response.data;
      setFilteredBooks(filteredData);
    } catch (error) {
      console.log(error.message);
    }
  };
console.log("filterbooks after searching", filteredBooks);
return filteredBooks;
 
};

  return (
    //  searchQuery, setSearchQuery, handleSubmit--used in Header and filteredBooks---product.jsx
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, handleSubmit,filteredBooks }}>
      {children}     {/* as children wrapped main.jsx */}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };

import { createContext, useState } from "react";

const SearchContext = createContext();
import { useFilteredFetchBooks } from "../hooks/useFetch";

const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks,setFilteredBooks] = useState(null);
  const handleSubmit = async () => {
   const UpdatedfilteredBooks= await useFilteredFetchBooks("products",`${searchQuery}`);
     setFilteredBooks(UpdatedfilteredBooks);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, handleSubmit,filteredBooks }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };

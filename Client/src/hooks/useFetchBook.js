import { useState, useEffect } from "react";
import axios from "axios";
import { API_CONFIG } from "../config";




const useFetchBooks = (endpoint) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${API_CONFIG.BASE_URL}/${endpoint}`);
        const data = response.data;
        setBooks(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchBooks();
  }, [endpoint]);

  return books;
};

export default useFetchBooks;



/** following code when we direct use 
 *   const url = `${API_CONFIG.BASE_URL} / http://localhost:{Portno backend}/products
 */

// import { useState, useEffect } from "react";
// import axios from "axios";
// // useFetchBooks is a Custom hook which start with "use" keyword which define it as a hook or js function
// const useFetchBooks = (url) => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get(url);
//         const data = response.data;
//         setBooks(data);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };

//     fetchBooks();
//   }, [url]);

//   return books;
// };

// export default useFetchBooks;
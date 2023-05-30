import { useState, useEffect } from "react";
import axios from "axios";
import { API_CONFIG } from "../config";

/**Fetching all Items from cluster */
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

/** finding one perticular Item{book} by its id  */
const useFetchOneBookByID = (id) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        //const response = await axios.get(`http://localhost:4023/products`);
        const response = await axios.get(`${API_CONFIG.BASE_URL}/products`);
        const data = response.data;
        // Filter the data array to find the book with the matching _id
        const SingleBookData = data.find((item) => item._id === id);
        setBook(SingleBookData);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchBook();
  }, [id]);

  return book;
};

export { useFetchOneBookByID, useFetchBooks };

/** following code when we direct use
 *   const url =  "http://localhost:{Portno backend}/products"
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

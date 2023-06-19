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
    fetchBook();
  }, [id]);

  const fetchBook = async () => {
    try {
      const response = await axios.get(`${API_CONFIG.BASE_URL}/products`);
      const data = response.data;
      // Filter the data array to find the book with the matching _id
      const SingleBookData = data.find((item) => item._id === id);
      setBook(SingleBookData);
    } catch (error) {
      console.error("Error fetching book:", error);
    }
  };

  return book;
};



/** Fetching orderDetails from cluster or MongoDB database via a custom hook */
const usefetchOrderDetails = (endpoint) => {
  const [orderData, setOrderData] = useState();


  // the function fetch data from DB must called inside useEffect hook      
  useEffect(() => {
    fetchOrderDetailsHistory();
  }, [endpoint]);

  const fetchOrderDetailsHistory = async () => {
    try {
      const response = await axios.get(`${API_CONFIG.BASE_URL}/${endpoint}`);/**check Network this line is specified by metioning useFetch */
      console.log("usefetchOrderDetails hook responce",response);
      const data = response.data;
      console.log("usefetchOrderDetails hook data",data);
      setOrderData(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return orderData;
};

export {
  useFetchOneBookByID,
  useFetchBooks,
  usefetchOrderDetails,
};

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

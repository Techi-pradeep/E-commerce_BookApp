// Indian Rupee symbol html code:   --> &#8377;   {semicolon must be added at last}
// import { useEffect, useState } from "react";

// UseEffect hook reload our data once after rendering
// useState is used for storing cluster collection in Array of objects

import { Link } from "react-router-dom";

import { useContext } from "react";
import { SearchContext } from "../SearchFeature/SearchContext";

//CSS module is used for avoiding nameclashig
import BookCardStyle from "../styles/BookCard.module.css";
import styled from "styled-components";

import Loading from "../components/Loading";
// useFetchBooks is a custom hook created in hooks folder to get allbooks form DB 
import {useFetchBooks }from "../hooks/useFetch";

const Products = () => {
  
const allBooks = useFetchBooks("products");

const {filteredBooks}= useContext(SearchContext);
  

console.log("filteredBooks in product",filteredBooks);
// Targeting dynamically either filteredBooks or allBooks
  const eitherFilteredBooksOrAllBooks = filteredBooks ? filteredBooks : allBooks ;

  return (
   
      <div
        className={BookCardStyle.bookcontainer}
       
      >
        {/* bookcontainer style is creating cards using display : grid */}
        { eitherFilteredBooksOrAllBooks  && eitherFilteredBooksOrAllBooks.length === 0 ?(<Loading/>)
        :
        (eitherFilteredBooksOrAllBooks && eitherFilteredBooksOrAllBooks.map((item) => (
           
          <div className={BookCardStyle.container} key={item._id}>
            <div className={BookCardStyle.card}>
              <img src={item.image} alt="" />
              <div className={BookCardStyle.body}>
                <h5 className={BookCardStyle.title}>{item.name}</h5>
                <div className={BookCardStyle.price}>
                  <p
                    className={BookCardStyle.text}
                    style={{ color: "#35e865" }}
                  >
                    &#8377;{item.price}
                  </p>
                  <p
                    className={BookCardStyle.text}
                    style={{ color: "#d65249", textDecoration: "line-through" }}
                  >
                   &#8377;{item.original_price}
                  </p>
                </div>
                <p className={BookCardStyle.text}>Ratings: {item.rating}</p>
                <div className={BookCardStyle.button}>
                  {/* <a
                    href={`/single_product/${item._id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button type="button" className="btn btn-primary">
                      Buy Now
                    </button>
                  </a> */}

                  <Link to={`/single_product/${item._id}`} >  <button type="button" className="btn btn-primary">
                      Buy Now
                    </button></Link>
                </div>
              </div>
            
            </div>
         
          </div>
        )))}
      </div>
    
  );
};

const Wrapper = styled.section`
margin-top:4rem;
marginRight:4rem;
`;


// const Products = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get("http://localhost:4023/products");
//         console.log(response);
//         const data = response.data;

//         /** data is an object, concatenating it directly with a string will result in the string representation of the object being displayed, which is usually [Object][Object].
//          console.log("Books data fetched: " + data);
//          console.log(`Books data fetched: ${data}`);

//       // here data object is being converted to a JSON string using JSON.stringify(data). This converts the object into a string representation that can be safely concatenated with another string
//          const Data = JSON.stringify(data);
//          console.log("Books data fetched: " + Data);

// */

//         /** console.log("string" ,    --- -----Anything here is holds seperate or individual datatype---------   ) */
//         // When the console.log function is called with multiple arguments separated by commas
//         console.log(
//           "Books data  fetched before running setBooks function: ",
//           data
//         );
//         setBooks(data);
//         console.log(
//           "Books data  fetched after running setBooks function: ",
//           data
//         );
//       } catch (error) {

//         console.log(error.message);
//       }
//     };

//     fetchBooks();
//   }, []);

//   console.log(books);

//   // const response = await fetch("http://localhost:3046/products");

//   /*  Key points for explaining why we prefer Axios over Fetch:
// - Simpler and more intuitive API
// - Better browser compatibility, including support for older browsers
// - Additional features such as request/response interceptors and cancellation support.  */


export default Products;

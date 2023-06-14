//// What is difference between filter and find method
//  const finaldata = data.filter((singleItem)=>singleItem._id === id)
// const bookData = data.find((item) => item._id === id);
// =================================================================

// // // Custom hook for fetching a book by ID
// const useFetchBook33 = (id) => {
//   const [book, setBook] = useState(null);

//   useEffect(() => {
//     const fetchBook = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4023/products`);
//         const data = response.data;
//         // Filter the data array to find the book with the matching _id
//         const bookData = data.find((item) => item._id === id);
//         setBook(bookData);
//       } catch (error) {
//         console.error("Error fetching book:", error);
//       }
//     };

//     fetchBook();
//   }, [id]);

//   return book;
// };

// // const Single_product = () => {
// //   const { id } = useParams();
// //   const book = useFetchBook33(id);

// //   const [book, setBook] = useState(null);
// // setBook(book);
// //   return (
// // <SingleProductWrapper>
// //     { book ?(<ProductContainer>
// //           <ProductImage src={book.image} alt="Book Cover" />
// //           <ProductInfo>
// //             <h2>{book.name}</h2>

// //             <p>Price: {book.price}</p>
// //             <p>Description: {book.categories}</p>
// //             <p>Ratings: {book.rating}</p>

// //             <button className="btn btn-primary">ADD To CART</button>
// //           </ProductInfo>
// //         </ProductContainer>) : <Loading/>}
//              )}

// // =============================================

import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

import styled from "styled-components";
import Loading from "../components/Loading";
//  custom hook created in hooks folder
import { useFetchOneBookByID } from "../hooks/useFetch";

/** --------styntax of using the useContext hook --------------------------------
  
 import {useContext} from "react";
 import { MyContext } from './MyContext';

function MyComponent() {
  const contextValue = useContext(MyContext);
  return (
    <div>{contextValue}</div>
  );
}
 
 */

const Single_product = () => {
  const { id } = useParams();
  const book = useFetchOneBookByID(id);

  const { addToCart, setItems } = useContext(CartContext);
  // here CartContext is object and contains addToCart as key which stores a function

  // console.log(book);
  return (
    <SingleProductWrapper>
      {/* map method is used on an array 
    here ternary operator is used if book holds singleBookData than show boodData otherwise Loading page 
             condition ? (true) : (false);
     */}
      {book ? (
        <ProductContainer>
          <ProductImage src={book.image} alt="Book Cover" />
          <ProductInfo>
            <h2>{book.name}</h2>
            <p>Price: {book.price}</p>
            <p>Description: {book.categories}</p>
            <p>Ratings: {book.rating}</p>

            {/*----------using a tag- will refresh the page and we not get add to cart bookData
             <a href="/cart">
              <button
                className="btn btn-primary AddCartbtn"
                onClick={() => addToCart(book)}
              >
                ADD TO CART
              </button>
            </a> */}
            <Link to="/cart">
              <button
                className="btn btn-primary AddCartbtn"
                onClick={() => addToCart(book)}
              >
                ADD TO CART
              </button>
            </Link>
          </ProductInfo>
        </ProductContainer>
      ) : (
        <Loading />
      )}
    </SingleProductWrapper>
  );
};

const SingleProductWrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #081c29 !important;
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductImage = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  margin-right: 4rem;
  padding: 2.5rem; /**putting book image inside the box */

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #748993;
  border-radius: 1.5rem;
  padding: 1rem;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #f7e33f;
  }

  p {
    margin-bottom: 0.5rem;
    color: #fff;
  }
`;

export default Single_product;

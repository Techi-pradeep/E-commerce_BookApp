// //   useEffect(() => {

// //     const fetchBooks = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:3046/products");
// //         const data = response.data;
// //         console.log("Books data fetched: " + data);
// //         const finaldata = data.filter((singleItem)=>singleItem._id === id)
// //         console.log(`Books data fetched: ${data}`);
// //         setBook(finaldata);

// //   return (
// //     <>
// //       <h1>Single Product</h1>
// //       {book && book.map((singlebook)=>{
// //         return (
// //           <div style={{color:"white"}} key={singlebook._id} >
// //             <h2>{singlebook.image}</h2>
// //             <p>{singlebook.price}</p>
// //           </div>
// //         )
// //       })}

// // import { useParams } from "react-router-dom";
// // import { useState, useEffect } from "react";
// // import axios from "axios";

// // import styled from "styled-components";
// // import Loading from "../components/Loading";

// // // Custom hook for fetching a book by ID
// // const useFetchBook = (id) => {
// //   const [book, setBook] = useState(null);

// //   useEffect(() => {
// //     const fetchBook = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:4023/products`);
// //         const data = response.data;
// //         // Filter the data array to find the book with the matching _id
// //         const bookData = data.find((item) => item._id === id);
// //         setBook(bookData);
// //       } catch (error) {
// //         console.error("Error fetching book:", error);
// //       }
// //     };

// //     fetchBook();
// //   }, [id]);

// //   return book;
// // };

// // const Single_product = () => {
// //   const { id } = useParams();
// //   const book = useFetchBook(id);

// //   const [Book, setBook] = useState(null);
// // setBook(Book);
// //   return (
// // <SingleProductWrapper>
// //     { Book ?(<ProductContainer>
// //           <ProductImage src={book.image} alt="Book Cover" />
// //           <ProductInfo>
// //             <h2>{book.name}</h2>

// //             <p>Price: {book.price}</p>
// //             <p>Description: {book.categories}</p>
// //             <p>Ratings: {book.rating}</p>

// //             <button className="btn btn-primary">ADD To CART</button>
// //           </ProductInfo>
// //         </ProductContainer>) : <Loading/>}

// // {/* // using conditional operariore above for loading
// //       {book && (
// //         <ProductContainer>
// //           <ProductImage src={book.image} alt="Book Cover" />
// //           <ProductInfo>
// //             <h2>{book.name}</h2>

// //             <p>Price: {book.price}</p>
// //             <p>Description: {book.categories}</p>
// //             <p>Ratings: {book.rating}</p>

// //             <button className="btn btn-primary">ADD To CART</button>
// //           </ProductInfo>
// //         </ProductContainer>
// //       )} */}

// //     </SingleProductWrapper>
// //   );
// // };

// // const SingleProductWrapper = styled.section`
// //   height: 100vh;
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   justify-content: center;
// //   background-color: #081C29 !important;`;

// // const ProductContainer = styled.div`
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   margin-top: 2rem;
// // `;

// // const ProductImage = styled.img`
// //   width: 300px;
// //   height: 400px;
// //   object-fit: cover;
// //   margin-right: 4rem;
// // `;

// // const ProductInfo = styled.div`
// //   display: flex;
// //   flex-direction: column;

// //   h2 {
// //     font-size: 2rem;
// //     margin-bottom: 1rem;
// //     color: #F7E33F;
// //   }

// //   p {
// //     margin-bottom: 0.5rem;
// //     color: #A7B2B7;
// //   }
// // `;

// // export default Single_product;

// // =============================================

// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import styled from "styled-components";
// import Loading from "../components/Loading";

// // Custom hook for fetching a book by ID
// const useFetchBook = (id) => {
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

// const Single_product = () => {
//   const { id } = useParams();
//   const book = useFetchBook(id);

//   return (
//     <SingleProductWrapper>
//       {book ? (
//         <ProductContainer>
//           <ProductImage src={book.image} alt="Book Cover" />
//           <ProductInfo>
//             <h2>{book.name}</h2>
//             <p>Price: {book.price}</p>
//             <p>Description: {book.categories}</p>
//             <p>Ratings: {book.rating}</p>
//             <button className="btn btn-primary">ADD To CART</button>
//           </ProductInfo>
//         </ProductContainer>
//       ) : (
//         <Loading />
//       )}
//     </SingleProductWrapper>
//   );
// };

// const SingleProductWrapper = styled.section` height: 100vh;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// background-color: #081C29 !important;
// `;

// const ProductContainer = styled.div`
// display: flex;
// align-items: center;
// justify-content: center;
// margin-top: 2rem;

// @media (max-width: 768px) {
//   display:flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// }
// `;

// const ProductImage = styled.img`
// width: 300px;
// height: 400px;
// object-fit: cover;
// margin-right: 4rem;
// padding:1.5rem
// `;

// const ProductInfo = styled.div`
// display: flex;
// flex-direction: column;

// h2 {
//   font-size: 2rem;
//   margin-bottom: 1rem;
//   color: #f7e33f;
// }

// p {
//   margin-bottom: 0.5rem;
//   color: #a7b2b7;
// }

// `;

// export default Single_product;

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Loading from "../components/Loading";

// Custom hook for fetching a book by ID
const useFetchBook = (id) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:4023/products`);
        const data = response.data;
        // Filter the data array to find the book with the matching _id
        const bookData = data.find((item) => item._id === id);
        setBook(bookData);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchBook();
  }, [id]);

  return book;
};

const Single_product = () => {
  const { id } = useParams();
  const book = useFetchBook(id);

  return (
    <SingleProductWrapper>
      {book ? (
        <ProductContainer>
          <ProductImage src={book.image} alt="Book Cover" />
          <ProductInfo>
            <h2>{book.name}</h2>
            <p>Price: {book.price}</p>
            <p>Description: {book.categories}</p>
            <p>Ratings: {book.rating}</p>
            <button className="btn btn-primary">ADD To CART</button>
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

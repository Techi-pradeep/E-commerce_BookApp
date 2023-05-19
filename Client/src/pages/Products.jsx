import { useEffect, useState } from "react";

// UseEffect hook reload our data once after rendering
// useState is used for storing cluster collection in Array of objects

//CSS module is used for avoiding nameclashig
import BookCardStyle from "../styles/BookCard.module.css";

import axios from "axios";

const Products = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3046/products");
        const data = response.data;
        console.log("Books data fetched: " + data);
        console.log(`Books data fetched: ${data}`);
        setBooks(data);

        console.log("Books data  fetched after updating varaible: ", data);
        
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  console.log(books);
  //         const response = await fetch("http://localhost:3046/products");

/*  Key points for explaining why we prefer Axios over Fetch:
- Simpler and more intuitive API
- Better browser compatibility, including support for older browsers
- Additional features such as request/response interceptors and cancellation support.  */
  


  

  return (
    
   <> 
     <div className={BookCardStyle.bookcontainer} style={{ marginLeft: "4rem" }}>
       {/* bookcontainer style is creating cards using display : grid */}
      {books.map((item) => (
    <div className={BookCardStyle.container} key={item._id}>
      <div className={BookCardStyle.card}>
        <img src={item.image} alt="" />
        <div className={BookCardStyle.body}>
          <h5 className={BookCardStyle.title}>{item.name}</h5>
          <div className={BookCardStyle.price}>
            <p className={BookCardStyle.text} style={{ color: "#35e865" }}>
              {item.price}
            </p>
            <p
              className={BookCardStyle.text}
              style={{ color: "#d65249", textDecoration: "line-through" }}
            >
              {item.original_price}
            </p>
          </div>
          <p className={BookCardStyle.text}>Ratings: {item.rating}</p>
          <div className={BookCardStyle.button}>
            <a href={`/single_product/${item._id}`} target="_blank" rel="noreferrer">
              <button type="button" className="btn btn-primary">
                Buy Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  ))}
    </div>
   </>
  );
};

export default Products;

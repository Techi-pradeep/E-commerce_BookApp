// import React from 'react';
import Carousel from "react-bootstrap/Carousel"; /* npm install react-bootstrap  */

/*Creating autosliding carousel -------using react-bootstrap */
const MyCarousel = () => {
  return (
    <div >
      <span >
        {" "}
        <img style={{ marginTop: "3.5rem" }}
          className="img-fluid"
          src="https://www.bookswagon.com/images/promotionimages/web/1_alltimefavourite.jpg?v=1.6"
          alt="promotion image"
        />
      </span>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.bookswagon.com/images/bannerimages/81_inr.jpg?v=1.8"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First Slide</h3>
        <p>Slide description</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.bookswagon.com/images/bannerimages/79_inr.jpg?v=1.6"
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3>Second Slide</h3>
        <p>Slide description</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.bookswagon.com/images/bannerimages/84_inr.jpg?v=1.6"
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h3>Third slide</h3>
        <p>Slide description</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;

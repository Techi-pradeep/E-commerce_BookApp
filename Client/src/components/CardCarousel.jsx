

import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";  /* for using bootstap class name --only put inside main.jsx*/
import Carousel from "react-bootstrap/Carousel";  /* importing a bootstap component */
import styled from "styled-components";

const Author = styled.section`
background-color: black;
margin-top:2px;
width:100%;

.circle{
    background-color: #20529F;
    padding:.3rem;
}
.circle-img {
  width: 150px; /* Adjust the size of the circle images */
  height: 150px;
  object-fit: cover;
  border-radius: 50%; /* Makes the images circular */

}

.cardArea{
    background-color: black;
}
.card{
    margin:2rem;
}
.card-body{
    background-color:#FFFFFF;
}
.card-title{
   
    color:blue;
}

`;

const CardCarousel = () => {
  return (
    <Author className="container my-3rem">
      <Carousel>
        <Carousel.Item>
          <div className="row">
            <div className="cardArea col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <div className="circle">
                    <img
                      src="https://th.bing.com/th/id/OIP.DuRcNUGMD7qS6KZBBqHk_wHaFj?w=256&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt=""
                      className="circle-img"
                    />
                  </div>
                  <h5 className="card-title">John Smith</h5>
                  <p className="card-text">
                  Acclaimed novelist exploring the depths of human emotion through gripping narratives.
                  </p>
                </div>
              </div>
            </div>
            {/* Add other cards here */}
            <div className="cardArea col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <div className="circle">
                    <img
                      src="https://th.bing.com/th/id/OIP.Dy5kWGtFicBkiTFvoVwnAQHaFs?w=214&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt=""
                      className="circle-img"
                    />
                  </div>
                  <h5 className="card-title">David Anderson</h5>
                  <p className="card-text">
                  Master storyteller weaving tales of adventure and mystery with poetic elegance.
                  </p>
                </div>
              </div>
            </div>
            <div className="cardArea col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <div className="circle">
                    <img
                      src="https://th.bing.com/th/id/OIP.J_xVrquID92_1vZT_-GIjQAAAA?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt=""
                      className="circle-img"
                    />
                  </div>
                  <h5 className="card-title">Emily Adams</h5>
                  <p className="card-text">
                  Gifted wordsmith capturing the essence of love and heartbreak in poignant prose.
                  </p>
                </div>
              </div>
            </div>
            <div className="cardArea col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <div className="circle">
                    <img
                      src="https://th.bing.com/th/id/OIP.-V4iv6ojKTFqEDmP4-tDOQHaHb?w=184&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt=""
                      className="circle-img"
                    />
                  </div>
                  <h5 className="card-title">Michael Collins</h5>
                  <p className="card-text">
                  Provocative writer challenging societal norms with thought-provoking literary works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* ============================================================================= */}
        <Carousel.Item>
          <div className="row">
               {/* Add remaining cards here */}
            <div className="cardArea col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <div className="circle">
                    <img
                      src="https://th.bing.com/th/id/OIP.9UhV4vJWXXmkyYtDujP13QAAAA?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt=""
                      className="circle-img"
                    />
                  </div>
                  <h5 className="card-title">Ava Morgan</h5>
                  <p className="card-text">
                  Captivating storyteller, exploring the complexities of relationships with remarkable insight.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <div className="circle">
                    <img
                      src="https://th.bing.com/th/id/OIP.dPhf7cpeX0NE-J82M6iDJQHaEn?w=295&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt=""
                      className="circle-img"
                    />
                  </div>
                  <h5 className="card-title">Sophia Campbell</h5>
                  <p className="card-text">
                  Visionary storyteller transporting readers to magical realms with enchanting tales.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <div className="circle">
                    <img
                      src="https://th.bing.com/th/id/OIP.wywbnL9rkGWv5d03t9iM9AHaFV?w=251&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt=""
                      className="circle-img"
                    />
                  </div>
                  <h5 className="card-title">Sophia Campbell</h5>
                  <p className="card-text">
                  Visionary storyteller transporting readers to magical realms with enchanting tales.
                  </p>
                </div>
              </div>
            </div>
            <div className="cardArea col-lg-3 col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <div className="circle">
                    <img
                      src="https://th.bing.com/th/id/OIP.EVdx55LQUHvKDakE3Fx9rwHaD3?w=328&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                      alt=""
                      className="circle-img"
                    />
                  </div>
                  <h5 className="card-title">Benjamin Thompson</h5>
                  <p className="card-text">
                  Gifted wordsmith capturing the essence of love and heartbreak in poignant prose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </Author>
  );
};

export default CardCarousel;

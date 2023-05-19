

import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { MdLocalLibrary } from "react-icons/Md";

const Hero = styled.section`
  background-color: #083855;
  padding: 3rem 1rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  width: 100%;
`;

const HeroContent = styled.div`
  color: #fff;
`;

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 2rem;
`;
const HeroPart = ({Store}) => {
// const HeroPart = (props) => {
  return (
    <>
  
      <Hero>
        <Container>
          <Row>
            <Col md={6}>
              <HeroContent>
                <MdLocalLibrary size={48} color="#fff" />
                <h1 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                  Welcome to {Store}
                  {/* Welcome to {props.Store} */}
                </h1>
                <p>
                  <span style={{ color: "#F3A930", fontSize: "2rem" }}>
                    BookVault
                  </span>{" "}
                  is a dynamic and innovative online bookstore that caters to
                  the needs of book enthusiasts worldwide. With an extensive
                  collection of literary masterpieces, ranging from classic
                  novels to contemporary bestsellers, BookVault provides a
                  delightful reading experience for all.
                </p>
                <p>
                  Our{" "}
                  <span style={{ color: "#8BDBE5", fontSize: "1.3rem" }}>
                    user-friendly interface allows customers to effortlessly
                    explore genres, discover new authors, and conveniently
                    purchase their favorite books.
                  </span>{" "}
                  Additionally, BookVault offers personalized recommendations
                  based on individual preferences, ensuring that every customer
                  finds their next captivating read. With secure payment options
                  and swift worldwide shipping, BookVault aims to make the joy
                  of reading accessible to everyone, fostering a vibrant
                  community of literary lovers.
                </p>
                <NavLink to="/products">
                  <button className="btn btn-primary">Learn More</button>
                </NavLink>
              </HeroContent>
            </Col>
            <Col md={6}>
              <HeroImage
                src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="hero image"
              />
            </Col>
          </Row>
        </Container>
      </Hero>
    </>
  );
};

export default HeroPart;

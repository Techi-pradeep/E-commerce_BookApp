
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #3E2872;
  color: #fff;
  padding: 2rem;
  margin-bottom:0px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const FooterSection = styled.div`
  margin-bottom: 1.5rem;
`;

const FooterSectionTitle = styled.h6`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  margin-bottom: 0.5rem;
  line-height: 1.5;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterIcon = styled.a`
  display: inline-block;
  color: #fff;
  ${'' /* background-color: ${(props) => props.bgColor}; */}
  border-radius: 50%;
  padding: 0.5rem;
  margin-right: 0.5rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color:#ffffff ;
    color:blue;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterSection>
            <FooterSectionTitle>BookVault</FooterSectionTitle>
            <FooterText>
              BookVault: a dynamic website offering a variety of books from around the world. Explore the world of books, touch them, feel them, and grow yourself.
            </FooterText>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Products</FooterSectionTitle>
            <FooterLink href="#">History</FooterLink>
            <FooterLink href="#">Biography</FooterLink>
            <FooterLink href="#">Science</FooterLink>
            <FooterLink href="#">Novel</FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Contact</FooterSectionTitle>
            <FooterText>
              <i className="fas fa-home mr-2"></i> Rajasthan, 333022, INDIA
            </FooterText>
            <FooterText>
              <i className="fas fa-envelope mr-2"></i> khehar.pradeep@gmail.com
            </FooterText>
            <FooterText>
              <i className="fas fa-phone mr-2"></i> +91 8529259909
            </FooterText>
            <FooterText>
              <i className="fas fa-print mr-2"></i> + 01 234 567 89
            </FooterText>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Follow us</FooterSectionTitle>
            <FooterIcon
              href="#!"
              bgColor="#3b5998"
              hoverColor="#2d4373"
              className="btn-floating"
            >
              <i className="fab fa-facebook-f"></i>
            </FooterIcon>
            <FooterIcon
              href="#!"
              bgColor="#55acee"
              hoverColor="#2795e9"
              className="btn-floating"
            >
              <i className="fab fa-twitter"></i>
            </FooterIcon>
            <FooterIcon
              href="#!"
              bgColor="#dd4b39"
              hoverColor="#c23328"
              className="btn-floating"
            >
              <i className="fab fa-google"></i>
            </FooterIcon>
            <FooterIcon
              href="#!"
              bgColor="#ac2bac"
              hoverColor="#932b9a"
              className="btn-floating"
            >
              <i className="fab fa-instagram"></i>
            </FooterIcon>
            <FooterIcon
              href="#!"
              bgColor="#0082ca"
              hoverColor="#00679f"
              className="btn-floating"
            >
              <i className="fab fa-linkedin-in"></i>
            </FooterIcon>
            <FooterIcon
              href="#!"
              bgColor="#333333"
              hoverColor="#000000"
              className="btn-floating"
            >
              <i className="fab fa-github"></i>
            </FooterIcon>
          </FooterSection>
        </FooterContent>
      </div>
      <div
        className="text-center py-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} BookStore. All rights reserved. |{" "}
        <a href="" className="text-white">
          BookVault
        </a>
      </div>
    </FooterContainer>
  );
};

export default Footer;


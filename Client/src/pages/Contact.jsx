
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const ContactSection = styled.section`
  background-color: #083855;
  padding: 4rem 2rem;
  color: #fff;
  min-height:100vh;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Contact = () => {
  return (
    <ContactSection>
      <Container>
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>
        <Row>
          <Col md={9} className="mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
              <Row>
                <Col md={6}>
                  <div className="mb-4">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Your name"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-4">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Your email"
                    />
                  </div>
                </Col>
              </Row>
              <div className="mb-4">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  name="message"
                  rows="2"
                  className="form-control"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="text-center text-md-left">
                <button className="btn btn-primary " type="submit">
                  Send
                </button>
              </div>
            </form>
            <div className="status"></div>
          </Col>
          <Col md={3} className="text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>San Francisco, CA 94126, USA</p>
              </li>
              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
              </li>
              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@mdbootstrap.com</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </ContactSection>
  );
};

export default Contact;







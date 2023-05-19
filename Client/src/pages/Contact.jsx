// // import React from 'react'

// const Contact = () => {
//   return (
    
//     <section class="mb-4 text-white mx-4">
    
//         {/* <!--Section heading--> */}
//         <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
//         {/* <!--Section description--> */}
//         <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
//             a matter of hours to help you.</p>
    
//         <div class="row">
    
//             {/* <!--Grid column--> */}
//             <div class="col-md-9 mb-md-0 mb-5">
//                 <form id="contact-form" name="contact-form" action="mail.php" method="POST">
    
//                     {/* <!--Grid row--> */}
//                     <div class="row">
    
//                         {/* <!--Grid column--> */}
//                         <div class="col-md-6">
//                             <div class="md-form mb-0">
//                                 <input type="text" id="name" name="name" class="form-control"/>
//                                 <label for="name" class="">Your name</label>
//                             </div>
//                         </div>
//                         {/* <!--Grid column--> */}
    
//                         {/* <!--Grid column--> */}
//                         <div class="col-md-6">
//                             <div class="md-form mb-0">
//                                 <input type="text" id="email" name="email" class="form-control"/>
//                                 <label for="email" class="">Your email</label>
//                             </div>
//                         </div>
//                         {/* <!--Grid column--> */}
    
//                     </div>
//                     {/* <!--Grid row--> */}
    
//                     {/* <!--Grid row--> */}
//                     <div class="row">
//                         <div class="col-md-12">
//                             <div class="md-form mb-0">
//                                 <input type="text" id="subject" name="subject" class="form-control"/>
//                                 <label for="subject" class="">Subject</label>
//                             </div>
//                         </div>
//                     </div>
//                     {/* <!--Grid row--> */}
    
//                     {/* <!--Grid row--> */}
//                     <div class="row">
    
//                         {/* <!--Grid column--> */}
//                         <div class="col-md-12">
    
//                             <div class="md-form">
//                                 <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
//                                 <label for="message">Your message</label>
//                             </div>
    
//                         </div>
//                     </div>
//                     {/* <!--Grid row--> */}
    
//                 </form>
    
//                 <div class="text-center text-md-left">
//                     <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
//                 </div>
//                 <div class="status"></div>
//             </div>
//             {/* <!--Grid column--> */}
    
//             {/* <!--Grid column--> */}
//             <div class="col-md-3 text-center">
//                 <ul class="list-unstyled mb-0">
//                     <li><i class="fas fa-map-marker-alt fa-2x"></i>
//                         <p>San Francisco, CA 94126, USA</p>
//                     </li>
    
//                     <li><i class="fas fa-phone mt-4 fa-2x"></i>
//                         <p>+ 01 234 567 89</p>
//                     </li>
    
//                     <li><i class="fas fa-envelope mt-4 fa-2x"></i>
//                         <p>contact@mdbootstrap.com</p>
//                     </li>
//                 </ul>
//             </div>
//             {/* <!--Grid column--> */}
    
//         </div>
    
//     </section>
    
//   )
// }

// export default Contact



import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const ContactSection = styled.section`
  background-color: #083855;
  padding: 4rem 2rem;
  color: #fff;
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
                <button className="btn btn-primary" type="submit">
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

import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer>
        <Container className="footerBottomCont">
          <Row className="">
            <Col>
              <div className="copyright text-center"></div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-black text-white py-5 mt-3">
      {" "}
      <Container>
        <Row>
          {" "}
          <Col md={12} lg={4} className="my-3">
            <h3 className="text-center">RD Shop</h3>
            <p className="text-center">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium vero deleniti porro facere cumque asperiores ea minima
              nemo nobis recusandae?{" "}
            </p>
          </Col>
          <Col md={12} lg={4} className="my-3">
            <h3 className="text-center">Quick Links</h3>

            <ul className="text-center m-0 p-0" style={{ listStyle: "none" }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">Shop</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
            </ul>
          </Col>
          <Col md={12} lg={4} className="my-3">
            <h3 className="text-center">Description</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              quaerat optio quisquam deleniti sit ipsum tempore reiciendis rerum
              quod praesentium.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

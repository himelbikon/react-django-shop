import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Feature = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4}>
          <div class="shadow p-3">
            <div class="my-3">
              <i class="fas fa-truck fa-4x"></i>
            </div>
            <h3>Free Shipping Method</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
              a?
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div class="shadow p-3">
            <div class="my-3">
              <i class="fas fa-lock fa-4x"></i>
            </div>
            <h3>Secure Payment System</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
              a?
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div class="shadow p-3">
            <div class="my-3">
              <i class="fas fa-bolt fa-4x"></i>
            </div>
            <h3>Fast Delivery</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
              a?
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Feature;

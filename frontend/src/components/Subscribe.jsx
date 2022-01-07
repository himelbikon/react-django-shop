import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const Subscribe = () => {
  return (
    <Container className="bg-success text-white py-5">
      <Row className="d-flex justify-content-center py-5">
        <Col sm={10} md={5}>
          <h2>Get Our Latest Offers News</h2>
          <p>Subscribe news latter</p>
        </Col>
        <Col sm={10} md={5}>
          <InputGroup className="mb-3 bg-white">
            <FormControl
              className="px-3"
              placeholder="Enter your email address"
              aria-label="Enter your email address"
              aria-describedby="basic-addon2"
            />
            <Button variant="dark" id="button-addon2">
              Subscribe
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Subscribe;

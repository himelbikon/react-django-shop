import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Alert,
  Form,
} from "react-bootstrap";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [danger_alert, setDangerAlert] = useState(false);

  const subscribe_handler = async (e) => {
    e.preventDefault();

    const data = { email: email };

    setDangerAlert(false);

    if (!email.includes(".")) {
      setDangerAlert(true);
    } else {
      console.log("data:", data);
      await axios
        .post(`/api/user/subscribe/`, data)
        .then((response) => {
          console.log(response.data);
          setEmail("");
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
          }
          console.log("Something is wrong!");
        });
    }
  };

  return (
    <Container className="bg-success text-white py-5">
      <Row className="d-flex justify-content-center py-5">
        <Col sm={10} md={5}>
          <h2>Get Our Latest Offers News</h2>
          <p>Subscribe news latter</p>
        </Col>
        <Col sm={10} md={5}>
          <Form onSubmit={subscribe_handler}>
            <InputGroup>
              <FormControl
                type="email"
                value={email}
                placeholder="Enter your email address"
                aria-label="Enter your email address"
                aria-describedby="basic-addon2"
                className="bg-white px-3"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" variant="dark" id="button-addon2">
                Subscribe
              </Button>
            </InputGroup>
          </Form>

          {danger_alert ? (
            <Alert className="my-2" variant="danger">
              Enter an valid email, please!
            </Alert>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default Subscribe;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const Showcase = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const get_products = async () => {
    await axios
      .get("/api/shop/showcase/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(JSON.stringify(error.response.data));
        }
        console.log(error);
      });
  };

  useEffect(() => {
    get_products();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Container className="bg-light p-5 my-2" key={product.id}>
          <Row>
            <Col sm={12} md={12} lg={6}>
              <div>
                {!product.image ? (
                  <Image
                    src="https://via.placeholder.com/500x500"
                    fluid
                    className="w-100"
                  />
                ) : (
                  <Image fluid className="w-100" src={product.image} />
                )}
              </div>
            </Col>
            <Col>
              <div>
                <h3>{product.name}</h3>
                <p>{product.details.slice(0, 400)}</p>
                <Button
                  variant="dark"
                  onClick={() => navigate(`/product/${5}/`)}
                >
                  Show More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  );
};

export default Showcase;

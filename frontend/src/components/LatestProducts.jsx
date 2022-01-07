import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "./Title";

import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "./ProductCard";

const LatestProducts = () => {
  const [products, setProducts] = useState([]);

  const get_products = async () => {
    await axios
      .get(`/api/shop/latest-products/${8}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        }
        console.log(error);
      });
  };

  useEffect(() => {
    document.title = "Home";

    get_products();
  }, []);

  return (
    <Container>
      <Title title="Latest Products" />

      <Row>
        {products.map((product) => (
          <Col lg={3} md={6} sm={12}>
            <ProductCard product={product} key={product.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LatestProducts;

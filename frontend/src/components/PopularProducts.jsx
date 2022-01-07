import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "./Title";

import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "./ProductCard";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  const get_products = async () => {
    await axios
      .get(`/api/shop/popular-products/${8}`)
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
    get_products();
  }, []);

  return (
    <Container>
      <Title title="Popular Products" />

      <Row>
        {products.map((product) => (
          <Col lg={3} md={6} sm={12} key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularProducts;

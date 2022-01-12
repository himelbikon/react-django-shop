import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

import { addToCart } from "../redux/actions/cartActions";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const cart = useSelector((state) => state.cart);

  const params = useParams();
  const dispatch = useDispatch();

  const getProduct = async () => {
    await axios
      .get(`/api/shop/product/${params.id}/`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        }
        console.log("Something is wrong!");
      });
  };

  useEffect(() => {
    getProduct();
    return () => {
      // cleanup
    };
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col md={6} sm={12}>
            {product.image ? (
              <Image src={product.image} fluid className="w-100" />
            ) : (
              <Image
                src="https://via.placeholder.com/500x500"
                fluid
                className="w-100"
              />
            )}
          </Col>
          <Col md={6} sm={12}>
            <h3 className="mb-3">
              {product.name} {cart.length}{" "}
            </h3>

            <p className="my-4">Price: {product.price}</p>

            <p className="my-4">Views: {product.views}</p>

            <div className="my-4">
              <Button onClick={() => dispatch(addToCart(product))}>
                Add To Cart
              </Button>
            </div>

            {product.details ? (
              <p className="my-4">{product.details.slice(0, 400)}...</p>
            ) : null}
          </Col>
        </Row>

        <div className="my-5">
          <h4 className="text-center">Product Details</h4>
          {product.details ? <p className="my-3">{product.details}</p> : null}
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;

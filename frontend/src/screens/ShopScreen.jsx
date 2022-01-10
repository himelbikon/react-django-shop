import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { setShopProducts } from "../redux/actions/shopActions";

const ShopScreen = () => {
  const [query] = useSearchParams();

  const { products, page } = useSelector((state) => state.shopProducts);
  const dispatch = useDispatch();

  const getProducts = async (more = false) => {
    await axios
      .get(`/api/shop/latest-products/9?page=${page}`)
      .then((response) => {
        if (!more) {
          dispatch(setShopProducts(response.data));
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        }
        console.log("Something is wrong");
      });
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <h1>
          products: {products.length}, page: {page}
        </h1>
        {/* {JSON.stringify(products)} */}
        <Row>
          <Col md={9} sm={12}>
            <Row>
              {products.map((product) => (
                <Col key={product.id} lg={4} md={6} sm={12}>
                  <ProductCard product={product} />
                </Col>
              ))}{" "}
              <div className="text-center my-3">
                <Button variant="dark" onClick={() => {}}>
                  Load More
                </Button>
              </div>
            </Row>
          </Col>

          <Col md={3} sm={12}>
            <ListGroup className="my-2">
              <h3 className="text-center border py-2">Categories</h3>
              <ListGroup.Item>
                <Link to={`/shop`}>Latest</Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to={`/shop?category=popular`}>Popular</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopScreen;

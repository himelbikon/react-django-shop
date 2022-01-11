import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { setShopProducts, addShopProducts } from "../redux/actions/shopActions";

const ShopScreen = () => {
  // const linkStyle = {
  //   textDecoration: "none",
  //   color: "inherit",
  // };
  const [query] = useSearchParams();

  const { products, page } = useSelector((state) => state.shopProducts);
  const dispatch = useDispatch();

  const getProducts = async (more = false) => {
    let new_page = 1;
    if (more) {
      new_page = page + 1;
    }

    const numberOfProduct = 9;
    let url = `/api/shop/latest-products/${numberOfProduct}?page=${new_page}`;

    if (query.get("category") === "popular") {
      url = `/api/shop/popular-products/${numberOfProduct}?page=${new_page}`;
    } else if (query.get("category")) {
      let category = query.get("category");
      url = `/api/shop/latest-products/${numberOfProduct}?page=${new_page}&category=${category}`;
    }

    await axios
      .get(url)
      .then((response) => {
        if (!more) {
          dispatch(setShopProducts(response.data, 1));
          // dispatch(resetPage(1));
        } else if (more) {
          dispatch(addShopProducts(response.data, new_page));
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
    return () => {
      // console.log("destroying useEffect");
      // dispatch(resetPage(1));
    };
  }, [query]);

  return (
    <div>
      <Container>
        {/* <h1>
          products: {products.length}, page: {page}
        </h1> */}
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
                <Button
                  variant="dark"
                  onClick={() => {
                    getProducts(true);
                  }}
                >
                  Load More
                </Button>
              </div>
            </Row>
          </Col>

          <Col md={3} sm={12}>
            <ListGroup className="my-2">
              <h3 className="text-center border py-2">Categories</h3>
              <ListGroup.Item>
                <Link to={`/shop`} className="link">
                  Latest
                </Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to={`/shop?category=popular`} className="link">
                  Popular
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopScreen;

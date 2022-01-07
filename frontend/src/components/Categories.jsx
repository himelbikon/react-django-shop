import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Image, Row, Col, Container } from "react-bootstrap";
import Title from "./Title";

export default class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };

    this.get_categories = async () => {
      await axios
        .get("/api/shop/categories/")
        .then((response) => {
          this.setState({ categories: response.data });
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
          }
          console.log(error);
        });
    };
  }

  componentDidMount() {
    this.get_categories();
  }

  render() {
    return (
      <Container>
        <div>
          <Title title="Categories" />
        </div>

        <Row className="d-flex justify-content-center">
          {this.state.categories.map((category) => (
            <Col lg={2} md={4} sm={6} key={category.id}>
              <Link
                to={`shop/?category=${category.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="shadow">
                  <div>
                    <Image fluid src={category.image} className="w-100" />
                  </div>

                  <p className="text-center">{category.name}</p>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

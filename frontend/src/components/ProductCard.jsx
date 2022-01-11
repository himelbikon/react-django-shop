import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="shadow my-2">
        <div>
          <Link className="link" to={`/product/${product.id}/`}>
            {product.image ? (
              <Image src={product.image} fluid className="w-100" />
            ) : (
              <Image
                src="https://via.placeholder.com/500x500"
                fluid
                className="w-100"
              />
            )}
          </Link>
        </div>

        <div className="p-3">
          <h6>
            {" "}
            <Link to={`/product/${product.id}/`} className="link">
              {product.name}
            </Link>{" "}
          </h6>
          <p>Price: {product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

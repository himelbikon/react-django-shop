import React from "react";
import { Image } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="shadow my-2">
        <div>
          {product.image ? (
            <Image src={product.image} fluid className="w-100" />
          ) : (
            <Image
              src="https://via.placeholder.com/500x500"
              fluid
              className="w-100"
            />
          )}
        </div>

        <div className="p-3">
          <h6>{product.name}</h6>
          <p>Price: {product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

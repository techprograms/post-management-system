import React from "react";

function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.imageUrl} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>Price: ${props.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;

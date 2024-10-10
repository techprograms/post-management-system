import React from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
      description: "A high-performance laptop for work and gaming",
      imageUrl: "https://example.com/laptop.jpg",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 599.99,
      description: "A smartphone with an excellent camera and battery life",
      imageUrl: "https://example.com/smartphone.jpg",
    },
    {
      id: 3,
      name: "Headphones",
      price: 199.99,
      description: "Noise-canceling headphones with superior sound quality",
      imageUrl: "https://example.com/headphones.jpg",
    },
  ];

  return (
    <div>
      <h1>Product Listing</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

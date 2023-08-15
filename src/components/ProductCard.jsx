import React from 'react';

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img src="{props.image}" alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <span>${props.price}</span>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

import React from "react";
import Slider from "./Slider";
import products from "./products";
import ProductCard from "./ProductCard";
import Container from "@mui/material/Container";

const Body = () => {
  return (
    <React.Fragment>
      <Slider />
      <Container maxWidth="xl">
        {products.map((product) => (
            
          <ProductCard key={product.id} product={product} />
          
        ))}
        
      </Container>
    </React.Fragment>
  );
};

export default Body;

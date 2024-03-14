import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import products from "../asset/Product.json";
import { Product } from "./Product";
import './Home.css';
import { useContext } from "react";
import { cartContext } from "../App";


export const Home = () => {
  const {cart,setCart}=useContext(cartContext);
  const [product] = useState(products.products);
  return (
    <Container className="product-container">
      {product.map((product) => (
        <Product key={product.id} product={product} cart={cart} setCart={setCart}/>
       
      ))}
    </Container>
  );
};

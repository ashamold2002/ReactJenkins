import React, { useEffect, useState } from 'react';
import './Viewcart.css';
import { Card, CardImg, CardGroup,Button, Container } from 'react-bootstrap';
import { useContext } from 'react';
import { cartContext } from '../App';


export const Viewcart = () => {
  const {cart,setCart}=useContext(cartContext);
  const[total,setTotal]=useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.price),0));

  },[cart]);
  
  return (
    <>
    <h1 className='mt-2'>Cart Products</h1>
    <Container className='cart-container mt-4'>
    {cart.map((product)=>(
      
      <Card style={{ width: '18rem' }} key={product.id}>
      <Card.Img className='card-img' variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    
    ))
      
    }
    </Container>
    
    <h1>Total Amount :{total} </h1>
    </>
  )
}

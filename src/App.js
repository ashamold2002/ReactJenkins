import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Viewcart } from './Components/Viewcart';
import Container from "react-bootstrap/Container";
import { useState,createContext } from 'react';

export const cartContext=createContext();

function App() {
  const [cart,setCart]=useState([]);
  return (
    <>
    <cartContext.Provider value={{cart,setCart}}>
    <BrowserRouter>
    <Header cart={cart}/>
    <Container fluid className='container'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Cart" element={<Viewcart />}/>
        
      </Routes>
       
    </Container>
    </BrowserRouter>
    </cartContext.Provider>
    </>
  );
}

export default App;


import { Col, Container, Row } from 'react-bootstrap'
import React, { useEffect } from "react";
import CardC from "../components/CardC"
import { products } from "../helpers/products";
import { useState } from 'react';
import CarrouselC from '../components/CarrouselC';
import FooterC from '../components/FooterC'


const HomePage = () => {
const [productos, setProductos] = useState ([]);

const getProducts = () => {
  setProductos(products);
};

useEffect(() => {
  document.title = "Pagina de Inicio";
  setProductos();
},[]);

  
  return (
    <>
    <CarrouselC/>
    
      <Container>
        <Row>
        {products.map ((products) => (
       <Col key={products.id} sm="12" md="6" lg="4" className='my-4'>
        <CardC 
        nombre={products.nombre} 
        precio={products.precio} 
        imagen={products.img} 
        />
        </Col>
      ))}
        </Row>
      </Container>
    
    <FooterC/>
    </>
  );

};

export default HomePage;

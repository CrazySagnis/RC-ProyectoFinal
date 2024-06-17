import PublicidadC from "../components/PublicidadC";
import {
  useEffect,
  useState,
} from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardC from "../components/CardC";
import { titlePage } from "../helpers/titlePage";
import { useApi } from "../helpers/useApi";
import CarrouselC from "../components/CarrouselC";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const getProductFakeStore = async () => {
    const productos = await fetch("http://localhost:3001/api/products");
    const data = await productos.json();
    console.log(data.allProducts);
    setProducts(data.allProducts);
  };

  useEffect(() => {
    getProductFakeStore();
  }, []);
  
  useEffect (() => {
  titlePage("home");
  }, []);

  return (

  <>
      
      <CarrouselC/>
    
      <Container className="conteiner-fluid ms-2">
        <Row className="d-flex">
          {products.map((product) => (
            <Col sm="12" md="6" lg="3" key={product._id} className="my-3 mt-5">
              <CardC
                imgCard={product.imagen}
                titleCard={product.nombre}
                productPrice={product.precio}                
                descCard={product.description}
                idProduct ={product._id}
              />
            </Col>
          ))}
        </Row>
      </Container><br /><br /><br />
      <PublicidadC />
     
  </>
  )

};

export default HomePage;

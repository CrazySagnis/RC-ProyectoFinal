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
    
    const data = await useApi();
    setProducts(data);
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
    
      <Container className="conteiner-fluid">
        <Row>
          {products.map((product) => (
            <Col sm="12" md="6" lg="4" key={product.id} className="my-3 mt-5">
              <CardC
                imgCard={product.image}
                titleCard={product.title}
                productPrice={product.price}                
                descCard={product.description}
                idProduct ={product.id}
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

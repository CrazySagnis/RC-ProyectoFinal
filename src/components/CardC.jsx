import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import "../css/CardC.css";


const CardC= ({imgCard , titleCard , productPrice, descCard , idProduct})  => {
  console.log(titleCard);
return (
    <Card style={{ width: '18rem' }} className='card-principal'>
    <Card.Img variant="top" src={imgCard} />
    <Card.Body>
      <Card.Title className='card-title-principal'>{titleCard}</Card.Title>
      <Card.Text>{productPrice}</Card.Text>
      <Card.Text className='card-desc'>
       {descCard}
      </Card.Text>
      <Link to={`/product/${idProduct}`} className='btn btn-primary'>Ver Mas</Link>
    </Card.Body>
  </Card>

);

}
export default CardC;

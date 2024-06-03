import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardC = ({nombre, precio, imagen }) => {
    return (
      <Container>
        <Row>
          <Col sm="12" md="6" lg="4">
          <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${imagen}`} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>${precio}</Card.Text>
          <div className='d-flex justify-content-center'>
          <Button variant="success">Agregar</Button>
          </div>
        </Card.Body>
      </Card>
          </Col>
        </Row>
      </Container>
    )
  }
  
  export default CardC
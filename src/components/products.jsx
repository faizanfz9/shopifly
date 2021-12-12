import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Products(props) {
  return (
    <Col md="4">
      <Card>
        <Card.Img variant="top" src={props.src}/>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary"><Link to="productDetail" className="link">Go somewhere</Link></Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Products;

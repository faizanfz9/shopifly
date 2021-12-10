import Card from "react-bootstrap/Card";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Cards(props) {
  return (
      <Card className="col-md-3 col-sm-3 col-xs-12 ">
        <Card.Img variant="top" src={props.src}/>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
  );
}

export default Cards;

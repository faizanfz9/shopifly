import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

function Products(props) {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
  const { id, title, price, image, description } = product;
console.log(id, "iddddd"); 
    return (<Col md="4" key={id}>
      <Card>
        <Card.Img variant="top" src={image} alt={id} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Title>${price}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">
            <Link to={`/product/${id}`} className="link">Go somewhere</Link>
          </Button>
        </Card.Body>
      </Card>
    </Col>);
  });
  return (
    <>{renderList}</>
  );
}

export default Products;

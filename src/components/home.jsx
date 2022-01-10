import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Products from './products';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import { useDispatch } from "react-redux";

function Home() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  // const {id, title} = products;
  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
  }
  useEffect(() => {
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("products", products);
  return (
    <section className="products">
      <Container>
        <div className="innerWrap">
          <Row>
            <Products/>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Home;




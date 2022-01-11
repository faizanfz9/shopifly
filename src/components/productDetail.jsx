import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { selectedProducts, removeSelectedProducts } from "../redux/actions/productActions";
const ProductDetail = () => {
    const product = useSelector(state => state.product);
    const { image, title, price, category, rate, count, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(productId);
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log(err);
            });
        dispatch(selectedProducts(response.data));
    }
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProducts());
        }
    }, [productId]);

    return (
        <section className="productDetail">
            <Container>
                {Object.keys(product).length === 0 ? (<div>Loading...</div>) : (
                    <div className="innerWrap">
                        <Row>
                            <Col md="6">
                                <div className="imgWrap">
                                    <img src={image} alt="product" />
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="content">
                                    <h2>{title}</h2>
                                    <h5>${price}</h5>
                                    <h3>{category}</h3>
                                    <p>{description}.</p>
                                </div>
                            </Col>
                        </Row>
                        <Tabs defaultActiveKey="Description" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="Description" title="Description">
                                <h4>Description</h4>
                                <p>{description}.</p>
                            </Tab>
                            <Tab eventKey="Additional Information" title="Additional Information">
                                <h4>Additional Information</h4>
                                <p>{rate} {count}</p>
                            </Tab>
                            <Tab eventKey="Reviews" title="Reviews">
                                <h4>Reviews</h4>
                                <p>There are no reviews yet.</p>
                            </Tab>
                        </Tabs>
                    </div>
                )}
            </Container>
        </section>
    );
};
export default ProductDetail;
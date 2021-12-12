import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ProductImage from '../assets/images/product-img.jpg'

function ProductDetail() {
    return (
        <section className="productDetail">
            <Container>
                <div className="innerWrap">
                    <Row>
                        <Col md="6">
                            <div className="imgWrap">
                                <img src={ProductImage} alt="product" />
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="content">
                                <h2>Happy Ninja</h2>
                                <h5>$10.00</h5>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                            </div>
                        </Col>
                    </Row>
                    <Tabs defaultActiveKey="Description" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="Description" title="Description">
                            <h4>Description</h4>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                        </Tab>
                        <Tab eventKey="Additional Information" title="Additional Information">
                            <h4>Additional Information</h4>
                            <p>color: red, blue</p>
                        </Tab>
                        <Tab eventKey="Reviews" title="Reviews">
                            <h4>Reviews</h4>
                            <p>There are no reviews yet.</p>
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </section>
    )
}

export default ProductDetail;
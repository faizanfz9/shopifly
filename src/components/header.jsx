import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Container>
                <div className="innerWrap">
                    <div className="siteName">
                        <h3>Shopifly</h3>
                    </div>
                    <Nav className="justify-content-center" activeKey="/home">
                        <Nav.Item>
                            <Link className="nav-link" to="/">Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">Tshirt</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Hoodies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Posters</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Albums</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </Container>
        </header>
    )
}

export default Header;
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Products from './products';
import fire from '../firebase';

function Home() {

    // fire.child('products').on('value', (snapshot)=> {
    //     console.log(snapshot);
    // })

    return (
        <section className="products">
            <Container>
                <div className="innerWrap">
                    <Row>
                        <Products title="title one" src="http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png" />
                        <Products title="title 2" src="http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/double_ship.png" />
                        <Products title="title 3" src="http://commondatastorage.googleapis.com/codeskulptor-assets/space%20station.png" />
                        <Products title="title 4" src="http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png" />
                        <Products title="title one" src="http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png" />
                        <Products title="title 2" src="http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/double_ship.png" />
                        <Products title="title 3" src="http://commondatastorage.googleapis.com/codeskulptor-assets/space%20station.png" />
                        <Products title="title 4" src="http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png" />
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Home;




import './App.css';
import Cards from './components/cards';

function App() {
  return (
    <div className="App">
<div className="container">
    <div className="card-wrap">
        <Cards title="title one" src="http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png" />
        <Cards title="title 2" src="http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/double_ship.png"/>
        <Cards title="title 3" src="http://commondatastorage.googleapis.com/codeskulptor-assets/space%20station.png"/>
        <Cards title="title 4" src="http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png" />
        <Cards title="title one" src="http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/nebula_blue.s2014.png" />
        <Cards title="title 2" src="http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/double_ship.png"/>
        <Cards title="title 3" src="http://commondatastorage.googleapis.com/codeskulptor-assets/space%20station.png"/>
        <Cards title="title 4" src="http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris4_brown.png" />

    </div>
    </div>
</div>
  );
}

export default App;

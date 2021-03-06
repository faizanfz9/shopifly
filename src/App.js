import './App.css';
import Home from './components/home';
import ProductDetail from './components/productDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:productId" element={<ProductDetail />}></Route>
        <Route>404 Not Found !</Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

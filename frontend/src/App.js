import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Container } from "react-bootstrap";
import "./bootstrap.min.css";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";
import Footer from "./components/Footer";
import ShopScreen from "./screens/ShopScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/shop" element={<ShopScreen />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

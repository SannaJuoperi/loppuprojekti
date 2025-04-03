import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import MenuView from "./components/MenuView.jsx";
import Order from "./components/Order.jsx";
import Cart from "./components/Cart.jsx";
import Reservation from "./components/Reservation.jsx";

function App() {
  return (
    <Router>
      <div className="container-fluid min-vh-100 d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: "#f8f9fa" }}>
        <h1 className="text-center mb-4 text-dark fw-bold">Restaurant Management</h1>
        <nav className="mb-4">
          <Link to="/" className="btn btn-primary m-2">Home</Link>
          <Link to="/menu" className="btn btn-secondary m-2">Menu</Link>
          <Link to="/order" className="btn btn-success m-2">Tilaa</Link>
          <Link to="/cart" className="btn btn-warning m-2">Ostoskori</Link>
          <Link to="/reserve" className="btn btn-danger m-2">Varaa</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuView />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/reserve" element={<Reservation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import MenuView from "./components/MenuView.jsx";
import Order from "./components/Order.jsx";
import Cart from "./components/Cart.jsx";
import Reservation from "./components/Reservation.jsx";

function App() {
  return (
    <Router>
      {/* Yläbanneri logolle */}
      <header style={{ backgroundColor: "#000000", width: "100%", padding: "20px 0", color: "white" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <img src="/logo.png" alt="Restaurant Logo" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
      </header>

      {/* Sisältö ja navigointi */}
      <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100" style={{ textAlign: "center", backgroundColor: "#f8f9fa" }}>
      <nav className="nav-bar mb-4" style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/menu" className="nav-btn">Menu</Link>
        <Link to="/order" className="nav-btn">Tilaa</Link>
        <Link to="/cart" className="nav-btn">Ostoskori</Link>
        <Link to="/reserve" className="nav-btn">Varaa</Link>
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

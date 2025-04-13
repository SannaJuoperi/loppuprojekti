import { useState } from "react";
import axios from "axios";

export default function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []; // Haetaan ostoskori
  const [orderDetails, setOrderDetails] = useState(null); // Tilan hallinta tilauksen tiedoille

  // Tyylit napille
  const buttonStyle = {
    backgroundColor: "#EF8354",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#D56A3C",
  };

  const buttonActiveStyle = {
    backgroundColor: "#601700",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const orderData = {
      customerName: data.get("name"),
      pickupDate: data.get("pickupDate"),
      pickupTime: data.get("pickupTime"),
      foodItems: cart,
      totalPrice: cart.reduce((acc, item) => acc + item.price, 0), // Lasketaan kokonaiskustannukset
    };

    if (!orderData.customerName || !orderData.pickupDate || !orderData.pickupTime) {
      alert("Kaikki kentät ovat pakollisia.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/orders", orderData);
      alert("Tilaus tehty onnistuneesti!");
      setOrderDetails(orderData); // Päivitä tila onnistuneen lähetyksen jälkeen
      localStorage.removeItem("cart"); // Tyhjennä ostoskori
    } catch (error) {
      console.error("Virhe tilauksen lähetyksessä:", error);
      alert(error.response?.data?.error || "Tilauksen tekeminen epäonnistui.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "20px" }}>
      <h2>Ostoskori</h2>
      <div style={{ maxWidth: "500px", width: "100%" }}>
        {cart.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{item.item} - €{item.price}</span>
            <button
              onClick={() => {
                const updatedCart = cart.filter((_, i) => i !== index);
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                window.location.reload(); // Päivitetään näkymä
              }}
              style={{
                marginLeft: "10px",
                backgroundColor: "#7F0002", // Tummanpunainen normaali tila
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#640002")} // Hover-tila
              onMouseOut={(e) => (e.target.style.backgroundColor = "#7F0002")} // Normaali tila
            >
              Poista
            </button>
          </div>
        ))}
      </div>
      <h3>Yhteensä: €{cart.reduce((acc, item) => acc + item.price, 0)}</h3>

      {/* Lomake tilauksen tekemiseen */}
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", width: "100%", marginTop: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Nimi"
          required
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
        <input
          type="date"
          name="pickupDate"
          placeholder="Noutopäivämäärä"
          required
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
        <input
          type="time"
          name="pickupTime"
          placeholder="Noutoaika"
          required
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
        <button
          type="submit"
          className="btn-custom"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
          onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        >
          Tee tilaus
        </button>
      </form>

      {/* Tilauksen tiedot renderöidään ruudulle, jos niitä on */}
      {orderDetails && (
        <div style={{ marginTop: "20px", border: "1px solid #ddd", padding: "20px", borderRadius: "5px", backgroundColor: "#f9f9f9", maxWidth: "500px", width: "100%" }}>
          <h3>Tilauksen tiedot</h3>
          <p><strong>Nimi:</strong> {orderDetails.customerName}</p>
          <p><strong>Noutopäivämäärä:</strong> {orderDetails.pickupDate}</p>
          <p><strong>Noutoaika:</strong> {orderDetails.pickupTime}</p>
          <h4>Tilatut tuotteet:</h4>
          <div>
            {orderDetails.foodItems.map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "5px",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                {item.item} - €{item.price}
              </div>
            ))}
          </div>
          <p><strong>Kokonaishinta:</strong> €{orderDetails.totalPrice}</p>
        </div>
      )}
    </div>
  );
}


  
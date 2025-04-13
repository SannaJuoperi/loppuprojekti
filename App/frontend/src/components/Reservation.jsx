import { useState } from "react";
import axios from "axios";

export default function Reservation() {
  const [reservationDetails, setReservationDetails] = useState(null); // Tilan hallinta varauksen tiedoille

  // Tyylit napille (yhtenäinen muiden nappien kanssa)
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

    const reservationDetails = {
      customerName: data.get("name"),
      email: data.get("email"),
      phoneNumber: data.get("phone"),
      date: data.get("date"),
      time: data.get("time"),
      partySize: Number(data.get("partySize")), // Varmistetaan että on numero
    };

    try {
      const response = await axios.post("http://localhost:3000/reservations", reservationDetails);
      alert("Varaus tallennettu onnistuneesti!");
      setReservationDetails(reservationDetails);
      event.target.reset(); // Tyhjennä lomake
    } catch (error) {
      console.error("Virhe varaustiedon lähetyksessä:", error);
      alert(error.response?.data?.error || "Varausta ei voitu tallentaa.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "20px" }}>
      <h2>Varaa Pöytä</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", width: "100%" }}>
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
          type="email"
          name="email"
          placeholder="Sähköposti"
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
          type="text"
          name="phone"
          placeholder="Puhelinnumero"
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
          name="date"
          placeholder="Päivämäärä"
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
          name="time"
          placeholder="Aika"
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
          type="number"
          name="partySize"
          placeholder="Seurueen koko"
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
          Varaa
        </button>
      </form>

      {/* Varaustiedot renderöidään ruudulle, jos niitä on */}
      {reservationDetails && (
        <div style={{ marginTop: "20px", border: "1px solid #ddd", padding: "20px", borderRadius: "5px", backgroundColor: "#f9f9f9", maxWidth: "500px", width: "100%" }}>
          <h3>Varaustiedot</h3>
          <p><strong>Nimi:</strong> {reservationDetails.customerName}</p>
          <p><strong>Sähköposti:</strong> {reservationDetails.email}</p>
          <p><strong>Puhelinnumero:</strong> {reservationDetails.phoneNumber}</p>
          <p><strong>Päivämäärä:</strong> {reservationDetails.date}</p>
          <p><strong>Aika:</strong> {reservationDetails.time}</p>
          <p><strong>Seurueen koko:</strong> {reservationDetails.partySize}</p>
        </div>
      )}
    </div>
  );
}



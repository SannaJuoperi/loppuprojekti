import { useState } from "react";
import axios from 'axios';

export default function Reservation() {
  const [reservationDetails, setReservationDetails] = useState(null); // Tilan hallinta varauksen tiedoille

 const handleSubmit = async (event) => {
  event.preventDefault();
  const data = new FormData(event.target);

  const reservationDetails = {
    customerName: data.get("name"),
    email: data.get("email"),
    phoneNumber: data.get("phone"),
    date: data.get("date"),
    time: data.get("time"),
    partySize: Number(data.get("partySize")), // varmistetaan että on numero
  };

  try {
    const response = await axios.post('http://localhost:3000/reservations', reservationDetails);
    alert('Varaus tallennettu onnistuneesti!');
    setReservationDetails(reservationDetails);
    event.target.reset(); // Tyhjennä lomake
  } catch (error) {
    console.error('Virhe varaustiedon lähetyksessä:', error);
    alert(error.response?.data?.error || 'Varausta ei voitu tallentaa.');
  }
};


  return (
    <div>
      <h2>Varaa Pöytä</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nimi" required />
        <input type="email" name="email" placeholder="Sähköposti" required />
        <input type="text" name="phone" placeholder="Puhelinnumero" required />
        <input type="date" name="date" placeholder="Päivämäärä" required />
        <input type="time" name="time" placeholder="Aika" required />
        <input type="number" name="partySize" placeholder="Seurueen koko" required />
        <button type="submit" className="btn btn-danger">Varaa</button>
      </form>

      {/* Varaustiedot renderöidään ruudulle, jos niitä on */}
      {reservationDetails && (
        <div style={{ marginTop: "20px", border: "1px solid #ddd", padding: "20px", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
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


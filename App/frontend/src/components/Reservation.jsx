import { useState } from "react";

export default function Reservation() {
  const [reservationDetails, setReservationDetails] = useState(null); // Tilan hallinta varauksen tiedoille

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const rawDate = new Date(data.get("date"));
    const formattedDate = `${rawDate.getDate()}.${rawDate.getMonth() + 1}.${rawDate.getFullYear()}`;

    // Tallennetaan varaustiedot tilaan
    setReservationDetails({
      name: data.get("name"),
      email: data.get("email"),
      date: formattedDate,
      time: data.get("time"),
      partySize: data.get("partySize"),
    });
  };

  return (
    <div>
      <h2>Varaa Pöytä</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nimi" required />
        <input type="email" name="email" placeholder="Sähköposti" required />
        <input type="date" name="date" placeholder="Päivämäärä" required />
        <input type="time" name="time" placeholder="Aika" required />
        <input type="number" name="partySize" placeholder="Seurueen koko" required />
        <button type="submit" className="btn btn-danger">Varaa</button>
      </form>

      {/* Varaustiedot renderöidään ruudulle, jos niitä on */}
      {reservationDetails && (
        <div style={{ marginTop: "20px", border: "1px solid #ddd", padding: "20px", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
          <h3>Varaustiedot</h3>
          <p><strong>Nimi:</strong> {reservationDetails.name}</p>
          <p><strong>Sähköposti:</strong> {reservationDetails.email}</p>
          <p><strong>Päivämäärä:</strong> {reservationDetails.date}</p>
          <p><strong>Aika:</strong> {reservationDetails.time}</p>
          <p><strong>Seurueen koko:</strong> {reservationDetails.partySize}</p>
        </div>
      )}
    </div>
  );
}

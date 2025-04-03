export default function Reservation() {
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      alert(`Varaus vastaanotettu!\nNimi: ${data.get("name")}\nSähköposti: ${data.get("email")}`);
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
      </div>
    );
  }
  
export default function Cart() {
  // Haetaan ostoskori
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Lasketaan kokonaiskustannukset
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  // Poistetaan tuote ostoskorista
  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.reload(); // Päivitetään näkymä
  };

  return (
    <div>
      <h2 style={{ color: "#601700" }}>Ostoskori</h2> {/* Otsikon väri muutettu */}
      <ul>
        {cart.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item.item} - €{item.price}{" "}
            <button
              onClick={() => removeFromCart(index)}
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
              onMouseOut={(e) => (e.target.style.backgroundColor = "#7F0002")} // Paluu normaalitilaan
            >
              Poista
            </button>
          </li>
        ))}
      </ul>
      <h3>Yhteensä: €{total}</h3>
    </div>
  );
}


  
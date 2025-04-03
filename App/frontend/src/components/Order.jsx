export default function MenuView() {
  const addToCart = (item, price) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ item, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item} lisätty ostoskoriin!`);
  };
  const buttonStyle = {
    backgroundColor: "#EF8354",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#D56A3C", // Hover-väri tummempi kuin normaali
  };

  const buttonActiveStyle = {
    backgroundColor: "#601700", // Klikkiväri
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", backgroundColor: "#f8f9fa", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center", color: "#601700" }}>Menu</h2>

      {/* Burgerit */}
      <h3 style={{ textAlign: "center", color: "#601700" }}>Burgerit</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "5px" }}>
          <strong>CLASSIC BRGR - 15€</strong>
          <p>Jauhettua naudanlihaa, cheddar, salaatti, tomaatti, pikkelöity punasipuli, suolakurkku, ketsuppi, sinappi & majoneesi</p>
          <button
            onClick={() => addToCart("CLASSIC BRGR", 15)}
            className="btn-custom"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          >
            Lisää ostoskoriin
          </button>
        </li>
        <li style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "5px" }}>
          <strong>VEGAN CLASSIC BRGR - 16€ (vegaaninen)</strong>
          <p>Moving mountains -pihvi, cheddar, salaatti, tomaatti, pikkelöity punasipuli, suolakurkku, ketsuppi, sinappi & majoneesi</p>
          <button
            onClick={() => addToCart("VEGAN BRGR", 16)}
            className="btn-custom"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          >
            Lisää ostoskoriin
          </button>
        </li>
        <li style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "5px" }}>
          <strong>RUOK CHEESE BRGR - 17€</strong>
          <p>Jauhettua naudanlihaa, cheddar, savupekoni, salaatti, tomaatti, pikkelöity kurkku, karamellisoitu punasipuli & Peltolan blue ja Jack Daniels -majoneesit</p>
          <button
            onClick={() => addToCart("RUOK CHEESE BRGR", 17)}
            className="btn-custom"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          >
            Lisää ostoskoriin
          </button>
        </li>
        <li style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "5px" }}>
          <strong>KUUSAMO BRGR - 19€</strong>
          <p>Jauhettua poronlihaa, leipäjuustoa, salaatti, pikkelöityä kanttarellia, lakkahilloa & majoneesi</p>
          <button
            onClick={() => addToCart("KUUSAMO BRGR", 19)}
            className="btn-custom"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          >
            Lisää ostoskoriin
          </button>
        </li>
        <li style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "5px" }}>
          <strong>HALLOUMI BRGR - 17€</strong>
          <p>Grillattua halloumia, salaatti, tomaatti, pikkelöity punasipuli, pahoilaisen hillo & majoneesi</p>
          <button
            onClick={() => addToCart("HALLOUMI BRGR", 17)}
            className="btn-custom"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          >
            Lisää ostoskoriin
          </button>
        </li>
        <li style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "5px" }}>
          <strong>KIDS MEAL - 12€ (alle 12v.)</strong>
          <p>Jauhettua naudanlihaa, cheddar juusto, salaatti, tomaatti, ketsuppi, majoneesi sekä pienet ranskalaiset & 0,3 l limu</p>
          <button
            onClick={() => addToCart("KIDS MEAL", 12)}
            className="btn-custom"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          >
            Lisää ostoskoriin
          </button>
        </li>
        <li style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "5px" }}>
          <strong>CHICKEN BASKET MEAL - 12€ (alle 12v.)</strong>
          <p>Friteerattua kanaa, majoneesi & pienet ranskalaiset & 0,3 l limu</p>
          <button
            onClick={() => addToCart("CHICKEN BASKET MEAL", 12)}
            className="btn-custom"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          >
            Lisää ostoskoriin
          </button>
        </li>
      </ul>

      {/* Lisukkeet */}
      <h3 style={{ textAlign: "center", color: "#601700" }}>Lisukkeet</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "5px" }}>
          <strong>RANSKALAISET - 5,50€</strong>
          <p></p>
          <button
            onClick={() => addToCart("RANSKALAISET", 5.50)}
            className="btn-custom"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          >
            Lisää ostoskoriin
          </button>
        </li>
        <li style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "5px" }}>
          <strong>BATAATTIRANSKALAISET - 6,50€</strong>
          <p></p>
          <button
            onClick={() => addToCart("BATAATTIRANSKALAISET", 6.50)}
            className="btn-custom"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          >
            Lisää ostoskoriin
          </button>
        </li>
        <li style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "5px" }}>
          <strong>HALLOUM RANSKALAISET - 7,50€</strong>
          <p></p>
          <button
            onClick={() => addToCart("HALLOUM RANSKALAISET", 7.50)}
            className="btn-custom"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          >
            Lisää ostoskoriin
          </button>
        </li>
        <li style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "5px" }}>
          <strong>FRITEERATTUA KANAA - 7,50€</strong>
          <p></p>
          <button
            onClick={() => addToCart("FRITEERATTUA KANAA", 7.50)}
            className="btn-custom"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          >
            Lisää ostoskoriin
          </button>
        </li>
      </ul>

      {/* Dipit */}
      <h3 style={{ textAlign: "center", color: "#601700" }}>Dipit</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "5px" }}>
          <strong>JACK DANIELS - 2€</strong>
          <p></p>
          <button
            onClick={() => addToCart("JACK DANIELS-DIPPI", 2)}
            className="btn-custom"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          >
            Lisää ostoskoriin
          </button>
        </li>
        <li style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "5px" }}>
          <strong>AMERICAN STYLE - 2€</strong>
          <p></p>
          <button
            onClick={() => addToCart("AMERICAN STYLE-DIPPI", 2)}
            className="btn-custom"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          >
            Lisää ostoskoriin
          </button>
        </li>
        <li style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "5px" }}>
          <strong>GARLIC - 2€</strong>
          <p></p>
          <button
            onClick={() => addToCart("GARLIC-DIPPI", 2)}
            className="btn-custom"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          >
            Lisää ostoskoriin
          </button>
        </li>
        <li style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "5px" }}>
          <strong>CHILI - 2€</strong>
          <p></p>
          <button
            onClick={() => addToCart("CHILI-DIPPI", 2)}
            className="btn-custom"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          >
            Lisää ostoskoriin
          </button>
        </li>
        <li style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "5px" }}>
          <strong>SINIHOME - 2€</strong>
          <p></p>
          <button
            onClick={() => addToCart("SINIHOME-DIPPI", 2)}
            className="btn-custom"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          >
            Lisää ostoskoriin
          </button>
        </li>
        <li style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "5px" }}>
          <strong>NATURAL - 2€</strong>
          <p></p>
          <button
            onClick={() => addToCart("NATURAL-DIPPI", 2)}
            className="btn-custom"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          >
            Lisää ostoskoriin
          </button>
        </li>
        <li style={{ padding: "10px", marginBottom: "10px", backgroundColor: "#fff", border: "1px solid #ddd", borderRadius: "5px" }}>
          <strong>LIME - JALOPENO - 2€</strong>
          <p></p>
          <button
            onClick={() => addToCart("LIME-JALOPENO-DIPPI", 2)}
            className="btn-custom"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
            onMouseDown={(e) => (e.target.style.backgroundColor = buttonActiveStyle.backgroundColor)}
            onMouseUp={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          >
            Lisää ostoskoriin
          </button>
        </li>
      </ul>
    </div>
  );
}

export default function Order() {
    const addToCart = (item, price) => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({ item, price });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${item} lisätty ostoskoriin!`);
    };
  
    return (
      <div>
        <h2>Tilaa Ruoka</h2>
        <ul>
          <li>
            Classic Burger - €15{" "}
            <button onClick={() => addToCart("Classic Burger", 15)} className="btn btn-primary">Lisää</button>
          </li>
          <li>
            Vegan Burger - €16{" "}
            <button onClick={() => addToCart("Vegan Burger", 16)} className="btn btn-primary">Lisää</button>
          </li>
          <li>
            Cheese Burger - €17{" "}
            <button onClick={() => addToCart("Cheese Burger", 17)} className="btn btn-primary">Lisää</button>
          </li>
        </ul>
      </div>
    );
  }
  
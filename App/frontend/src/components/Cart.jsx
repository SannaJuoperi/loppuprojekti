export default function Cart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const total = cart.reduce((acc, item) => acc + item.price, 0);
  
    return (
      <div>
        <h2>Ostoskori</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.item} - €{item.price}
            </li>
          ))}
        </ul>
        <h3>Yhteensä: €{total}</h3>
      </div>
    );
  }
  
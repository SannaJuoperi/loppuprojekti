import { useState } from "react";
import axios from "axios";

export default function CreateOrderAndReservation({ onOrderOrReservationAdded, buttonClass =   "btn btn-primary" }) {
  const [foodItems, setFoodItems] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [partySize, setPartySize] = useState("");
  const [message, setMessage] = useState("");

  const handleOrderSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("http://localhost:3000/orders", {
        foodItems: JSON.parse(foodItems), // Convert string to JSON array
        totalPrice: parseFloat(totalPrice),
      });
      setMessage("Order created successfully: " + response.data.id);
      setFoodItems("");
      setTotalPrice("");
      if (onOrderOrReservationAdded) onOrderOrReservationAdded(); // Kutsutaan päivitysfunktiota
    } catch (error) {
      setMessage("Error: " + (error.response?.data?.error || error.message));
    }
  };

  const handleReservationSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("http://localhost:3000/reservations", {
        customerName,
        email,
        phoneNumber,
        date,
        time,
        partySize: parseInt(partySize, 10),
      });
      setMessage("Reservation created successfully: " + response.data.id);
      setCustomerName("");
      setEmail("");
      setPhoneNumber("");
      setDate("");
      setTime("");
      setPartySize("");
    } catch (error) {
      setMessage("Error: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div>
      <h2>Create Order and Reservation</h2>

      <form onSubmit={handleOrderSubmit}>
        <h3>Create Order</h3>
        <textarea
          placeholder='Food Items (JSON format: [{"item":"Burger","quantity":2}])'
          value={foodItems}
          onChange={(e) => setFoodItems(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Total Price"
          value={totalPrice}
          onChange={(e) => setTotalPrice(e.target.value)}
          required
        />
        <button type="submit" className={buttonClass}>Submit Order</button>
      </form>

      <form onSubmit={handleReservationSubmit}>
        <h3>Create Reservation</h3>
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="time"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Party Size"
          value={partySize}
          onChange={(e) => setPartySize(e.target.value)}
          required
        />
       <button type="submit" className={buttonClass}>Submit Reservation</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

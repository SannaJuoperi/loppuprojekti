import { useState } from "react";
import axios from "axios";

export default function UpdateOrderAndReservation( onOrderOrReservationUpdated, buttonClass = "btn btn-warning" ) {
    const [orderId, setOrderId] = useState("");
    const [foodItems, setFoodItems] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    const [reservationId, setReservationId] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [partySize, setPartySize] = useState("");
    const [message, setMessage] = useState("");

    // Update Order
    const handleUpdateOrder = async (event) => {
        event.preventDefault();
        setMessage("");

        try {
            const response = await axios.put(`http://localhost:3000/orders/${orderId}`, {
                foodItems: JSON.parse(foodItems), // Parse food items JSON input
                totalPrice: parseFloat(totalPrice),
            });
            setMessage("Order updated successfully: " + response.data.id);
            setOrderId("");
            setFoodItems("");
            setTotalPrice("");
            if (onOrderOrReservationUpdated) onOrderOrReservationUpdated();
        } catch (error) {
            setMessage("Error updating order: " + (error.response?.data?.error || error.message));
        }
    };

    // Update Reservation
    const handleUpdateReservation = async (event) => {
        event.preventDefault();
        setMessage("");

        try {
            const response = await axios.put(`http://localhost:3000/reservations/${reservationId}`, {
                customerName,
                email,
                phoneNumber,
                date,
                time,
                partySize: parseInt(partySize, 10),
            });
            setMessage("Reservation updated successfully: " + response.data.id);
            setReservationId("");
            setCustomerName("");
            setEmail("");
            setPhoneNumber("");
            setDate("");
            setTime("");
            setPartySize("");
        } catch (error) {
            setMessage("Error updating reservation: " + (error.response?.data?.error || error.message));
        }
    };

    return (
        <div>
            <h2>Update Order and Reservation</h2>

            <form onSubmit={handleUpdateOrder}>
                <h3>Update Order</h3>
                <input
                    type="text"
                    placeholder="Order ID"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    required
                />
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
                <button type="submit" className={buttonClass}>Update Order</button>
            </form>

            <form onSubmit={handleUpdateReservation}>
                <h3>Update Reservation</h3>
                <input
                    type="text"
                    placeholder="Reservation ID"
                    value={reservationId}
                    onChange={(e) => setReservationId(e.target.value)}
                    required
                />
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
                <button type="submit" className={buttonClass}>Update Reservation</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
}

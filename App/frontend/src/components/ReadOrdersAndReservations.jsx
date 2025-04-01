import { useState, useEffect } from "react";
import axios from "axios";

export default function ReadOrdersAndReservations() {
    const [orders, setOrders] = useState([]);
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState("");

    // Fetch both orders and reservations on component load
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get("http://localhost:3000/orders");
                setOrders(response.data);
            } catch (err) {
                setError("Error fetching orders: " + (err.response?.data?.error || err.message));
            }
        };

        const fetchReservations = async () => {
            try {
                const response = await axios.get("http://localhost:3000/reservations");
                setReservations(response.data);
            } catch (err) {
                setError("Error fetching reservations: " + (err.response?.data?.error || err.message));
            }
        };

        fetchOrders();
        fetchReservations();
    }, []);

    return (
        <div>
            <h2>Orders and Reservations</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <h3>Orders</h3>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        <strong>Order ID:</strong> {order.id}<br />
                        <strong>Food Items:</strong> {JSON.stringify(order.foodItems)}<br />
                        <strong>Total Price:</strong> €{order.totalPrice.toFixed(2)}
                    </li>
                ))}
            </ul>

            <h3>Reservations</h3>
            <ul>
                {reservations.map((reservation) => (
                    <li key={reservation.id}>
                        <strong>Reservation ID:</strong> {reservation.id}<br />
                        <strong>Customer Name:</strong> {reservation.customerName}<br />
                        <strong>Email:</strong> {reservation.email}<br />
                        <strong>Phone Number:</strong> {reservation.phoneNumber}<br />
                        <strong>Date:</strong> {new Date(reservation.date).toLocaleDateString()}<br />
                        <strong>Time:</strong> {reservation.time}<br />
                        <strong>Party Size:</strong> {reservation.partySize}
                    </li>
                ))}
            </ul>
        </div>
    );
}

import { useState, useEffect } from "react";
import axios from "axios";

export default function ReadDeleteOrderAndReservation({ refresh, buttonClass = "btn btn-danger" }) {
    const [orders, setOrders] = useState([]);
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    // Fetch orders
    const fetchOrders = async () => {
        try {
            const response = await axios.get("http://localhost:3000/orders");
            setOrders(response.data);
        } catch (err) {
            setError("Error fetching orders: " + (err.response?.data?.error || err.message));
        }
    };

    // Fetch reservations
    const fetchReservations = async () => {
        try {
            const response = await axios.get("http://localhost:3000/reservations");
            setReservations(response.data);
        } catch (err) {
            setError("Error fetching reservations: " + (err.response?.data?.error || err.message));
        }
    };

    // Fetch both orders and reservations on component load
    useEffect(() => {
        fetchOrders();
        fetchReservations();
    }, [refresh]);

    // Handle order deletion
    const handleOrderDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/orders/${id}`);
            fetchOrders(); // Refresh order list
            setMessage(`Order with ID ${id} deleted successfully.`);
        } catch (error) {
            setMessage("Error deleting order: " + (error.response?.data?.error || error.message));
        }
    };

    // Handle reservation deletion
    const handleReservationDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/reservations/${id}`);
            fetchReservations(); // Refresh reservation list
            setMessage(`Reservation with ID ${id} deleted successfully.`);
        } catch (error) {
            setMessage("Error deleting reservation: " + (error.response?.data?.error || error.message));
        }
    };

    return (
        <div>
            <h2>Orders and Reservations</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {message && <p>{message}</p>}

            <h3>Orders</h3>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        Order ID: {order.id}, Total Price: €{order.totalPrice.toFixed(2)}, Items: {JSON.stringify(order.foodItems)}
                        <button onClick={() => handleOrderDelete(order.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            <h3>Reservations</h3>
            <ul>
                {reservations.map((reservation) => (
                    <li key={reservation.id}>
                        Reservation ID: {reservation.id}, Name: {reservation.customerName}, Email: {reservation.email}, Party Size: {reservation.partySize}, Date: {new Date(reservation.date).toLocaleDateString()}, Time: {reservation.time}
                        <button onClick={() => handleOrderDelete(order.id)} className={buttonClass}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

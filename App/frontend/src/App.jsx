import CreateOrderAndReservation from "./components/CreateOrderAndReservation.jsx";
import UpdateOrderAndReservation from "./components/UpdateOrderAndReservation.jsx";
import ReadDeleteOrderAndReservation from "./components/ReadDeleteOrderAndReservation.jsx";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div
      className="container-fluid min-vh-100 d-flex flex-column align-items-center justify-content-center"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <h1 className="text-center mb-4 text-dark fw-bold">
        Restaurant Management
      </h1>
      <div className="w-75">
        {/* Luonti osio */}
        <div
          className="card p-4 shadow-sm mb-4 bg-white border-0 rounded-3"
          style={{ borderLeft: "5px solid #007bff" }}
        >
          <h2 className="text-center text-primary">Create Order or Reservation</h2>
          <CreateOrderAndReservation
            onActionCompleted={() => setRefresh((prev) => prev + 1)}
            buttonClass="btn btn-primary w-100 mt-3"
          />
        </div>

        {/* Lue ja poista osio */}
        <div
          className="card p-4 shadow-sm mb-4 bg-white border-0 rounded-3"
          style={{ borderLeft: "5px solid #dc3545" }}
        >
          <h2 className="text-center text-danger">Orders and Reservations List</h2>
          <ReadDeleteOrderAndReservation
            refresh={refresh}
            buttonClass="btn btn-danger w-100 mt-2"
          />
        </div>

        {/* Päivitä osio */}
        <div
          className="card p-4 shadow-sm bg-white border-0 rounded-3"
          style={{ borderLeft: "5px solid #ffc107" }}
        >
          <h2 className="text-center text-warning">Update Order or Reservation</h2>
          <UpdateOrderAndReservation
            onActionCompleted={() => setRefresh((prev) => prev + 1)}
            buttonClass="btn btn-warning w-100 mt-3"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

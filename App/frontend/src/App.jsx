import CreateOrderAndReservation from "./components/CreateOrderAndReservation.jsx";
import ReadOrdersAndReservations from "./components/ReadOrdersAndReservations.jsx";
import UpdateOrderAndReservation from "./components/UpdateOrderAndReservation.jsx";
import ReadDeleteOrdersAndReservations from "./components/ReadDeleteOrdersAndReservations.jsx";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div>
      <CreateOrderAndReservation onOrderOrReservationAdded={() => setRefresh(prev => prev + 1)} />
      <ReadOrdersAndReservations/>
      <UpdateOrderAndReservation/>
      <ReadDeleteOrdersAndReservations refresh={refresh} />
    </div>
  );
}

export default App;

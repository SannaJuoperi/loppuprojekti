import React, { useState } from "react";

const NameForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nimi tallennettu: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Kirjoita nimi"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Lähetä</button>
    </form>
  );
};

export default NameForm;

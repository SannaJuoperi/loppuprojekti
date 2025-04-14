import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from 'vitest';

import NameForm from "../src/components/NameForm.jsx";

test("Renderöi lomakkeen ja lähettää sen nimellä.", () => {
  // Mockaa window.alert
  window.alert = vi.fn(); // Mocks alert

  render(<NameForm />);

  // Tarkistetaan, että lomakkeen kenttä s
  const input = screen.getByPlaceholderText("Kirjoita nimi");
  expect(input).toBeInTheDocument();

  // Muutetaan lomakekenttää
  fireEvent.change(input, { target: { value: "Testinimi" } });
  expect(input.value).toBe("Testinimi");

  // Lähetetään lomake
  const button = screen.getByText("Lähetä");
  fireEvent.click(button);

  // Testataan mockattua alertia
  expect(window.alert).toHaveBeenCalledWith("Nimi tallennettu: Testinimi");
});

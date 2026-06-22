import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm/BookingForm';
import { initializeTimes, updateTimes } from "./App";
import { fetchAPI } from './Api.js';

test('Renders the BookingForm heading', () => {
    render(< BookingForm
      availableTimes={["17:00", "18:00", "19:00", "20:00", "21:00",]}
      availableOccasions={["Birthday", "Anniversary"]}
      dispatch={() => {}}
      dispatchOccasions={() => {}}/>
    );
    const headingElement = screen.getByText("Reserve a table");

    expect(headingElement).toBeInTheDocument();
})

test("initializeTimes returns a non-empty array", () => {
  const result = initializeTimes();

  expect(result.length).toBeGreaterThan(0);
});

test("updateTimes returns available times", () => {
  const date = new Date("2026-06-16");

  expect(updateTimes([], date.toISOString())).toEqual(
    fetchAPI(date)
  );
});
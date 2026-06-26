jest.mock("./Api", () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingPage from './pages/BookingPage';
import BookingForm from './components/BookingForm/BookingForm';
import Hero from "./components/Hero/Hero.jsx";
import { initializeTimes, updateTimes } from "./App";
import { fetchAPI } from './Api.js';

describe("BookingForm", () => {
  const props = {
    availableTimes: ["17:00", "18:00", "19:00"],
    availableOccasions: ["Birthday", "Anniversary"],
    dispatch: jest.fn(),
    dispatchOccasions: jest.fn(),
    submitForm: jest.fn(),
  };

test("Renders the BookingForm heading", () => {
  render(<BookingPage {...props} />);

  expect(screen.getByText(/reserve a table/i)).toBeInTheDocument();
});

  test("renders the booking form fields", () => {
    render(<BookingForm {...props} />);

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /make your reservation/i })
    ).toBeInTheDocument();
  });

  test("shows validation error when date is missing", async () => {
    render(<BookingForm {...props} />);

    await userEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );

    expect(
      await screen.findByText(/please choose a date/i)
    ).toBeInTheDocument();
  });
});


describe("initializeTimes", () => {
  test("returns the available booking times from fetchAPI", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes();

    expect(result).toEqual(mockTimes);
  });
});

describe("updateTimes", () => {
  test("returns updated booking times based on selected date", () => {
    const selectedDate = "2026-06-26";
    const updatedTimes = ["18:00", "19:00", "20:00"];

    fetchAPI.mockReturnValue(updatedTimes);

    const result = updateTimes([], selectedDate);

    expect(fetchAPI).toHaveBeenCalledWith(new Date(selectedDate));
    expect(result).toEqual(updatedTimes);
  });
});

describe("Available times", () => {
  test("initializeTimes returns available times", () => {
    fetchAPI.mockReturnValue(["17:00", "18:00"]);

    expect(initializeTimes()).toEqual(["17:00", "18:00"]);
  });

  test("updateTimes returns available times", () => {
    const times = ["18:00", "19:00"];

    fetchAPI.mockReturnValue(times);

    expect(updateTimes([], "2026-06-16")).toEqual(times);
  });
});
import React, { useReducer } from 'react';
import { Routes, Route } from "react-router";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './utils/variables.css';
import './App.css';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from "./pages/ConfirmedBooking";
import { fetchAPI, submitAPI } from './Api.js';
import { useNavigate } from "react-router";

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  return fetchAPI(new Date(action));
};

const initializeOccasions = () => {
  return [
  'Birthday',
  'Anniversary',
  ];
};

export const updateOccasions = (state, action) => {
  return state;
};

function App() {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const [availableOccasions, dispatchOccasions] = useReducer(updateOccasions, [], initializeOccasions);

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed-booking");
    }
  };

  return (
    <div className="App">
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<div className="page"><div className="page__container"><div className="page__content"><h1>About</h1></div></div></div>} />
              <Route path="/menu" element={<div className="page"><div className="page__container"><div className="page__content"><h1>Menu</h1></div></div></div>} />
              <Route
                path="/booking"
                element={
                  <BookingPage
                    availableTimes={availableTimes}
                    availableOccasions={availableOccasions}
                    dispatch={dispatch}
                    dispatchOccasions={dispatchOccasions}
                    submitForm={submitForm}
                  />
                }
              />
              <Route
                path="/confirmed-booking"
                element={<ConfirmedBooking />}
              />
              <Route path="/order-online" element={<div className="page"><div className="page__container"><div className="page__content"><h1>Order Online</h1></div></div></div>} />
              <Route path="/login" element={<div className="page"><div className="page__container"><div className="page__content"><h1>Login</h1></div></div></div>} />
            </Routes>
          </main>
        <Footer/>
      </>
    </div>
  );
}

export default App;

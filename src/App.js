import React, { useReducer } from 'react';
import {
  Outlet,
  Routes,
  Route,
  createBrowserRouter
} from "react-router";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './utils/variables.css';
import './App.css';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';

export const routes = [
  {
    label: "Home",
    element: <HomePage />,
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Menu",
    path: "/menu",
  },
  {
    label: "Reservation",
    element: <BookingPage />,
    path: "/reservation",
  },
  {
    label: "Order Online",
    path: "/order-online",
  },
  {
    label: "Login",
    path: "/login",
  },
];

function App() {

  
  const initializeTimes = () => {
    return [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
    ];
  };

  const updateTimes = (state, action) => {
    return [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
    ];
  };

  const initializeOccasions = () => {
    return [
    'Birthday',
    'Anniversary',
    ];
  };

  const updateOccasions = (state, action) => {
    return [
    'Birthday',
    'Anniversary',
    ];
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const [availableOccasions, dispatchOccasions] = useReducer(updateOccasions, [], initializeOccasions);

  return (
    <div className="App">
      <>
        <Header />
        <main>
          <Routes>
            {routes.routes && routes.routes.length > 0 && (
              routes.routes.map((route) => (
                <Route path={route.path} element={route.element}/>
              ))
            )}
          </Routes>
          <Route element={<App />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" />
            <Route path="/menu" />
            <Route path="/booking" element={<BookingPage 
              availableTimes={availableTimes}
              availableOccasions={availableOccasions}
              dispatch={dispatch}
              dispatchOccasions={dispatchOccasions}
              />}
            />
            <Route path="/order-online" />
            <Route path="/login" />
          </Route>

          <Outlet
            context={{
              availableTimes,
              availableOccasions, 
              dispatch,
              dispatchOccasions
            }}
          />
        </main>
        <Footer/>
      </>
    </div>
  );
}

export default App;

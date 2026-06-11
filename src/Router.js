import { createBrowserRouter } from "react-router";
import HomePage from './pages/HomePage';
import ReservationPage from './pages/ReservationPage';

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
    element: <ReservationPage />,
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

export default createBrowserRouter(routes);
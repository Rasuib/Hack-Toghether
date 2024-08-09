import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import LandingPage from "../pages/LandingPage";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/dashboard";
import Bounty from "../pages/Bounty";
import PageNotFound from "../pages/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "about",
    element: <AboutUs />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "contact",
    element: <ContactUs />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "bounties",
    element: <Bounty />,
  },

  {
    path: "*",
    element: <PageNotFound />,
  },
]);

import React from "react";
import { useRoutes } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Help from "../pages/Help";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/HomePage";
import Dashboard from "../component/Dashboard";
import Messages from "../pages/Messages";
import Navbar from "../component/Navbar";
import DashboardNav from "../component/DashboardNav";
import History from "../pages/History";
import EditProfile from "../pages/EditProfile";
import Profile from "../pages/Profile";
import Subscribion from "../pages/Subscribion";
import EmailTemplate from "../pages/EmailTemplate";
import PrivacyandPolicies from "../pages/PrivacyandPolicies";
const Routes = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "About-Us",
          element: <AboutUs />,
        },
        {
          path: "ContactUs",
          element: <ContactUs />,
        },
        {
          path: "Help",
          element: <Help />,
        },
        {
          path: "Register",
          element: <Register />,
        },
        {
          path: "Login",
          element: <Login />,
        },
        {
          path: "privacy and policies",
          element: <PrivacyandPolicies />,
        },
      ],
    },

    {
      path: "/Dashboard",
      element: <DashboardNav />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "messages",
          element: <Messages />,
        },
        {
          path: "history",
          element: <History />,
        },
        {
          path: "Edit-profile",
          element: <EditProfile />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "subscribion",
          element: <Subscribion />,
        },
        {
          path: "help",
          element: <Help />,
        },
        {
          path: "Email-Template",
          element: <EmailTemplate />,
        },
      ],
    },
  ]);
  return <div>{routing}</div>;
};

export default Routes;

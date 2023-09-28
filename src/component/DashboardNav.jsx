import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../RequestUrl";
import DashboardFooter from "./DashboardFooter";

const DashboardNav = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  useEffect(() => {
    getUser();
  }, []);
  async function getUser() {
    // Retrieve the token string from local storage
    // const tokenString = localStorage.getItem("user");
    // const {token}  = JSON.parse(tokenString);
    // console.log(token);
    let token; // Declare the token variable in the appropriate scope

    const tokenString = localStorage.getItem("user");

    if (tokenString) {
      try {
        const parsedData = JSON.parse(tokenString);
        if (parsedData && parsedData.token) {
          // Initialize the token variable here
          token = parsedData.token;
          // console.log(token, "hello");
        } else {
          console.log("Token is missing or invalid.");
        }
      } catch (error) {
      }
    } 
    try {
      const response = await axiosInstance.get("auth/getUser", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setData(response.data);
    } catch (error) {
      // Handle the error appropriately for your application
      if (error.response && error.response.status === 401) {
        console.error("Request error:", error.message);
        navigate("/login");
      } else {
      }
    }
  }

  function logout() {
    let token = localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <Link
            className="navbar-brand"
            to="/"
            style={{ fontSize: "40px", marginTop: "10px", color: "black" }}
          >
            Bulk sms
          </Link>
          <span>Welcome {data?.name}</span>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              View Profile
            </a>
            <ul className="dropdown-menu" style={{ width: "50px" }}>
              <li>
                <Link
                  className="nav-link dropdown-item"
                  to="/Dashboard/Profile"
                >
                  {" "}
                  My Profile
                </Link>
              </li>
              <br />
              <li>
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <br />
              <li>
                <Link className="nav-link" to="/Dashboard/Edit-Profile">
                  Edit Profile
                </Link>
              </li>
              <br />
              <li>
                <Link className="nav-link" to={"/Dashboard/history"}>
                  History
                </Link>
              </li>

              <br />
              <li>
                <Link className="nav-link" to="/Dashboard/Help">
                  Help
                </Link>
              </li>
              <br />
              <li>
                <button onClick={logout}>log out</button>
              </li>
            </ul>
          </li>
        </div>
      </nav>
      <br />
      <Outlet />

      <br />
      <DashboardFooter />
    </div>
  );
};

export default DashboardNav;

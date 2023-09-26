import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Messages</h1>
      <br />
      <div className="d-flex justify-content-center" style={{ gap: "20px" }}>
        <button className="btn btn-success">Summary</button>
        <button className="btn btn-success">
          <Link to="/Dashboard/messages" style={{ color: "white" }}>
            Create an SMS MESSAGE
          </Link>
        </button>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <div
          style={{
            backgroundColor: "whitesmoke",
            height: "50vh",
            width: "100%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Dashboard;

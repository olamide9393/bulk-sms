import React, { useEffect, useState } from "react";
// import cityscape from "../assets/cityscape.png";
import smsbannert from "../assets/bulk.png";
import bulk from "../assets/bulksms3.png";

import { Link } from "react-router-dom";

const HomePage = () => {


  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(http://localhost:5173/src/assets/cityscape.png)",
          width: "100%",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row" style={{}}>
            <div
              className="col-sm-6"
              style={{ color: "white", marginTop: "25%" }}
            >
              <h3>Easiest way to send sms </h3>
              <h3>messages in Nigeria</h3>
              <p>Send large amount of sms in two way step:</p>
              <ul>
                <li>
                  upload large amount of messages and to many users at once{" "}
                </li>
                <li>done</li>
              </ul>
              <button className="btn btn-success">
                <Link
                  style={{
                    color: "white",
                    borderRadius: "100%",
                    width: "100px",
                    height: "100px",
                    textDecoration: "none",
                  }}
                  to="/Register"
                >
                  Get Started
                </Link>
              </button>
            </div>
            <div className="col-sm-6" style={{ marginTop: "15%" }}>
              <img
                src={smsbannert}
                alt="CitySpace background"
                style={{ width: "50%", height: "50vh" }}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container-sm">
        <div className="row">
          <div className="col-sm-6">
            <h5>BULK SMS</h5>
            <p>Send Transactional & Promotional SMS</p>
            <br />
            <h5>API SMS</h5>
            <p>Send OTP & Notification SMS via API</p>
            <br />
            <h5>SCHEDULED SMS</h5>
            <p>Schedule your SMS for Future Reminders</p>
            <br />
            <h5>CUSTOM SMS</h5>
            <p>Import Bulk Data from your Excel File</p>
          </div>
          <div className="col-sm-6">
            <img src={bulk} alt="" style={{ width: "100%", height: "50vh" }} />
          </div>
        </div>
      </div>
      <br />
      <br />

      <div style={{ textAlign: "center" }}>
        <h2>Test Bulk SMS Service For FREE !!</h2>
        <h2>Free sms text After Signup</h2>
      </div>
      <br />
      <br />
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div
                style={{
                  backgroundColor: "whitesmoke",
                  textAlign: "center",
                  height: "120px",
                }}
              >
                <h1>01</h1>
                <p>CREATE AN ACCOUNT</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div
                style={{
                  backgroundColor: "whitesmoke",
                  textAlign: "center",
                  height: "120px",
                }}
              >
                <h1>02</h1>
                <p>FUND YOUR ACCOUNT, THROUGH BANK OR ONLINE PAYMENT</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div
                style={{
                  backgroundColor: "whitesmoke",
                  textAlign: "center",
                  height: "120px",
                }}
              >
                <h1>02</h1>
                <p>START SENDING SMS IMMENDIATELY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

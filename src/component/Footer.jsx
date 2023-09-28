import React from "react";
import { Link, Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <h6>About us </h6>
            <Link to="/About-Us">
              <p>About</p>
            </Link>
            <Link  to='/ContactUs'>
              {" "}
              <p>Contact Us</p>
            </Link>
            <Link to='/privacy and policies'>
              <p>Privacy and Policies</p>
            </Link>
          </div>
          <div className="col-sm-3">
            <h6>Service</h6>
            <Link>
              <p>Sms sending</p>
            </Link>
            <Link>
              <p>Email sending</p>
            </Link>
            <Link>
              <p>How to send sms</p>
            </Link>
          </div>
          <div className="col-sm-3">
            <h6>Location</h6>
            <p>1A Towobola Street, Gbagada Lagos, Nigeria.</p>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

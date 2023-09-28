import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../RequestUrl";

const Messages = () => {
  const [sender, setSender] = useState("");
  const [numbers, setNumbers] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
      // Retrieve the token string from local storage
      const tokenString = localStorage.getItem("user");
      const { token } = JSON.parse(tokenString);
      console.log(token);
    try {
      const response = await axiosInstance.post("message/message", {
        sender,
        numbers: numbers.split(","),
        message,
      });
      console.log(response);
      setResponse("Bulk SMS sent successfully.");
      console.log(response.data.response);
      navigate("/Dashboard");
    } catch (error) {
      setResponse("Failed to send bulk SMS.");
      console.error("Error sending bulk SMS:", error);
    }
  };
  return (
    <div>
         <h1 style={{textAlign:'center',fontSize:'50px'}}>New SMS Messages</h1>
      <br />
      <form className="container-sm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            SENDER NAME:
          </label>
          <input
            type="text"
            required
            className="form-control"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
          />
        </div>
        <div className="mb-3">
          ENTER PHONE NUMBER: (comma-separated):
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label"
          ></label>
          <input
            type="text"
            required
            className="form-control"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            INPUT YOUR TEXT:{" "}
          </label>
          <textarea
            typeof="number"
            required
            className="form-control"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
      <br />
      <p style={{ color: "green" }}>{response}</p>

      {/* <form onSubmit={handleSubmit}>
        <label>
          Enter phone numbers (comma-separated):
          <input type="text" value={numbers} onChange={(e) => setNumbers(e.target.value)} />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <br />
        <button type="submit">Send Bulk SMS</button>
      </form>
      <p>{response}</p> */}
    </div>
  );
};

export default Messages;

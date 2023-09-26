import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../RequestUrl";



const History = () => {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    history();
  }, []);
  async function history() {
    setloading(true);

    // Retrieve the token string from local storage
    const tokenString = localStorage.getItem("user");
    const { token } = JSON.parse(tokenString);
    // console.log(token);
    try {
      const { data } = await axiosInstance.get("auth/userProfile", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setblogDatas(data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  }

  return (
    <div>
      <br />
      <br />
      <h2>History</h2>
      {loading ? (
        <h1>
          <div
            className="spinner-border text-muted"
            style={{ width: "100px", height: "100px" }}
          ></div>
        </h1>
      ) : (
        <div className="card" style={{ width: "18rem", display: "flex" }}>
          <div className="card-body">
            <h5 className="card-title">{blog.sender}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {blog.numbers && blog.numbers.length > 0
                ? blog.numbers.map((number, index) => (
                    <div key={index}>{number}</div>
                  ))
                : "No numbers"}
            </h6>
            <p className="card-text">{blog.message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;

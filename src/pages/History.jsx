import React from "react";
const History = () => {
  return (
    <div>
      <br />
      <br />
      {/* {loading ? (
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
      )} */}

      <h1 style={{ textAlign: "center", fontSize: "50px" }}>NO HISTORY</h1>
      <br />
    </div>
  );
};

export default History;

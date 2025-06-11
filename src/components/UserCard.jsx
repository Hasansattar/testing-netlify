import React from "react";

export const UserCard = (props) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  );
};

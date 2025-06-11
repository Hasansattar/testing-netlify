import React from "react";

export const Product = (props) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <h3>{props.name}</h3>
      <p>Price: ${props.price}</p>
    </div>
  );
};

import React from "react";

function Card(props) {
  const { name, age, address } = props; // Destructuring props
  return (
    <div>
      <h2>Card Info</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Address: {address}</p>
    </div>
  );
}

export default Card;

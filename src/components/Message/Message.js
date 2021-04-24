import React from "react";
import "./Message.css";

export default function Message({ message, desc }) {
  return (
    <div className="MyMessage table-dark mt-2">
      <h2>{message}</h2>
      <p>{desc}</p>
    </div>
  );
}

import React from "react";
export default function Circle(props) {
  return (
    <input
      type="button"
      value={props.value}
      className="Circle"
      onClick={props.onClick}
    />
  );
}

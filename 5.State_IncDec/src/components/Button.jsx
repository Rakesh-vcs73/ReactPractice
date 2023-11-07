import React from "react";

export default function Button(props) {
    return (
      <button className="Btn" onClick={props.onclick}>
        {props.text}
        {props.count}
      </button>
    );
  }
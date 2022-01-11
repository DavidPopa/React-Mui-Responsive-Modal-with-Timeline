import React, { useState } from "react";
function divStyle() {
  return {
    display: "flex",
    gap: "1rem",
    fontSize: "24px",
  };
}
function pStyle() {
  return {
    fontSize: "24px",
  };
}
export default function MinMax(props) {
  const [Style] = React.useState(divStyle);
  const [p] = React.useState(pStyle);

  function getMinMax() {
    if (Math.min(...props.value) === Math.max(...props.value)) {
      return <p style={p}>avg:{Math.min(...props.value)}</p>;
    }
    if (Math.min(...props.value) !== Math.max(...props.value)) {
      return (
        <div style={Style}>
          <p>min: {Math.min(...props.value)}</p>
          <p>max: {Math.max(...props.value)}</p>
        </div>
      );
    }
  }
  return getMinMax();
}

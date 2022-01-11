import React from "react";

export default function MinMax(props) {
  function getMinMax() {
    if (Math.min(...props.value) === Math.max(...props.value)) {
      return <p>avg:{Math.min(...props.value)}</p>;
    }
    if (Math.min(...props.value) !== Math.max(...props.value)) {
      return (
        <div>
          <p>min: {Math.min(...props.value)}</p>
          <p>max: {Math.max(...props.value)}</p>
        </div>
      );
    }
  }
  return getMinMax();
}

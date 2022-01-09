import React from "react";
import "./MinMax";

export default function TimelineItem(props) {
  console.log(typeof props.da);
  return (
    <div className="vals">
      <p>{props.value.rank}</p>
      <p>{props.da[0]}</p>
    </div>
  );
}

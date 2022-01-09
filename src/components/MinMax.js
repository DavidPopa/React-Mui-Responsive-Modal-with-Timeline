import React from "react";
import "./MinMax";

export default function TimelineItem(props) {
  console.log(props.da[0]);
  return (
    <div className="vals">
      <p>{props.value.rank}</p>
      <p>{props.da[0]}</p>
    </div>
  );
}

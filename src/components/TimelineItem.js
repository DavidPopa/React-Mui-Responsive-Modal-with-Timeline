import React from "react";
import "./Timeline.css";
import StaRating from "./StaRating";
export default function TimelineItem(props) {
  function dot() {
    let array = [];
    array.push(props.data.rank);
    if (array[0] === "1" || array[0] === "2") {
      return (
        <div className="timeline-dot" style={{ backgroundColor: "red" }}></div>
      );
    } else if (array[0] === "3") {
      return (
        <div
          className="timeline-dot"
          style={{ backgroundColor: "yellow" }}
        ></div>
      );
    } else {
      return (
        <div
          className="timeline-dot"
          style={{ backgroundColor: "green" }}
        ></div>
      );
    }
  }
  return (
    <div className="timeline-item">
      <div className="timeline-date">{props.data.date}</div>
      <div className="timeline-content">
        <h3>{props.data.name}</h3>
        <div>{dot()}</div>
        <p>
          <StaRating rank={props.data.rank}></StaRating>
        </p>
      </div>
    </div>
  );
}

import React from "react";
import "./Timeline.css";
import StaRating from "./StaRating";
const TimelineItem = (props) => (
  <div className="timeline-item">
    <div className="timeline-date">{props.data.date}</div>
    <div className="timeline-content">
      <h3>{props.data.name}</h3>
      <p>
        <StaRating rank={props.data.rank}></StaRating>
      </p>
    </div>
  </div>
);
export default TimelineItem;

import React from "react";
import "./Timeline.css";

const TimelineItem = (props) => (
  <div class="timeline-item">
    <div className="timeline-dot"></div>
    <div className="timeline-date">{props.data.date}</div>
    <div className="timeline-content">
      <h3>{props.data.name}</h3>
      <p>{props.data.rank}</p>
    </div>
  </div>
);
export default TimelineItem;

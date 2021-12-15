import React from "react";
import "./Timeline.css";
const TimelineItem = ({ data }) => (
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-date">2020</div>
    <div class="timeline-content">
      <h3>{data}</h3>
      <p>{data}</p>
    </div>
  </div>
);
export default TimelineItem;

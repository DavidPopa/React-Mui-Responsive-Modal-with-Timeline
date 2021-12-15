import React from "react";
import timelineData from "../data.json";
import TimelineItem from "./TimelineItem";
const Timeline = () => (
  <div className="timeline-items">
    {/* {timelineData.map((data, idx) => (
      <TimelineItem key={idx} />
    ))} */}
    <TimelineItem></TimelineItem>
    <TimelineItem></TimelineItem>
    <TimelineItem></TimelineItem>
    <TimelineItem></TimelineItem>
  </div>
);

export default Timeline;

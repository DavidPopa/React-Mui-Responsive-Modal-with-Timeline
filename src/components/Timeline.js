import React from "react";
import timelineData from "../data.json";
import TimelineItem from "./TimelineItem";
const Timeline = () => (
  <div className="timeline-items">
    {/* {timelineData.map((data, idx) => (
      <TimelineItem data={data.fullName} key={idx} />
    ))} */}
    <TimelineItem>{timelineData.id}</TimelineItem>
    <TimelineItem></TimelineItem>
    <TimelineItem></TimelineItem>
    <TimelineItem></TimelineItem>
  </div>
);

export default Timeline;

import React from "react";
import timelineData from "../data.json";
import TimelineItem from "./TimelineItem";
const Timeline = () => (
  <div className="timeline-items">
    {timelineData.map((data, idx) => {
      return data.nameEvents.map((x) => {
        return <TimelineItem d={x.name} />;
      });
    })}
  </div>
);

export default Timeline;

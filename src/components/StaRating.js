import React from "react";
import { Rating } from "@material-ui/lab";
export default function StaRating(props) {
  return (
    <div>
      <Rating name="read-only" value={parseInt(props.rank) || 0} readOnly />
      <div className="timeline-dot"></div>
    </div>
  );
}

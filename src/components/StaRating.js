// import React from "react";
// import { AiFillStar } from "react-icons/ai";
// export default function StaRating(props) {
//   const stars = [...Array(parseInt(props.rank) || 0)].map((e, i) => (
//     <AiFillStar color="gold" key={i}></AiFillStar>
//   ));
//   return (
//     <div>
//       <div>{stars}</div>
//       <div className="timeline-dot"></div>
//     </div>
//   );
// }
import React from "react";
import { Rating } from "@mui/material";
export default function StaRating(props) {
  return (
    <div>
      <Rating name="read-only" value={parseInt(props.rank) || 0} readOnly />
      <div className="timeline-dot"></div>
    </div>
  );
}

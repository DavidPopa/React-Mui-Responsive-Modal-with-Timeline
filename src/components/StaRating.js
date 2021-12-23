// import React from "react";
// import { AiFillStar } from "react-icons/ai";
// export default function StaRating(props) {
//   const da = () => {
//     if (props.rank == 5)
//       return (
//         <React.Fragment>
//           <AiFillStar color="gold"></AiFillStar>
//           <AiFillStar color="gold"></AiFillStar>
//           <AiFillStar color="gold"></AiFillStar>
//           <AiFillStar color="gold"></AiFillStar>
//           <AiFillStar color="gold"></AiFillStar>
//         </React.Fragment>
//       );
//     else if (props.rank == 4)
//       return (
//         <React.Fragment>
//           <AiFillStar color="gold"></AiFillStar>
//           <AiFillStar color="gold"></AiFillStar>
//           <AiFillStar color="gold"></AiFillStar>
//           <AiFillStar color="gold"></AiFillStar>
//         </React.Fragment>
//       );
//     else if (props.rank == 3)
//       return (
//         <React.Fragment>
//           <AiFillStar color="gold"></AiFillStar>
//           <AiFillStar color="gold"></AiFillStar>
//           <AiFillStar color="gold"></AiFillStar>
//         </React.Fragment>
//       );
//     else if (props.rank == 2)
//       return (
//         <React.Fragment>
//           <AiFillStar color="gold"></AiFillStar>
//           <AiFillStar color="gold"></AiFillStar>
//         </React.Fragment>
//       );
//     else if (props.rank == 1)
//       return (
//         <React.Fragment>
//           <AiFillStar color="red"></AiFillStar>
//           <AiFillStar color="red"></AiFillStar>
//         </React.Fragment>
//       );
//   };
//   return (
//     <div>
//       <div>{da()}</div>
//       <div className="timeline-dot"></div>
//     </div>
//   );
// }
import React from "react";
import { AiFillStar } from "react-icons/ai";
export default function StaRating(props) {
  const stars = [...Array(parseInt(props.rank) || 0)].map((e, i) => (
    <AiFillStar color="gold" key={i}></AiFillStar>
  ));
  return (
    <div>
      <div>{stars}</div>
      <div className="timeline-dot"></div>
    </div>
  );
}

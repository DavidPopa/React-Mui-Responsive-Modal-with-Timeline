import React from "react";
import "./MinMax";
let arr = [];
let a = [];
export default function TimelineItem(props) {
  a = [];
  function returnRankVal() {
    arr = [];
    arr.push(props.value.rank);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      console.log(typeof arr[i]);
      let ab = parseInt(arr[i]);
      a.push(ab);
    }
    console.log(a);
    return a;
  }
  return (
    <div className="vals">
      {/* {props.value.rank} */}
      <p>{returnRankVal()}</p>
    </div>
  );
}

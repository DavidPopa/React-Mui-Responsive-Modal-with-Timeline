import React, { useState } from "react";
import "./App.css";
import data from "./data.json";
import AnimatedModal from "./Modal";
import Button from "@material-ui/core/Button";

const App = () => {
  const [dataInfos, setDataInfos] = useState(data);
  const getData = (data) => {
    let array = [];
    for (let i in data) {
      let val = data[i];
      for (let j in val) {
        let sub_key = j;
        array.push(sub_key);
      }
    }
    const unique = array.filter((v, i) => array.indexOf(v) === i);
    return unique;
  };

  const lenAttributes = (data) => {
    return Object.values(data).map((val) => {
      let lenghtObj = Object.keys(val).length;
      return lenghtObj;
    });
  };
  // TODO:  1. create a copy of the data object (dataInfos) e.g. newDataInfos
  const [newDataInfos, setNewDataInfos] = useState(data);
  //  2. add attributes to newDataInfos (push)
  //  3. set data infos with new value (newDataInfos) using the set function
  newDataInfos.forEach((elem, i) => {
    elem.Length = lenAttributes(data)[i];
  }); //  4. check if dataInfos has been updated

  //  5. study about react useState asynchronus behaviour (!!!important!!!)
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            {getData(data).map((val, index) => (
              <td key={index}>{val}</td>
            ))}
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {dataInfos.map((dataInfo) => {
            return (
              <tr>
                {Object.values(dataInfo).map((value) => {
                  return <td>{JSON.stringify(value)}</td>;
                })}
                <td>
                  <Button>
                    {
                      <AnimatedModal
                        id={dataInfo.id}
                        fullName={dataInfo.fullName}
                      ></AnimatedModal>
                    }
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;

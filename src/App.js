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

  const addAttributes = (data) => {
    // this function will add the length of the object as a new attribute and a concatenation of all the titles from events in another string
    // console.log(data);
    // let a = Object.keys(data).length;
    // console.log(a);
    // Object.entries(data).map((v) => {
    //   console.log(v);
    // });
  };
  addAttributes(data);
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            {getData(data).map((val, index) => (
              <td key={index}>{val}</td>
            ))}
            <td>Length</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {dataInfos.map((dataInfo) => {
            return (
              <tr>
                {/* FIXME:reduce to a single map */}
                {Object.values(dataInfo).map((val) => {
                  console.log(val);
                  return (
                    <td>
                      {/* TODO: remove typeof check */}
                      {typeof val === "object"
                        ? Object.values(val).map((v) => {
                            // Object.entries(v).map((entry) => {
                            //   return entry[1];
                            // });
                          })
                        : val}
                    </td>
                  );
                })}
                {/* TODO: add length property to object before it is being rendered, as well as creating another atribute which would contain the concatenation of the strings from "events" */}
                <td>{}</td>
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

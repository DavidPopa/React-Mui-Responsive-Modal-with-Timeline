import React, { useState } from "react";
import "./App.css";
import data from "./data.json";
import ModalApp from "./Modal";
import Button from "@material-ui/core/Button";
const App = () => {
  const [dataInfos] = useState(data);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({
    id: "",
    fullName: "",
    nameEvents: [],
  });
  function openModal(id, fullName, nameEvents) {
    setModalData({
      id: id,
      fullName: fullName,
      nameEvents: nameEvents,
    });
    setModalIsOpen(true);
  }
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
      let lenghtObj = Object.keys(val.nameEvents).length;
      return lenghtObj;
    });
  };
  // TODO:  1. create a copy of the data object (dataInfos) e.g. newDataInfos (((facut)))
  const [newDataInfos] = useState(data);
  //  2. add attributes to newDataInfos (push) (((facut)))
  //  3. set data infos with new value (newDataInfos) using the set function (((facut)))
  newDataInfos.forEach((elem, i) => {
    elem.Length = lenAttributes(data)[i];
  });
  if (dataInfos[0].Length) {
    // alert("da");
    //  4. check if dataInfos has been updated (((facut)))
  }
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
                {Object.values(dataInfo).map((val) => {
                  return (
                    <td>
                      {typeof val === "object"
                        ? Object.values(val).map((v) => {
                            return (
                              <div>
                                {`${v.name}`} {`${v.type}`}
                              </div>
                            );
                          })
                        : val}
                    </td>
                  );
                })}

                <td>
                  <Button
                    onClick={() =>
                      openModal(
                        dataInfo.id,
                        dataInfo.fullName,
                        dataInfo.nameEvents
                      )
                    }
                  >
                    Open Timeline
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ModalApp
        fullName={modalData.fullName}
        nameEvents={modalData.nameEvents}
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
      ></ModalApp>
    </div>
  );
};

export default App;

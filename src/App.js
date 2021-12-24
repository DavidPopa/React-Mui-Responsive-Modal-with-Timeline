import React, { useEffect, useState } from "react";
import "./App.css";
import data from "./data.json";
import ModalApp from "./Modal";
import Button from "@material-ui/core/Button";

const App = () => {
  const [dataInput, setDataInput] = useState(data);
  const [collumns, setCollumns] = useState();
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

  useEffect(() => {
    addAtributes(data, "nameEvents");
  }, []);

  function getEvents(nameEvents) {
    return nameEvents.map((value) =>
      Object.values(value).map((last) => {
        let found = last;
        return found + "\n";
      })
    );
  }

  // adds properties to object
  // TODO: create function in place of JSON.stringify to return a string as : event/name1/date1, ...
  function addAtributes(data, field) {
    let newData = data.map((obj) => ({
      ...obj,
      noOfEvents: obj[field].length,
      events: getEvents(obj[field]),
      // cl: console.log(getEvents(obj[field])),
    }));
    setDataInput(newData);
    getCollumns(newData, "nameEvents");
  }

  // get all the collumns and remove objects
  // TODO: add objects to be removed as array
  const getCollumns = (data, colToRemove) => {
    let array = [];
    for (let i in data) {
      let val = data[i];
      for (let j in val) {
        let sub_key = j;
        array.push(sub_key);
      }
    }
    // TODO: aici poti folosi ES6 syntax (set)
    const unique = array.filter((v, i) => array.indexOf(v) === i);

    const index = unique.indexOf(colToRemove);
    if (index > -1) {
      unique.splice(index, 1);
    }
    // console.log(unique);
    setCollumns(unique);
  };

  return (
    // TODO: make table responsive and limit col width. add span to display content if col content is greater than col width
    <div className="App">
      <table>
        <thead>
          <tr>
            {collumns &&
              collumns.map((val, index) => <td key={index}>{val}</td>)}
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {dataInput.map((dataInfo, index) => {
            return (
              <tr key={index}>
                {collumns &&
                  collumns.map((item) => {
                    // extra check if any arrays still remain
                    return (
                      <td>
                        {typeof dataInfo[item] === "object"
                          ? dataInfo[item]
                          : dataInfo[item]}
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
        id={modalData.id}
        fullName={modalData.fullName}
        nameEvents={modalData.nameEvents}
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
      ></ModalApp>
    </div>
  );
};

export default App;

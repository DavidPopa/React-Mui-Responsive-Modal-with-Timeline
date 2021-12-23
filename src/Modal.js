import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import TimelineItem from "./components/TimelineItem";
import data from "./data.json";
import "./Modal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "95%",
    height: "95%",
    borderRadius: "10px 10px 10px 10px",
  },
};

export default function ModalApp(props) {
  // const [filterData] = useState(data);
  // useEffect(() => {
  //   filterData.filter((item) => {
  //     if (item.id === props.id) {
  //       console.log(item.nameEvents);
  //     }
  //   });
  // }, [props.isOpen]);
  function closeModal() {
    props.setIsOpen(false);
  }
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button className="btn" onClick={closeModal}>
          <AiOutlineClose size="3rem" />
        </button>
        <div className="modalBck">
          <div className="modalCont">
            <div className="title">
              <h1>{props.fullName}</h1>
            </div>
            <div className="body">
              <div className="timeline-items">
                {props.nameEvents.map((item) => {
                  return <TimelineItem data={item} />;
                })}
              </div>
            </div>
            <footer>
              <p>David</p>
            </footer>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// TODO: 1. create function which get the item from the object (((facut)))
//        2. import data object (data.json) (((facut)))
//        3. filter data object by item id (props) api call, query, functie ca sa obtin toate atributele id-ului, useEfect (((facut)))
//        4. create body of modal (timeline) as a separate component (((facut)))
//        5. pass item as props to body (((facut)))
//        6. display item values as timeline (first draft) (((facut)))

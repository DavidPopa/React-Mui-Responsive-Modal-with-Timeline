import React, { useState, useEffect } from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// import Modal from "react-modal";
import Modal from "@material-ui/core/Modal"
import { AiOutlineClose } from "react-icons/ai";
import TimelineItem from "./components/TimelineItem";
import data from "./data.json";
import "./Modal.css";

function getModalStyle() {
  return {
    width: '100%',
    maxWidth: '100vw',
    maxHeight: '100%',
    position: 'fixed',
    top: '50%',
    left:  '0%',
    transform: 'translate(0, -50%)',
    overflowY: 'auto'
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 1500,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    button: {
        float: 'right',
        backgroundcolor: 'red',
    },
  }),
);

export default function ModalApp(props) {
  const [filterData] = useState(data);

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);


  useEffect(() => {
    filterData.filter((item) => {
      if (item.id === props.id) {
        console.log(item.nameEvents);
      }
    });
  }, [props.isOpen]);
  function closeModal() {
    props.setIsOpen(false);
  }
  return (
    <div>
      <Modal
        open={props.isOpen}
        onRequestClose={closeModal}
        // style={customStyles}
      >
        <div>
  
        <div className="modalBck"  style={modalStyle} className={classes.paper}>
        <button className="btn" onClick={closeModal}>
          <AiOutlineClose size="3rem" />
        </button>
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

import React from "react";
import Modal from "react-modal";
import Button from "@material-ui/core/Button";
import { AiOutlineClose } from "react-icons/ai";
import Timeline from "./components/Timeline";
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
export default function ModalApp() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Button onClick={openModal}>Open Timeline</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button className="btn" onClick={closeModal}>
          <AiOutlineClose size="3rem" />
        </button>
        <div className="modalBck">
          <div className="modalCont">
            <div className="title"></div>
            <div className="body">
              <Timeline></Timeline>
            </div>
          </div>
        </div>
        <footer>
          <p>David</p>
        </footer>
      </Modal>
    </div>
  );
}
// import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";
// import Fade from "@material-ui/core/Fade";
// import { AiOutlineClose } from "react-icons/ai";
// import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
// import Timeline from "./components/Timeline";
// import data from "./data.json";
// // TODO: 1. create function which get the item from the object
//        2. import data object (data.json) (((facut)))
//        3. filter data object by item id (props) api call, query
//        4. create body of modal (timeline) as a separate component (((facut)))
//        5. pass item as props to body
//        6. display item values as timeline (first draft)
//  format modal size and position
// function getModalStyle() {
//   return {
//     width: "90%",
//     position: "fixed",
//     top: "50%",
//     height: "90%",
//     transform: "translate(0, -50%)",
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100%",
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     border: "0.2rem  #000",
//     borderRadius: "10px",
//     width: 1500,
//     boxShadow: theme.shadows[5],
//     position: "relative",
//   },
// btn: {
//   position: "absolute",
//   right: "0",
//   top: "-0.03rem",
//   borderRadius: "0px 10px 0px 0px",
//   "&:hover": {
//     backgroundColor: "red",
//   },
// },
// btnBig: {
//   "& > *": {
//     margin: theme.spacing(1),
//   },
//   "&:hover": {
//     backgroundColor: "#fff",
//     color: "#3c52b2",
//   },
// },
// }));

// export default function AnimatedModal(props) {
//   const [modalStyle] = React.useState(getModalStyle);
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button color="primary" className={classes.btnBig} onClick={handleOpen}>
//         Timeline
//       </Button>
//       {/* FIXME: (optional) make modal responsive => something does not work properly here ... */}
//       {/* TODO: study what position should best fit the timeline (absolute or fixed???) */}
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         className={classes.modal}
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//       >
//         <Fade in={open}>
//           <div style={modalStyle} className={classes.paper}>
//             <header>
// <Button className={classes.btn} onClick={handleClose}>
//   <AiOutlineClose size="2rem" />
// </Button>
//             </header>
//             <body>
//               <Container className={classes.container}>
//                 {/* TODO: style container to 80% width of modal / 80% height and centered. add border during dev */}
//                 {/* TODO: check how to scroll modal left right using the scroll of the mouse*/}
//                 <h1>{props.fullName}</h1>
//                 <h2>{props.id}</h2>
//                 <Timeline></Timeline>
//               </Container>
//               {/* #TODO: add footer as a separate container with background contrast color*/}
//               {/* FIXME: (optional) make footer be positined on the bottom of the modal, even in the responsive mood */}
//               {/* <footer>
//                 <AppBar
//                   position="fixed"
//                   color="primary"
//                   sx={{ top: 0, bottom: 0 }}
//                 >
//                   <Toolbar>
//                     <Typography variant="body1" color="inherit">
//                       &copy; David
//                     </Typography>
//                   </Toolbar>
//                 </AppBar>
//               </footer> */}
//             </body>
//           </div>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }

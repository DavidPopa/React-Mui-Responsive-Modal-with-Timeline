import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { AiOutlineClose } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "0.2rem  #000",
    borderRadius: "10px",
    width: "90%",
    height: "90%",
    boxShadow: theme.shadows[5],
    position: "relative",
  },
  btn: {
    position: "absolute",
    right: "0",
    top: "-0.03rem",

    borderRadius: "0px 10px 0px 0px",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  btnBig: {
    "& > *": {
      margin: theme.spacing(1),
    },
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3c52b2",
    },
  },
  body: {
    paddingTop: "15%",
  },
  footer: {
    paddingTop: "10%",
  },
}));

export default function AnimatedModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button color="primary" className={classes.btnBig} onClick={handleOpen}>
        Timeline
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Button className={classes.btn} onClick={handleClose}>
              <AiOutlineClose size="1rem" />
            </Button>
            <header>
              <h1>Lorem ipsum</h1>
              <h2>{props.id}</h2>
            </header>
            <body className={classes.body}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                accumsan odio enim.
                <h1>{props.fullName}</h1>
              </p>
            </body>
            {/* TODO: add footer as a separate container with background contrast color*/}
            <footer className={classes.footer}>
              <p>valeu</p>
            </footer>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

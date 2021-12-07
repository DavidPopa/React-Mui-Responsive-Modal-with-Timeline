import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { AiOutlineClose } from "react-icons/ai";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";


// format modal size and position
function getModalStyle() {
  return {
    width: '90%',
    maxWidth: '100vw',
    maxHeight: '90%',
    position: 'fixed',
    top: '50%',
    height: '80%',
    left:  '5%',
    transform: 'translate(0, -50%)',
    overflowY: 'auto'
  };
}



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
    width: 1500,
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
  // container: {
  //   height: "100%",
  // },
}));

export default function AnimatedModal(props) {
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  // TODO: 1. create function which get the item from the object
  //       2. import data object (data.json)
  //       3. filter data object by item id (props)
  //       4. create body of modal (timeline) as a separate component
  //       5. pass item as props to body
  //       6. display item values as timeline (first draft)

  
  return (
    <div>
      <Button color="primary" className={classes.btnBig} onClick={handleOpen}>
        Timeline
      </Button>
      {/* FIXME: (optional) make modal responsive => something does not work properly here ... */}
      {/* TODO: study what position should best fit the timeline (absolute or fixed???) */}
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
          <div 
          style={modalStyle} 
          className={classes.paper}
          >
            <header>
              <Button className={classes.btn} onClick={handleClose}>
                <AiOutlineClose size="1rem" />
              </Button>
            </header>
            <body>
              <Container className={classes.container}>
                {/* TODO: style container to 80% width of modal / 80% height and centered. add border during dev */}
                {/* TODO: check how to scroll modal left right using the scroll of the mouse*/}
                <h1>{props.fullName}</h1>
                <h2>{props.id}</h2>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
              </Container>
              {/* #TODO: add footer as a separate container with background contrast color*/}
              {/* FIXME: (optional) make footer be positined on the bottom of the modal, even in the responsive mood */}
              {/* <footer>
                <AppBar 
                position="fixed" 
                color="primary"
                sx={{ top: 50, bottom: 0 }}
                >
                  
                  <Container maxWidth="300px">
                    <Toolbar>
                      <Typography variant="body1" color="inherit">
                        &copy; David
                      </Typography>
                    </Toolbar>
                  </Container>
                </AppBar>
              </footer> */}
            </body>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

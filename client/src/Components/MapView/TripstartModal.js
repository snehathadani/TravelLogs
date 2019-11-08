import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TripstartModal(props) {
  
  const openSideDrawer = () => {
     props.closeModal(); 
    props.openSideDrawer();
  }

const handleClose = ()=> {
    props.closeModal();
}
  return (
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        overlayStyle={{backgroundColor: '#1b5e20'}}

      >
        <DialogTitle id="alert-dialog-slide-title" color="primary"    style={{backgroundColor:'#1b5e20'}}>
        <Typography variant='h5' color= 'primary' align='center'> Let's Log </Typography>
        </DialogTitle>
        <DialogActions>
          <Button onClick={openSideDrawer} color="primary">
           Start a New Trip
          </Button>
          <Button onClick={openSideDrawer} color="primary">
           View Other Trips
          </Button>
        </DialogActions>
      </Dialog>
      
  );
} 
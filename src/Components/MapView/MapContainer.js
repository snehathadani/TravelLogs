import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { withStyles } from "@material-ui/styles";

export class MapContainer extends React.Component {

  state = {
    markers: [],
    showModal: false,
    modalStyle: getModalStyle()
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {

    const { classes } = this.props;console.log("Clases", classes);
    console.log("stae", this.state)
    const { markers, showModal, modalStyle } = this.state;

    return (
      <div style={{
        width: '100vw',
        height: '100vh'
      }} >
        <Map google={this.props.google}
          onClick={(_props, _map, e) => { this.setState({ markers: [...markers, e.latLng], showModal: !showModal}) }} >
          {this.state.markers.map((latLng) => <Marker position={{ lat: latLng.lat(), lng: latLng.lng() }} />)}
        </Map>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={showModal}
          onClose={this.toggleModal}
        >
          <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          </div>
        </Modal>


      </div>
    )
  }



}


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    //backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    //boxShadow: theme.shadows[5],
    //padding: theme.spacing(2, 4, 3),
  },

});


export default withStyles(styles) (GoogleApiWrapper({
  apiKey: 
})(MapContainer))

import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { withStyles } from "@material-ui/styles";

export class MapContainer extends React.Component {

  state = {
    markers: [],
    showModal: false,
    center: {}
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {

    const { classes } = this.props;
    console.log("Clases", classes.paper, classes.dialogPaper, classes.modal);
    console.log("stae", this.state)
    const { markers, showModal, center } = this.state;


    return (
      <div style={{
        width: '100vw',
        height: '100vh'
      }} >
        <Map google={this.props.google} 
          center = {center}
          onClick={(_props, _map, e) => {this.setState({ markers: [...markers, e.latLng], center: {lat: e.latLng.lat() - .011, lng:e.latLng.lng() + 0.013},  showModal: !showModal }) }} >
          {this.state.markers.map((latLng) => <Marker position={{ lat: latLng.lat(), lng: latLng.lng() }} />)}
        </Map>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={showModal}
          onClose={this.toggleModal}
        >
          <div className={classes.dialog}>
            <h2 id="simple-modal-title" text='#111111'>Where would you like to go next</h2>
            <p id="simple-modal-description">
              <ul>
                
                <li>Start a new trip</li>
                <li>View other trips</li> 
              </ul>
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

const styles = theme => {
  return ({
    dialog: {...theme.dialogPaper, ...theme.modal, color: 'white'},
  })
};

console.log("styles are", styles);

export default withStyles(styles)(GoogleApiWrapper({
  apiKey: 
})(MapContainer))

import React, { useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Modal from '@material-ui/core/Modal';
import { withStyles } from "@material-ui/styles";
import SideDrawer from './SideDrawer';

const MapContainer = (props) => {

  const [markers, setMarkers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [center, setCenter] = useState({});
  const [sideDrawer, setSideDrawer] = useState(false);

  const toggleModal = () => {
    setShowModal(showModal);
  }

  const toggleSideDrawer = () => {
    setSideDrawer(!sideDrawer);
  }

  const onMapClick = (e) => {
    setMarkers([...markers, e.latLng]);
    setShowModal(!showModal)
    setCenter({ lat: e.latLng.lat() - .011, lng: e.latLng.lng() + 0.013 })
  }

  const { classes } = props;
  console.log("Clases", classes.paper, classes.dialogPaper, classes.modal);


  return (
    <div style={{
      width: '100vw',
      height: '100vh'
    }} >
      <Map google={props.google}
        center={center}
        onClick={(_props, _map, e) => onMapClick(e)}>
        {markers.map((latLng) => <Marker position={{ lat: latLng.lat(), lng: latLng.lng() }} />)}
      </Map>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={showModal}
        onClose={toggleModal}>
        <div className={classes.dialog}>
          <h2 id="simple-modal-title" text='#111111'>Where would you like to go next</h2>
          <p id="simple-modal-description">
            <ul>

              <li onClick={() => { setShowModal(false); setSideDrawer(true) }}>Start a new trip</li>
              <li>View other trips</li>
            </ul>
          </p>
        </div>
      </Modal>

      <SideDrawer onClose={toggleSideDrawer} open={sideDrawer} />


    </div>
  )
}



const styles = theme => {
  return ({
    dialog: { ...theme.dialogPaper, ...theme.modal, color: 'white' },
  })
};

console.log("styles are", styles);

export default withStyles(styles)(GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY
})(MapContainer))

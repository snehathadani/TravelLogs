import React, { useState, useEffect } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Modal from '@material-ui/core/Modal';
import { withStyles } from "@material-ui/core/styles";
import SideDrawer from './SideDrawer';
import ApplicationBar from '../Header/AppBar';
const MapContainer = (props) => {

  const server = "http://localhost:5000"

  const [markers, setMarkers] = useState([]);
  useEffect(() => {
      fetch(`${server}/api/triplog`)
      .then(triplogs => triplogs.json())
      .then(triplogs => {
        console.log("triplogs", triplogs)
        setMarkers(triplogs.map(trip => {return {latLng: new window.google.maps.LatLng(trip.lat, trip.lng), id: trip.id}}))
        console.log('markers', markers);
    })}, markers)
  const [showModal, setShowModal] = useState(false);
  const [center, setCenter] = useState({});
  const [sideDrawer, setSideDrawer] = useState(false);
  const [sideDrawerLatLng, setSideDrawerLatLng] = useState({lat:0, lng: 0});


  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const toggleSideDrawer = () => {
    setSideDrawer(!sideDrawer);
  }

  const onMapClick = (e) => {
    setMarkers([...markers, {latLng: e.latLng}]);
    toggleModal();
    setCenter({ lat: e.latLng.lat() - .005, lng: e.latLng.lng() + 0.009 })
  }

  const { classes } = props;
  console.log("Clases", classes.paper, classes.dialogPaper, classes.modal);


  console.log("render markers" , markers)
  return (
    <div style={{
      width: '100vw',
      height: '100vh'
    }} >
      <ApplicationBar/>
      <Map google={props.google} 
        zoom={8}
        minZoom={4}
        maxZoom={8}
        center={center}
        onClick={(_props, _map, e) => onMapClick(e)}>
        {markers.map((latLng) =>  <Marker 
        position={{ lat: latLng.latLng.lat(), lng: latLng.latLng.lng() }} 
        onClick = {() => {
          setSideDrawer(true)
          setSideDrawerLatLng({ lat: latLng.latLng.lat().toFixed(4), lng: latLng.latLng.lng().toFixed(4) })
        }}/>)}
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

      <SideDrawer onClose={toggleSideDrawer} open={sideDrawer} lat={sideDrawerLatLng.lat} lng={sideDrawerLatLng.lng}/>


    </div>
  )
}

const styles = theme => ({
    dialog: theme.modal
  });

console.log("styles are", styles);

export default (GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY
})(withStyles(styles)(MapContainer)))

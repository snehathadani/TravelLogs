import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { withStyles } from "@material-ui/styles";
import SideDrawer from "./SideDrawer";

export class MapContainer extends React.Component {

  state = {
    markers: [],
    showModal: false,
    center: {},
   sideDrawer:false
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  toggleSideDrawer= ()=> {
    this.setState({sideDrawer:!this.state.sideDrawer});
  }
  render() {

    const { classes } = this.props;
    console.log("Clases", classes.paper, classes.dialogPaper, classes.modal);
    console.log("stae", this.state)
    const { markers, showModal, center,sideDrawer } = this.state;
  

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
                
                <li onClick={() => this.setState({ showModal:false,sideDrawer:true})}>Start a new trip</li>
                <li>View other trips</li> 
              </ul>
          </p>
          </div>
        </Modal>
        <SideDrawer onClose={this.toggleSideDrawer} open = {sideDrawer}/>
      

      </div>
    )
  }



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

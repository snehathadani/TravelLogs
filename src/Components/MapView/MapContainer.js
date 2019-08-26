import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
    state = {markers: []};

    render() {
      const style = {
        width: '100vw',
        height: '100vh'
      }
      console.log("stae", this.state)
      const {markers} = this.state;

      return (
        <div style={style} >
        <Map google={this.props.google}
              onClick={(_props, _map, e)=>{this.setState({markers: [...markers, e.latLng]})}} >
        {this.state.markers.map((latLng) => <Marker position={{lat: latLng.lat(), lng: latLng.lng()}}/>)}
        </Map>
      </div>
      )
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 
  })(MapContainer)
  
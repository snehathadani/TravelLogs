import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import SideList from './SideList';

 const SideDrawer=(props)=> {
  return (
    <div>
      <Drawer anchor="right" open={props.open} onClose={props.onClose} >
        <SideList lat = {props.lat} lng = {props.lng}/>
      </Drawer>
      
    </div>
  );
}

export default SideDrawer;
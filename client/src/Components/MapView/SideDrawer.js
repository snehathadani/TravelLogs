import React from 'react';
import Drawer from '@material-ui/core/Drawer';

import SideList from './SideList';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme)=>({
  list: {
    width: "45vh",
  },
  fullList: {
    width: 'auto',
  },
  card: {
    maxWidth: 345,
  },
  
});

 const SideDrawer=(props)=> {
  return (
    <div>
      <Drawer anchor="right" open={props.open} onClose={props.onClose}>
        <SideList right/>
      </Drawer>
      
    </div>
  );
}

export default withStyles(styles)(SideDrawer);
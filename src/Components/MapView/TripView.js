import React from "react";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
const TripView = (props)=> {
    return (
    <div>
        <List>
        {props.events.map(({title,date,note}) => (
        <ListItem>
          <ListItemText primary= {`${title}  ${date}  ${note}`}>
          

          </ListItemText>
        </ListItem>)
        )}
      </List>
    </div>
    )
}

export default TripView;
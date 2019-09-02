import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SaveIcon from '@material-ui/icons/Save';
import clsx from 'clsx';
const useStyles = makeStyles({
  list: {
    width: "45vh",
  },
  fullList: {
    width: 'auto',
  },
});

export default function SideDrawer(props) {
  const [title, setuserInput] = useState({userTitle:"", userInput:"" });
  const classes = useStyles();


  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
    //onClick={props.onClose}
    >



      <FormControl>

        <InputLabel htmlFor="my-input" >Title</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">how you feel about this trip</FormHelperText>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>

          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Trip date"
            //value={selectedDate}
            //onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />

        </MuiPickersUtilsProvider>
        <TextareaAutosize
          rowsMax={10}
          rows={4}
          aria-label="maximum height"
          placeholder="Describe your trip in 250 characters"
          

        />
        <Button variant="contained" size="small" className={classes.button} >
          <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
          Save
      </Button>
      </FormControl>


    </div>
  );

  console.log("props", props);
  return (
    <div>
      <Drawer anchor="right" open={props.open} onClose={props.onClose}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}
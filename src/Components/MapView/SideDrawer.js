import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SaveIcon from '@material-ui/icons/Save';
import clsx from 'clsx';
import TripView from './TripView';
const useStyles = makeStyles({
  list: {
    width: "45vh",
  },
  fullList: {
    width: 'auto',
  },
});

export default function SideDrawer(props) {
  const [userTitle, setTitle] = useState("");
  const [eventDate, setDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [events, addEvent] = useState([]);
  const classes = useStyles();
  console.log("STate", events)
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
    //onClick={props.onClose}
    >



      <FormControl>

        <InputLabel htmlFor="my-input" >Title</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => { setTitle(e.target.value) }} />
        <FormHelperText id="my-helper-text">how you feel about this trip</FormHelperText>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>

          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Trip date"
            value={eventDate}
            onChange={(date) => { setDate(date) }}
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
          onChange={(e) => { setDescription(e.target.value) }}


        />
        <Button variant="contained" size="small" className={classes.button} color="primary" onClick={() => addEvent([...events, { title: userTitle, date: eventDate, note: description }])}>
          <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)}  />
          Save
      </Button>
      </FormControl>
      <TripView events= {events}/>

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
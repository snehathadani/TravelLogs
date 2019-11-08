import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Input, FormHelperText, Paper } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SaveIcon from '@material-ui/icons/Save';
import clsx from 'clsx';
import TripView from './TripView';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const styles ={
    root: {
        backgroundColor: '#f1f8e9',
        marginLeft: "3px",
        marginRight: "3px"
    },
  };

const server = "http://localhost:5000" //for now fix this later

const SideList = (props) => {

    const [userTitle, setTitle] = useState("");
    const [eventDate, setDate] = useState(new Date());
    const [description, setDescription] = useState("");
    const [events, addEvent] = useState([]);
    useEffect(() => {
        if (props.lat !== 0 && props.lng !== 0) {
            axios.get(`${server}/api/triplog/tripsFor?lat=${props.lat}&lng=${props.lng}`)
                .then(events => addEvent(events.data.map(e => { return { title: e.locationName, date: new Date(), note: e.description, name: e.userName } })))
        }
    }, [props])

    const saveEvent = () => {
        axios.post(`${server}/api/triplog/trip`, {
            locationName: userTitle, description, country: "USA", lat: props.lat, lng: props.lng
        })
            .then(res => { addEvent([...events, { title: res.data.locationName, date: new Date(), note: res.data.description, name: res.data.userName }]) })
    }

    const { classes } = props
    return (
        <Paper className={classes.root}>
        <div
            className={classes.list}
            role="presentation">
            <FormControl fullWidth>

                <InputLabel htmlFor="my-input" > Location </InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" onChange={(e) => { setTitle(e.target.value) }} />
                <FormHelperText id="my-helper-text"> Enter a Place You Want to Log </FormHelperText>

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
                <Button variant="contained" size="small" className={classes.button} color="primary" onClick={saveEvent}>
                    <SaveIcon className={clsx(classes.leftIcon, classes.iconSmall)} />
                    Save
      </Button>
            </FormControl>
            <TripView events={events} />

        </div>
        </Paper>
        )
};

export default withStyles(styles)(SideList);
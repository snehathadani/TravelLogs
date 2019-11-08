import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid'
import { ExpansionPanelDetails } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
}));



const TripView = (props) => {


    const classes = useStyles();
    return (props.events.map(({ title, date, note, name }) => (
        <React.Fragment>

            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header">
                    <Grid container xs={12}>
                        <Grid item xs={2}>
                            <Avatar alt={name} > {name[0]} </Avatar>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                                {name}
                            </Typography>
                            <Typography component="span" variant="body2"> {`${title} - ${moment(date).fromNow()}`}</Typography>
                        </Grid>
                    </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {note}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </React.Fragment>
    )))
}

export default TripView;
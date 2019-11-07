import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
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
    return (
        <List className={classes.root} >
            {props.events.map(({ title, date, note, name }) => (
                <React.Fragment>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt={name} > {name[0]} </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                `${title} - ${moment(date).fromNow()}`}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {name}
                                    </Typography>
                                    <ExpansionPanel>
                                        <ExpansionPanelSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1c-content"
                                            id="panel1c-header"
                                        >
                                            <div>
                                             <Typography className={classes.secondaryHeading} > Click to View the TravelLog </Typography>
                                            </div>
                                            </ExpansionPanelSummary>
                                       </ExpansionPanel>
                                </React.Fragment>
                                    }
                                />
                              
                    </ListItem>
                                <Divider variant="inset" component="li" />
                </React.Fragment>
                    ))}
        </List>)
            }
            
export default TripView;
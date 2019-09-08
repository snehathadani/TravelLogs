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

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));



const TripView = (props) => {
    const classes = useStyles();
    return (
        <List>
            {props.events.map(({ title, date, note }) => (
                <React.Fragment>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" > R </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={`${title} ${moment(date).fromNow()}`}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        Ali Connors
                  </Typography>
                                    {note}
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
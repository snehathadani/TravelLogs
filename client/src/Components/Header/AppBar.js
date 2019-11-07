import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { FacebookLoginButton, InstagramLoginButton } from "react-social-login-buttons";
import { withRouter } from 'react-router';
import { Grid, Typography } from '@material-ui/core';
const styles = (theme) => ({
    root: {
        flexGrow: 1,
        color: theme.color,
    },
    title: {
        flexGrow: 1,
        textAlign: "center",
        fontWeight:"fontWeightBold",
        fontFamily:theme.typography.fontFamily,
        
        
    }
});

function ApplicationBar(props) {
    const { classes } = props;
    console.log("appbar classes", classes)

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="primary"  >
                <Toolbar >
                    <Grid container direction="row" justify="flex-end">
                        <Grid item xs={props.showAuth ? 4 : 12}  > 
                            <Typography className={classes.title} variant="h3" component="h2"> TravelLogs </Typography> 
                        </Grid>
                        {props.showAuth &&
                            (<React.Fragment>
                                <Grid item xs={2}>
                                    <FacebookLoginButton onClick={() => props.history.push('/map')} />
                                </Grid>
                                <Grid item xs={2}>
                                    <InstagramLoginButton onClick={() => props.history.push('/map')} />
                                </Grid>
                            </React.Fragment>)}
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(withStyles(styles)(ApplicationBar))
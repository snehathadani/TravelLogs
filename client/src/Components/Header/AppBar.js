import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { FacebookLoginButton, InstagramLoginButton } from "react-social-login-buttons";
import { withRouter } from 'react-router';
import { Grid } from '@material-ui/core';
const styles = (theme) => ({
    root: {
        flexGrow: 1,
        color: theme.color,
    },
    title: {
        flexGrow: 1,
        position :'absolute',
         top :"50%",
        left :"40%",
        textAlign :"center",
        
    }
});

function ApplicationBar(props) {
    const {classes} = props;
    console.log("appbar classes", classes)

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="primary"  >
                <Toolbar >

                    <Grid container direction="row" justify="flex-end">
                        <Grid item xs={8} className={classes.title}> TravelLogs</Grid>
                        <Grid item xs={2}>
                            <FacebookLoginButton onClick={() => props.history.push('/map')} />
                        </Grid>
                        <Grid item xs={2}>
                            <InstagramLoginButton onClick={() => props.history.push('/map')} />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(withStyles(styles)(ApplicationBar))
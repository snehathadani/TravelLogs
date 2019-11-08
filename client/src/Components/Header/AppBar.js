import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { FacebookLoginButton, InstagramLoginButton } from "react-social-login-buttons";
import { withRouter } from 'react-router';
import { Grid, Typography } from '@material-ui/core';
import LoginModal from '../Login/LoginModal';
import Paper from '@material-ui/core/Paper';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
const styles = (theme) => ({
    root: {
        flexGrow: 1,
        color: theme.color,
    },
    title: {
        flexGrow: 1,
        textAlign: "center",
        fontWeight: "fontWeightBold",
        fontFamily: theme.typography.fontFamily,
    },
    paper: {
        background: "blue"
      }
});




function ApplicationBar(props) {
    const { classes } = props;
    console.log("appbar classes", classes)
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
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
                                    <FacebookLoginButton onClick={() => setOpen(true)} />
                                </Grid>
                                <Grid item xs={2}>
                                    <InstagramLoginButton onClick={() => props.history.push('/map')} />
                                </Grid>

                            </React.Fragment>)}
                    </Grid>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="draggable-dialog-title"
                        
                    >
                        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                            Subscribe
                        </DialogTitle>
                        <DialogContent>
                           <LoginModal/>
                        </DialogContent>
                    </Dialog>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(withStyles(styles)(ApplicationBar))
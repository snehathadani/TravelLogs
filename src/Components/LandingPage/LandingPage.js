import React from "react";
import Grid from "@material-ui/core/Grid";
//import Button from '@material-ui/core/Button';
import FrontPageImage from './FrontPageImage';
import { FacebookLoginButton, InstagramLoginButton } from "react-social-login-buttons";
import { withRouter } from "react-router";

const LandingPage = (props)=> {
    return(
        <Grid container
  direction="column"
  justify="space-between"
  alignItems="stretch">
    <Grid item> 
    <Grid container
          direction="row"
          justify= "flex-end">
            <Grid item> 
    <FacebookLoginButton onClick={() => props.history.push('/map')} />
    </Grid>
    <Grid item> 
    <InstagramLoginButton onClick={() => props.history.push('/map')} />
    </Grid>
    </Grid>
      </Grid>  
      <Grid item xs={1}>
        <FrontPageImage height="4%"/>
        </Grid> 
  </Grid>
    );
}

export default withRouter(LandingPage);
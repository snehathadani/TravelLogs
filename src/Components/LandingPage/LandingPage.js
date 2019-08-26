import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import FrontPageImage from './FrontPageImage';
import { FacebookLoginButton, InstagramLoginButton } from "react-social-login-buttons";
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
    <FacebookLoginButton onClick={() => alert("Hello")} />
    </Grid>
    <Grid item> 
    <InstagramLoginButton onClick={() => alert("Hello")} />
    </Grid>
    </Grid>
      </Grid>  
      <Grid item xs={1}>
        <FrontPageImage height="4%"/>
        </Grid> 
  </Grid>
    );
}

export default LandingPage;
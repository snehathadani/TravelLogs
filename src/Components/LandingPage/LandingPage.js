import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
const LandingPage = (props)=> {
    return(
        <Grid
  container
  direction="column"
  justify="space-between"
  alignItems="stretch">
    <Grid item> 
    <Button variant="contained" color="secondary">Sign In</Button>
    <Button variant="contained" color="secondary">Sign Up</Button>
      </Grid>   
  </Grid>
    );
}

export default LandingPage;
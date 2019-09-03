import React from "react";
import Grid from "@material-ui/core/Grid";
//import Button from '@material-ui/core/Button';
import FrontPageImage from './FrontPageImage';
import './FrontPageImage.css';
import { withRouter } from "react-router";
import AppBar from '../Header/AppBar';


const LandingPage = (props) => {
  return (
    <Grid container
      direction="column"
      justify="center"
      alignItems="stretch">
      <Grid item xs={12}>
          <AppBar />
      </Grid>
      <Grid item xs={8}>
        <FrontPageImage/>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
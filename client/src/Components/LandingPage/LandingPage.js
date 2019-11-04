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
      <Grid item xs={12} sm={6}>
        <AppBar showAuth />
      </Grid>
      <Grid item xs={8} sm={4}>
        <FrontPageImage />
        <div className="flex-center">

          <h1 className="title" > Welcome to TravelLogs</h1>

          <p className="sub-title"> Do wish to relive the moments whenever you visit a new place? Or may be tell a friend about your trip, or advice others?
      You have come to the right place. Make a log of places you have visited, mark locations, make new friends, view what other travellers are doing, and be a guide to help others.</p>
        </div>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
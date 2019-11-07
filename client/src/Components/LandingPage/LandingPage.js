import React from "react";
import Grid from "@material-ui/core/Grid";
//import Button from '@material-ui/core/Button';
//import FrontPageImage from './FrontPageImage';
//import './FrontPageImage.css';
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router";
import AppBar from '../Header/AppBar';
//import classes from './landingPage.css';
import FrontPageImg from '../../Assets/Images/earth-run-trzown-latham.gif';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const styles = (theme) => ({
  root: {
      flexGrow: 1,
      color: theme.color,
  }
});
const LandingPage = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <AppBar showAuth/>
      </Grid>
      <div style={{ marginTop: "60px", background: "#1A3946" }} >
        <Grid container direction="row" alignItems="center">
          <Grid item xs={2}> </Grid>
          <Grid item xs={8}>
            <img alt="complex" src={FrontPageImg} />
          </Grid>

          <Grid item xs={2} />
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default LandingPage;
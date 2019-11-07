import React from 'react';
import FrontPageImg from '../../Assets/Images/earth-run-trzown-latham.gif';
import './FrontPageImage.css';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { mergeClasses } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
    root: {
            flexGrow: 1,
            overflow: 'hidden',
            padding: theme.spacing(0, 3),
          },
          paper: {
            maxWidth: 400,
            margin: `${theme.spacing(1)}px auto`,
            padding: theme.spacing(2),
         },
         img:{
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%'
         }
         
  }));


const FrontPageImage = (props) => {
    const classes = useStyles();
    return (
        <img className= {classes.img} alt = "complex" src = {FrontPageImg}/>
    );
}


export default FrontPageImage;
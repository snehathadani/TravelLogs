import React from 'react';
import FrontPageImg from  '../../Assets/Images/FrontPage.jpg';
import  styles from'./FrontPageImage.css';
const FrontPageImage = (props)=> {
    return (
        <div style={{height:props.height}} className= "Image-Grid">
        
    <img className= "img" src = {FrontPageImg} alt = "Frontpage-Image" />
    <div className="content">
        <h1 className="img-text"> Welcome to TravelLogs</h1>
        <p> The place where journy begins</p>
    </div>
    </div>
    );
}


export default FrontPageImage;
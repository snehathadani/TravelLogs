import React from 'react';
import FrontPageImg from '../../Assets/Images/FrontPage.jpg';
import './FrontPageImage.css';
const FrontPageImage = (props) => {
    return (
        <div className="Image-Grid">
            <img className="img" src={FrontPageImg} alt="Frontpage-Image" />
            <div className="flex-center">
         
               <h1 className="title" > Welcome to TravelLogs</h1>
               
                <p className= "sub-title"> Do wish to relive the moments whenever you visit a new place? Or may be tell a friend about your trip, or advice others?
            You have come to the right place. Make a log of places you have visited, mark locations, make new friends, view what other travellers are doing, and be a guide to help others.</p>
            </div>
        </div>
    );
}


export default FrontPageImage;
import React from 'react';
import FrontPageImg from '../../Assets/Images/earth-run-trzown-latham.gif';
import './FrontPageImage.css';
const FrontPageImage = (props) => {
    return (
        <div className="Image-Grid">
            <img className="img" src={FrontPageImg} alt="Frontpage-Image" />



        </div>

    );
}


export default FrontPageImage;
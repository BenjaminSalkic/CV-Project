import React from "react";
import './index.css'

const DualPic = () =>{

    return(
        <div className="dualpic">
            <div className="left-img">
                Maju
                <img src={require('../../assets/img/sarajevo.jpg')} alt="" className="backg-l"/>
            </div>
            <div className="right-img">
                <img src={require('../../assets/img/ljubljana.jpg')} alt="" className="backg-r" />
            </div>
        </div>
    );
};

export default DualPic;
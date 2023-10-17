import React from "react";
import './index.css'
import Navbar from "../../components/navbar";
import DualPic from "../../components/dualPicture";

const Basic = () =>{
    return(
        <div className="screen">
            <Navbar />
            <div className="main">
            <DualPic />
            </div>
        </div>
    );
};

export default Basic;
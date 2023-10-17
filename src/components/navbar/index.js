import React from "react";
import './index.css'
import {useNavigate} from 'react-router-dom';

//Make navbar evenualy fade in and out if mouse on top of screen
const Navbar = () =>{
    const nav = useNavigate();
    const goStart = () => nav('/');
    const goBasic = () => nav('/basic');

    return(
        <div className="navbar">
            <div className="btn" onClick={goStart}>
                START
            </div>
            <div className="btn" onClick={goBasic}>
                BASIC
            </div>
            <div className="btn">
                THIRD
            </div>
        </div>
    );
};

export default Navbar;
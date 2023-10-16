import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Parallax from "./screens/parallaxBasic/index";
import Basic from "./screens/basicComp";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Parallax />} />
                <Route path="/basic" element={<Basic />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
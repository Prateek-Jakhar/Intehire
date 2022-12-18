import React from "react";
import LeftHeader from "./LeftHeader";
import HeaderOptions from "./HeaderOptions";

const LeftMenu=()=>{
    return(
        <div className="left-menu">
        <LeftHeader/>
        <HeaderOptions/>
        </div>
    );
};

export default LeftMenu;
import React,{useState,useEffect,lazy,Suspense} from 'react';
import logo from "../../../images/design/cabriole/logo.png";
import header from "../../../images/design/cabriole/header.png";

export default function CabHeader(){
    return(
        <React.Fragment>
            <div className="cab-header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <h1><strong>Cabriole</strong> | 2020</h1>
                <div className="image-container">
                    <img src={header} alt="" />
                </div>
            </div>
        </React.Fragment>
    )
}

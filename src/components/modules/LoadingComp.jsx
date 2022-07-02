import React,{useState,useEffect} from "react";
import "../../scss/loadingComp.scss";
export default function LoadingComp(){
    useEffect(()=>{

    });
    return(
        <React.Fragment>
        <main className="loading-main">
            <h1>LOADING</h1>
            <div className="loading-bar"></div>
        </main>
        </React.Fragment>
    )
}

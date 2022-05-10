import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import NavBar from "../modules/NavBar.jsx";
import IbisMain from "./ibis-budget/IbisMain";
import SoJunior from "./so-junior/SoJunior.jsx";
import SushiShop from "./sushi-shop/SushiShop.jsx";
import Baragouin from "./baragouin/Baragouin.jsx";
import "../../scss/architect.scss";

export default function ArchitectMain(){
    useEffect(()=>{
        document.body.classList.add("architect-body")
        document.body.classList.remove("landing-page-body")
    })
    const {designName}=useParams();
    return(
        <React.Fragment>
            <header id="arch-header">
                <div className="architect-spacer"></div>
                <NavBar/>
            </header>
            {designName==="ibis-budget"?<IbisMain/>:null}
            {designName==="so-junior"?<SoJunior/>:null}
            {designName==="sushi-shop"?<SushiShop/>:null}
            {designName==="baragouin"?<Baragouin/>:null}
        </React.Fragment>
    )
}

import React,{useState,useEffect} from 'react';
import baraLogo from "../../../images/architecture/baragouin/logobaragouin.png";
import vin from "../../../images/architecture/baragouin/vin.png";
import drink from "../../../images/architecture/baragouin/boirevin.jpg";
import glasse from "../../../images/architecture/baragouin/verre.png";
import agenda from "../../../images/architecture/baragouin/programme.png";

//import {dataBase, firebaseC} from "../../../firebase.js";

export default function BaraHeader(){

    return(
        <React.Fragment>
        <div className="bara-header">
            <div className="logo-container">
                <img src={baraLogo} alt="logo baragouin" />
            </div>
            <div className="title-container">
                <h1><strong>Diplôme Baragouin</strong> | 2021</h1>
                <p>Lumière sur le noir.</p>
                <p>«Algues et coquillages fleurissent sur les vins vieillis dans les profondeurs des failles sous-marines.»</p>
                <p>Pour mon diplôme j’ai voulu réhabiliter une église désacralisée en un espace dédié aux vins vieillis en mer.</p>
                <p>Je me suis inspirée des failles sous-marines, en apportant un soin tout particulier à la lumière et l’ombre qu’une église possède au travers de ses vitraux.</p>
            </div>
        </div>
        <div className="subject">
            <h2><strong>Sujet</strong></h2>
            <div className="images-container">
                <div className="drink">
                    <div>
                        <img src={drink} alt="" />
                    </div>
                    <p>Lumière pour mûrir</p>
                </div>
                <div className="wine">
                    <div>
                        <img src={vin} alt="" />
                    </div>
                    <p>Le vin</p>
                </div>
                <div className="glasse">
                    <div>
                        <img src={glasse} alt="" />
                    </div>
                    <p>Obscurité pour viellir</p>
                </div>
            </div>
        </div>
        <div className="agenda">
            <h2><strong>Programme</strong></h2>
            <div>
                <img src={agenda} alt="" />
            </div>
        </div>
        </React.Fragment>
    )
}

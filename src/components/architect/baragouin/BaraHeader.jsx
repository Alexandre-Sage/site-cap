import React,{useState,useEffect} from 'react';

export default function BaraHeader(){
    console.log(process.env)
    return(
        <React.Fragment>
        <div className="bara-header">
            <div className="logo-container">
                <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/logobaragouin.png`} alt="logo baragouin"/>
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
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/boirevin.jpg`} alt="" />
                    </div>
                    <p>Lumière pour mûrir</p>
                </div>
                <div className="wine">
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/vin.png`} alt="" />
                    </div>
                    <p>Le vin</p>
                </div>
                <div className="glasse">
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/verre.png`} alt="" />
                    </div>
                    <p>Obscurité pour viellir</p>
                </div>
            </div>
        </div>
        <div className="agenda">
            <h2><strong>Programme</strong></h2>
            <div>
                <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/programme.png`} alt="" />
            </div>
        </div>
        </React.Fragment>
    )
}

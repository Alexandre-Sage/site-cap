import React,{useState,useEffect,lazy,Suspense} from 'react';
import logo from "../../../images/design/corpsage/logo.JPG";
import header from "../../../images/design/corpsage/header.JPG";
import face from "../../../images/design/corpsage/face.png";
import profil from "../../../images/design/corpsage/profil.png";
import maquette from "../../../images/design/corpsage/maquette.png";
import croquis from "../../../images/design/corpsage/croquis.png";
import "../../../scss/corpsage.scss";
export default function Corpsage (){
    return(
        <main id="corpsage-main">
            <div className="corp-header">
                <div className="image-container">
                    <img src={header} alt="" />
                </div>
                <div className="text-container">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <h1><strong>Corpsage</strong> | 2017</h1>
                    <p>Corpsage vous accueille dans son double ruban d’étoffe et de cuir qui s’entrelace. Celui du dossier vient parer celui de l’assise et est maintenu par le pincement de l’accoudoir.</p>
                    <p>La souplesse du dossier apporte un confort naturel dans toutes les postures d’assise. L’enveloppe extérieure à motif se dessine jusqu’au sol pour assurer le bon maintient de l’assise.</p>
                    <p>L’effet de vague créé par l’accoudoir apporte des rondeurs généreuses invitant au confort. Le choix colorimétrique fait se contraster les tissus «grain de galuchat» avec un tissus aux allures graphiques. Nul sans rappeler le confort des clubs anglais, Corpsage s’inscrit dans une modernité contemporaine.</p>
                </div>
            </div>
            <div className="corp-content">
                <div className="column">
                    <div>
                        <img src={face} alt="" />
                    </div>
                    <div>
                        <img src={profil} alt="" />
                    </div>
                </div>
                <div className="line">
                    <div className="maquette">
                        <img src={maquette} alt="" />
                    </div>
                    <div className="draw">
                        <img src={croquis} alt="" />
                    </div>
                </div>
            </div>
        </main>
    )
}

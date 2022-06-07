import React,{useState,useEffect,lazy,Suspense} from 'react';
import logo from "../../../images/design/extent/logo.png";
import scene from "../../../images/design/extent/scene.png";
import explication from "../../../images/design/extent/explication.png";
import plan from "../../../images/design/extent/plan.png";
import affiche from "../../../images/design/extent/affiche.png";
import "../../../scss/extent.scss";
export default function Extent (){
    return(
        <main id="extent-main">
            <div className="extent-header">
                <div className="logo">
                    <img src={logo} alt="logo extent"/>
                </div>
                <div className="text-container">
                    <h1><strong>Extent</strong> | 2018</h1>
                    <p>Le projet EX-TENT consiste à récupérer <span>les tentes</span> afin de créer un cerf-volant. Aujoud'hui les tentes envahissent la nature, et sont bien trop souvent abandonnées par leurs propriétaires. EX-TENT utilise la toile de tente comme une matière première pour leur donner une seconde vie et la valoriser de façon poétique. Nous proposons un kit qui rassemble tous les éléments nécessaires afin de fabriquer son propre cerf-volant.</p>
                    <p>A vous de tenter !</p>
                </div>
            </div>
            <div className="scene">
                <img src={scene} alt="mise en scène extent"/>
            </div>
            <div className="notice">
                <h2><strong>Design d'objet</strong> | Notice</h2>
                <div>
                    <img src={explication} alt="mode d'emploie extent"/>
                </div>
            </div>
            <div className="kit">
                <h2><strong>Design d'objet</strong> | Le kit Extent</h2>
                <div>
                    <img src={plan} alt="" />
                </div>
            </div>
            <div className="extent-footer">
                <img src={affiche} alt="" />
            </div>
        </main>
    )
}

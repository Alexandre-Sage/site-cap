import React,{useState,useEffect,lazy,Suspense} from 'react';
import troussoOne from "../../../images/design/trousso/trousso1.png";
import troussoTwo from "../../../images/design/trousso/trousso2.png";
import troussoThree from "../../../images/design/trousso/trousso3.png";
import troussoFour from "../../../images/design/trousso/trousso4.png";
import "../../../scss/trousso.scss";

export default function Trousso (){
    return(
        <main id="trousso-main">
            <div className="trousso-header">
                <h1><strong>Trousso</strong> | 2019</h1>
                <p>
                À la manière des clés autour de leur anneau Trousso est composé de 3 éléments identiques qui se
                mettent en forme autour de celui-ci. Les pièces indépendantes se libèrent de l’anneau par un simple
                geste, qui permet au tabouret de se déplier et d’être transporté simplement.
                </p>
            </div>
            <div className="">
                <div>
                    <img src={troussoOne} alt="" />
                </div>
                <div>
                    <img src={troussoTwo} alt="" />
                </div>
                <div>
                    <img src={troussoThree} alt="" />
                </div>
                <div>
                    <img src={troussoFour} alt="" />
                </div>
            </div>
        </main>
    )
}

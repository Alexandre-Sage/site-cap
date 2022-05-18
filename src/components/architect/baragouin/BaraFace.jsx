import React,{useState,useEffect} from 'react';
import day from "../../../images/architecture/baragouin/day.png";
import night from "../../../images/architecture/baragouin/night.png";
import faceOne from "../../../images/architecture/baragouin/face1.png";
import faceTwo from "../../../images/architecture/baragouin/face2.png";
import faceThree from "../../../images/architecture/baragouin/face3.png";

import planOne from "../../../images/architecture/baragouin/plan1.png";
import planTwo from "../../../images/architecture/baragouin/plan2.png";
import planThree from "../../../images/architecture/baragouin/plan3.png";
import planFour from "../../../images/architecture/baragouin/plan4.png";
import planFive from "../../../images/architecture/baragouin/plan5.png";
import planSix from "../../../images/architecture/baragouin/plan6.png";
export default function BaraFace(){
    return(
        <React.Fragment>
        <div className="final-project-face">
            <h2><strong>Project final</strong> | Facçades</h2>
            <div className="line-1">
                <div>
                    <img src={day} alt="Facade jour" />
                </div>
                <div>
                    <img src={night} alt="Facade nuit" />
                </div>
            </div>
            <div className="line-2">
                <div>
                    <img src={faceOne} alt="" />
                </div>
                <div>
                    <img src={faceTwo} alt="" />
                </div>
                <div>
                    <img src={faceThree} alt="" />
                </div>
            </div>
        </div>
        <div className="final-project-plan">
            <h2><strong>Projet Final</strong> | Plans</h2>
            <div>
                <div className="line-1">
                    <div>
                        <img src={planOne} alt="" />
                    </div>
                    <div>
                        <img src={planTwo} alt="" />
                    </div>
                </div>
                <div className="line-2">
                    <div>
                        <img className="end" src={planThree} alt="" />
                    </div>
                    <div>
                        <img className="start" src={planFour} alt="" />
                    </div>
                </div>
                <div className="line-3">
                    <div>
                        <img src={planFive} alt="" />
                    </div>
                    <div>
                        <img src={planSix} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

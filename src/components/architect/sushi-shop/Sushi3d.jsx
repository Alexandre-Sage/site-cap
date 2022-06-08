import React,{useState,useEffect} from "react";
import renderOne from "../../../images/architecture/sushi-shop/rendua.png";
import renderTwo from "../../../images/architecture/sushi-shop/rendub.png";
import faceOne from "../../../images/architecture/sushi-shop/face1.png";
import faceTwo from "../../../images/architecture/sushi-shop/face2.png";
import plan from "../../../images/architecture/sushi-shop/plan.png";

export default function Sushi3D(props){
    return(
        <React.Fragment>
        <div className="architecture-3d">
            <h2><strong>Architecture d'intérieur</strong> | 3D</h2>
            <div>
                <div>
                    <img src={renderOne} alt="" />
                </div>
                <div>
                    <img src={renderTwo} alt="" />
                </div>
            </div>
        </div>
        <div className="face">
            <h2><strong>Architecture d'intérieur</strong> | Façades</h2>
            <div>
                <div>
                    <img src={faceOne} alt="" />
                </div>
                <div className="face-two">
                    <img src={faceTwo} alt="" />
                </div>
            </div>
        </div>
        <div className="plan">
            <h2><strong>Architecture d'intérieur</strong> | Plan</h2>
            <div>
                <img src={plan} alt="" />
            </div>
        </div>
        </React.Fragment>
    )
}

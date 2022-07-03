import React,{useState,useEffect} from "react";

export default function Sushi3D(props){
    return(
        <React.Fragment>
        <div className="architecture-3d">
            <h2><strong>Architecture d'intérieur</strong> | 3D</h2>
            <div>
                <div>
                    <img src={`${process.env.REACT_APP_API_URL}images/architecture/sushi-shop/rendua.png`} alt="" />
                </div>
                <div>
                    <img src={`${process.env.REACT_APP_API_URL}images/architecture/sushi-shop/rendub.png`} alt="" />
                </div>
            </div>
        </div>
        <div className="face">
            <h2><strong>Architecture d'intérieur</strong> | Façades</h2>
            <div>
                <div>
                    <img src={`${process.env.REACT_APP_API_URL}images/architecture/sushi-shop/face1.png`} alt="" />
                </div>
                <div className="face-two">
                    <img src={`${process.env.REACT_APP_API_URL}images/architecture/sushi-shop/face2.png`} alt="" />
                </div>
            </div>
        </div>
        <div className="plan">
            <h2><strong>Architecture d'intérieur</strong> | Plan</h2>
            <div>
                <img src={`${process.env.REACT_APP_API_URL}images/architecture/sushi-shop/plan.png`} alt="" />
            </div>
        </div>
        </React.Fragment>
    )
}

import React,{useState,useEffect} from 'react';
export default function BaraFace(){
    return(
        <React.Fragment>
        <div className="final-project-face">
            <h2><strong>Project final</strong> | Facçades</h2>
            <div className="line-1">
                <div>
                    <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/day.png`} alt="Facade jour" />
                </div>
                <div>
                    <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/night.png`} alt="Facade nuit" />
                </div>
            </div>
            <div className="line-2">
                <div>
                    <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/face1.png`} alt="" />
                </div>
                <div>
                    <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/face2.png`} alt="" />
                </div>
                <div>
                    <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/face3.png`} alt="" />
                </div>
            </div>
        </div>
        <div className="final-project-plan">
            <h2><strong>Projet Final</strong> | Plans</h2>
            <div>
                <div className="line-1">
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/plan1.png`} alt="" />
                    </div>
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/plan2.png`} alt="" />
                    </div>
                </div>
                <div className="line-2">
                    <div>
                        <img className="end" src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/plan3.png`} alt="" />
                    </div>
                    <div>
                        <img className="start" src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/plan4.png`} alt="" />
                    </div>
                </div>
                <div className="line-3">
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/plan5.png`} alt="" />
                    </div>
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/plan6.png`} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

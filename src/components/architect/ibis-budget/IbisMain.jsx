import React from 'react';
import {Component} from "react";
import "../../../scss/ibis.scss";
//src={`${process.env.REACT_APP_API_URL}images/architecture/sushi-shop/`}
export default class IbisMain extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }componentDidMount(){
        document.body.classList.remove("bara-body")
    }render(){
        return(
            <main id="ibis-main">
                <div className="ibis-header">
                    <div className="ibis-spacer"></div>
                    <div className="header-container">
                        <div className="image-container">
                            <img src={`${process.env.REACT_APP_API_URL}images/architecture/ibis/logo.png`} alt="Logo ibis budget"/>
                        </div>
                        <div className="title-text-ctn">
                            <h1><strong>Ibis budget</strong> | 2018</h1>
                            <p>La chaine d’hotel Ibis budget nous a demandé, sous la forme d’un concours de repenser un hôtel avec
                            comme ligne directrice la Street culture. Pour ce projet, notre parti-pris a été de travailler sur un mélange
                            de trois rythmes différents, comme une variation de tempo.</p>
                            <p>En accord avec notre concept architectural et l’idée que nous nous faisons du projet — à savoir un
                            espace commun très vivant et dynamique, en opposition avec un espace beaucoup plus calme, intime
                            pour les chambres — nous avons décidé de travailler sur le concept « Rythme et opposition ».</p>
                        </div>
                    </div>
                </div>
                <div className="cut-container">
                    <h2><strong>Architecture d’intérieur</strong> | Plan</h2>
                    <div className="cut-images-container">
                        <div>
                            <h3>RDC</h3>
                            <div>
                                <img src={`${process.env.REACT_APP_API_URL}images/architecture/ibis/rdc.png`} alt="" />
                            </div>
                        </div>
                        <div>
                            <h3>R+1</h3>
                            <div>
                                <img src={`${process.env.REACT_APP_API_URL}images/architecture/ibis/r1.png`} alt="" />
                            </div>
                        </div>
                        <div>
                            <h3>Façade</h3>
                            <div>
                                <img src={`${process.env.REACT_APP_API_URL}images/architecture/ibis/facade.png`} alt="" />
                            </div>
                        </div>
                        <div className="cuts">
                            <h3>Coupes</h3>
                            <div>
                                <img src={`${process.env.REACT_APP_API_URL}images/architecture/ibis/coupe-a.png`} alt="" />
                            </div>
                            <div>
                                <img src={`${process.env.REACT_APP_API_URL}images/architecture/ibis/coupe-b.png`} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="draw-container">
                    <h2><strong>Architecture d’intérieur</strong> | Croquis</h2>
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/ibis/croquis-a.png`} alt="" />
                    </div>
                    <div className="middle-image">
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/ibis/croquis-b.png`} alt="" />
                    </div>
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/ibis/croquis-c.png`} alt="" />
                    </div>
                </div>
                <div className="typo-container">
                    <h2><strong>Communication visuelle</strong>| Typographies</h2>
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/ibis/typo-couleur.png`} alt="" />
                    </div>
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/ibis/typo-nb.png`} alt="" />
                    </div>
                </div>
                <div className="goodies-container">
                    <h2><strong>Communication visuelle</strong> |   Goodies et pictogrammes</h2>
                        <div>
                            <img src={`${process.env.REACT_APP_API_URL}images/architecture/ibis/goodies.png`} alt="" />
                        </div>
                        <div>
                            <img src={`${process.env.REACT_APP_API_URL}images/architecture/ibis/pictogramme.png`} alt="" />
                        </div>
                </div>
                <div className="web-site">
                    <h2><strong>Communication visuelle</strong>| Siteweb</h2>
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/ibis/mac.png`} alt="" />
                    </div>
                </div>
            </main>
        )
    }
}

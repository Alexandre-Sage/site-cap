import React from 'react';
import {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../../../images/architecture/ibis/logo.png";
import rdc from "../../../images/architecture/ibis/rdc.png";
import r1 from "../../../images/architecture/ibis/r1.png";
import facade from "../../../images/architecture/ibis/facade.png";
import coupeA from "../../../images/architecture/ibis/coupe-a.png";
import coupeB from "../../../images/architecture/ibis/coupe-b.png";
import croquisA from "../../../images/architecture/ibis/croquis-a.png";
import croquisB from "../../../images/architecture/ibis/croquis-b.png";
import croquisC from "../../../images/architecture/ibis/croquis-c.png";
import typoCouleur from "../../../images/architecture/ibis/typo-couleur.png";
import  typoNb from "../../../images/architecture/ibis/typo-nb.png";
import goodies from "../../../images/architecture/ibis/goodies.png";
import picto from "../../../images/architecture/ibis/pictogramme.png";
import mac from "../../../images/architecture/ibis/mac.png";
import "../../../scss/ibis.scss";
export default class IbisMain extends Component{
    constructor(props){
        super(props)
        this.state={
            image:[
                {src:logo,index: 1},
                {src:rdc,index: 2},
                {src:r1,index: 3},
                {src:facade,index: 4},
                {src:coupeA,index: 5},
                {src:coupeB,index: 6},
                {src:croquisA,index: 7},
                {src:croquisB,index: 8},
                {src:croquisC,index: 9},
                {src:typoCouleur,index: 10},
                {src:typoNb,index: 11},
                {src: goodies,index:12},
                {src: picto, index:13},
                {src: mac, index: 14}
            ]
        }
    }componentDidMount(){

    }render(){
        return(
            <main id="ibis-main">
                <div className="ibis-header">
                    <div className="ibis-spacer"></div>
                    <div className="header-container">
                        <div className="image-container">
                            <img src={logo} alt="Logo ibis budget"/>
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
                                <img src={rdc} alt="" />
                            </div>
                        </div>
                        <div>
                            <h3>R+1</h3>
                            <div>
                                <img src={r1} alt="" />
                            </div>
                        </div>
                        <div>
                            <h3>Façade</h3>
                            <div>
                                <img src={facade} alt="" />
                            </div>
                        </div>
                        <div className="cuts">
                            <h3>Coupes</h3>
                            <div>
                                <img src={coupeA} alt="" />
                            </div>
                            <div>
                                <img src={coupeB} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="draw-container">
                    <h2><strong>Architecture d’intérieur</strong> | Croquis</h2>
                    <div>
                        <img src={croquisA} alt="" />
                    </div>
                    <div className="middle-image">
                        <img src={croquisB} alt="" />
                    </div>
                    <div>
                        <img src={croquisC} alt="" />
                    </div>
                </div>
                <div className="typo-container">
                    <h2><strong>Communication visuelle</strong>| Typographies</h2>
                    <div>
                        <img src={typoCouleur} alt="" />
                    </div>
                    <div>
                        <img src={typoNb} alt="" />
                    </div>
                </div>
                <div className="goodies-container">
                    <h2><strong>Communication visuelle</strong> |   Goodies et pictogrammes</h2>
                        <div>
                            <img src={goodies} alt="" />
                        </div>
                        <div>
                            <img src={picto} alt="" />
                        </div>
                </div>
                <div className="web-site">
                    <h2><strong>Communication visuelle</strong>| Siteweb</h2>
                    <div>
                        <img src={mac} alt="" />
                    </div>
                </div>
                <Link to={"/architecture-interieur/so-junior"}>Next</Link>
            </main>
        )
    }
}

import React from 'react';
import {Component} from "react";
import "../../../scss/so.scss";

export default class SoJunior extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }componentDidMount(){
        document.body.classList.remove("bara-body")
        this.props.leftTransition()
    }render(){
        return(
            <main id="so-main">
                <div className="so-header">
                    <div className="image-container">
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/so/logo.png`} alt="" />
                    </div>
                    <div className="title-text-ctn">
                        <h1><strong>So’ Junior Suite</strong> | 2019</h1>
                        <p>Nous avons choisi comme fashion designer Paul Smith pour son utilisation des tâches. Nous souhaitons
                        implanter notre suite dans un hôtel à Moscou et de s’inspirer des couleurs de la ville. Cette réflexion nous
                        a amenées à travailler sur le concept de propagation et continuité. Dans son sens purement technique, le
                        terme propagation est employé pour désigner l’action de répandre quelque chose. La continuité, quand
                        à elle, représente un caractère inintérompu, voire permanant. Selon nous, et appliqué à ce sujet, il s’agit
                        de l’ « empiètement » d’un espace sur un autre, de la subtilité des barrières qu’il peut exister entre ces
                        espaces. Notre idée se transcrit dans une progression des espaces du moins au plus intime.</p>
                    </div>
                    <div className="images-container">
                    <div>
                        <div>
                            <img className="smith" src={`${process.env.REACT_APP_API_URL}images/architecture/so/smith.jpg`} alt="Paul Smith Chemise" />
                        </div>
                        <p>Paul Smith - Chemise</p>
                    </div>
                    <div>
                        <div>
                            <img src={`${process.env.REACT_APP_API_URL}images/architecture/so/propagation.jpg`} alt="propagation" />
                        </div>
                        <p>Propagation</p>
                    </div>
                    <div>
                        <div>
                            <img src={`${process.env.REACT_APP_API_URL}images/architecture/so/moscou.jpg`} alt="" />
                        </div>
                        <p>Moscou - Place Rouge</p>
                    </div>
                    </div>
                </div>
                <div className="plan-container">
                    <h2><strong>Architecture d’intérieur</strong> | Plan</h2>
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/so/plan.png`} alt="Plan vue de dessus" />
                    </div>
                </div>
                <div className="plan-container">
                    <h2><strong>Architecture d'intérieur</strong> | Coupes</h2>
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/so/coupe.png`} alt="Coupe" />
                    </div>
                </div>
                <div className="footer-container">
                    <h2><strong>Architecture d'intérieur</strong> | Planches matériaux</h2>
                    <div className="materials-res-ctn">
                        <div className="materials-container">
                            <div>
                                <div>
                                    <img src={`${process.env.REACT_APP_API_URL}images/architecture/so/matériaux.png`} alt="" />
                                </div>
                            </div>
                            <div className="floor">
                                <img src={`${process.env.REACT_APP_API_URL}images/architecture/so/Sol.png`} alt="" />
                            </div>
                        </div>
                        <div className="pres-container">
                            <img src={`${process.env.REACT_APP_API_URL}images/architecture/so/prescripition.png`} alt="" />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

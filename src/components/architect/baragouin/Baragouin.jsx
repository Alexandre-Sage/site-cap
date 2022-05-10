import {React,Component} from 'react';
import {Link} from "react-router-dom";
import Book from "./Book.jsx"
import "../../../scss/baragouin.scss";
import baraLogo from "../../../images/architecture/baragouin/logobaragouin.png";
import agenda from "../../../images/architecture/baragouin/programme.png";
import vin from "../../../images/architecture/baragouin/vin.png";
import drink from "../../../images/architecture/baragouin/boirevin.jpg";
import glasse from "../../../images/architecture/baragouin/verre.png";

import draw from "../../../images/architecture/baragouin/croquis.jpg";
import inside from "../../../images/architecture/baragouin/interieur.jpg";
import outside from "../../../images/architecture/baragouin/exterieur.jpg";
import scubaOne from "../../../images/architecture/baragouin/plongeur1.png";
import scubaTwo from "../../../images/architecture/baragouin/plongeur2.png";
import scubaThree from "../../../images/architecture/baragouin/plongeur3.jpeg";
import day from "../../../images/architecture/baragouin/day.png";
import night from "../../../images/architecture/baragouin/night.png";

import faceOne from "../../../images/architecture/baragouin/face1.png";
import faceTwo from "../../../images/architecture/baragouin/face2.png";
import faceThree from "../../../images/architecture/baragouin/face3.png";


export default class Baragouin extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }render(){
        return(
            <main id="bara-main">
                <div className="bara-header">
                    <div>
                        <h1><strong>Diplôme Baragouin</strong> | 2021</h1>
                        <p>Lumière sur le noir.</p>
                        <p>«Algues et coquillages fleurissent sur les vins vieillis dans les profondeurs des failles sous-marines.»</p>
                        <p>Pour mon diplôme j’ai voulu réhabiliter une église désacralisée en un espace dédié aux vins vieillis en mer.</p>
                        <p>Je me suis inspirée des failles sous-marines, en apportant un soin tout particulier à la lumière et l’ombre qu’une église possède au travers de ses vitraux.</p>
                    </div>
                    <div>
                        <img src={baraLogo} alt="logo baragouin" />
                    </div>
                    <div className="subject">
                        <h2><strong>Sujet</strong></h2>
                        <div className="image-container">
                            <div>
                                <img src={drink} alt="" />
                            </div>
                            <div>
                                <img src={vin} alt="" />
                            </div>
                            <div>
                                <img src={glasse} alt="" />
                            </div>
                        </div>
                        <div className="agenda">
                            <h2><strong></strong></h2>
                            <div>
                                <img src={agenda} alt="" />
                            </div>
                        </div>
                        <div className="place">
                            <h2><strong></strong></h2>
                            <div>
                                <div>
                                    <img src={draw} alt="" />
                                </div>
                                <div>
                                    <img src={inside} alt="" />
                                </div>
                            </div>
                            <div>
                                <p>1er pierre: 6ème siècle.</p>
                                <p>Référencement: 13ème siècle.</p>
                                <p>2ème nom: Saint-Laurent-des-vignes.</p>
                                <p>1939: Bombardement de l'église, destruction du cloché, de la vôute et des escaliers extérieurs.</p>
                                <p>1946: Reconstruction de l'église, remplacement de la vôute par une charpente en bois.</p>
                                <p>Année 70: Désacralisation de l'église, rachetée par la ville de Rennes pour en faire un lieux de stockage.</p>
                                <p>Année 2000: Prè de la bâtisse à des associations</p>
                                <p>2018: Rachat de l'église par l'artiste Delphine Lecamp pour en faire un atelier d'artiste</p>
                                <div>
                                    <img src={outside} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="position">
                            <h2><strong>Le partis pris</strong> | La faille sous-marine</h2>
                            <p>Le vin et le raisin ont un cycle très contrasté, comme une cassure,une faille...</p>
                            <div>
                                <div>
                                    <img src={scubaOne} alt="" />
                                </div>
                                <p>Elle peut-ètre droite</p>
                            </div>
                            <div>
                                <div>
                                    <img src={scubaTwo} alt="" />
                                </div>
                                <p>Sinueuse,tortueuse, sur différents niveaux</p>
                            </div>
                            <div>
                                <div>
                                    <img src={scubaThree} alt="" />
                                </div>
                                <p>Avec des cavitées</p>
                            </div>
                        </div>
                        <div className="research">
                            <h2><strong>Recherches</strong> | La faille sous-marine</h2>
                            <Book/>
                        </div>{/*Fin background*/}
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
                            <h2><strong></strong></h2>
                            <div>
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <div classList="line-3">
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="final-project-3d">
                            <h2><strong></strong></h2>
                            <div>
                                <div className="simple">
                                    <img src="" alt="" />
                                </div>
                                <div className="double">
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="double">
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                </div>
                                <div className="simple">
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>7<div className="final-project-visual">
                            <h2><strong></strong></h2>
                            <div className="line-1">
                                <div>
                                    <div className="simple">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="simple">
                                        <img src="" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <img src="" alt="" />
                                </div>
                            </div>
                            <div className="line-2">
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

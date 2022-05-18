import React,{useState,useEffect} from 'react';
import draw from "../../../images/architecture/baragouin/croquis.jpg";
import inside from "../../../images/architecture/baragouin/interieur.jpg";
import outside from "../../../images/architecture/baragouin/exterieur.jpg";

import scubaOne from "../../../images/architecture/baragouin/plongeur1.png";
import scubaTwo from "../../../images/architecture/baragouin/plongeur2.png";
import scubaThree from "../../../images/architecture/baragouin/plongeur3.jpeg";

export default function BaraPlace(){
    return(
        <React.Fragment>
        <div className="place">
            <h2><strong>Le lieux</strong> | Eglise de Saint-Laurent, Rennes, Bretagne</h2>
            <div className="column-1">
                <div className="draw">
                    <img src={draw} alt="" />
                </div>
                <div>
                    <img src={inside} alt="" />
                </div>
            </div>
            <div className="column-2">
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
        </div>
        </React.Fragment>
    )
}

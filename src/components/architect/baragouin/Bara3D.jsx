import React from 'react';
import restoOne from "../../../images/architecture/baragouin/resto1.png";
import restoTwo from "../../../images/architecture/baragouin/resto2.png";
import restoThree from "../../../images/architecture/baragouin/resto3.png";
import restoFour from "../../../images/architecture/baragouin/resto4.png";
import restoFive from "../../../images/architecture/baragouin/resto5.png";
import restoSix from "../../../images/architecture/baragouin/resto6.png";

import bookOne from "../../../images/architecture/baragouin/book1.png";
import bookTwo from "../../../images/architecture/baragouin/book2.png";
import bookThree from "../../../images/architecture/baragouin/book3.png";
import subway from "../../../images/architecture/baragouin/subway.png";

export default function Bara3D(){
    return(
        <React.Fragment>
        <div className="final-project-3d">
            <h2><strong>Projet final</strong> | 3D</h2>

            <div>
                <div className="simple">
                    <img src={restoOne} alt="" />
                </div>
                <div className="double">
                    <div>
                        <img src={restoTwo} alt="" />
                    </div>
                    <div>
                        <img src={restoThree} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className="double">
                    <div>
                        <img src={restoFour} alt="" />
                    </div>
                    <div>
                        <img src={restoFive} alt="" />
                    </div>
                </div>
                <div className="simple">
                    <img src={restoSix} alt="" />
                </div>
            </div>
        </div>
        <div className="final-project-visual">
            <h2><strong>Projet final</strong> | Communication visuelle</h2>
            <div className="line-1">
                <div className="book-container">
                    <div>
                        <img src={bookOne} alt="" />
                    </div>
                    <div>
                        <img src={bookTwo} alt="" />
                    </div>
                </div>
                <div className="image-container">
                    <img src={bookThree} alt="" />
                </div>
            </div>
            <div className="line-2">
                <img src={subway} alt="" />
            </div>
        </div>
        </React.Fragment>
    )
}

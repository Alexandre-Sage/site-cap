import React from 'react';

import cutOne from "../../../images/architecture/sushi-shop/coupe1.png";
import cutTwo from "../../../images/architecture/sushi-shop/coupe2.png";
import visual from "../../../images/architecture/sushi-shop/visual.png";
import sushiWeb from "../../../images/architecture/sushi-shop/sushiweb.png";
import sushiPhone from "../../../images/architecture/sushi-shop/sushiphone.png";
import sushiApp from "../../../images/architecture/sushi-shop/sushiapp.png";

export default  function SushiCut(props){
    return(
        <React.Fragment>
        <div className="cut">
            <h2><strong>Architecture d'intérieur</strong> | Coupes</h2>
            <div>
                <div className="first-cut">
                    <img src={cutOne} alt="" />
                </div>
                <div>
                    <img src={cutTwo} alt="" />
                </div>
            </div>
        </div>
        <div className="visual">
            <h2><strong>Communication visuelle</strong> | Goodies et packaging</h2>
            <div>
                <img src={visual} alt="" />
            </div>
        </div>
        <div className="web">
            <h2><strong>Communication visuelle</strong> | Site web et application mobile</h2>
            <div>
                <div className="image-container">
                    <img src={sushiWeb} alt="" />
                </div>
                <div className="images-container">
                    <div>
                        <img src={sushiPhone} alt="" />
                    </div>
                    <div>
                        <img src={sushiApp} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

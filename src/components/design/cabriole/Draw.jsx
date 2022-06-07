import React,{lazy,Suspense} from 'react';

import drawOne from "../../../images/design/cabriole/drawOne.png";
import drawTwo from "../../../images/design/cabriole/drawTwo.png";
import drawThree from "../../../images/design/cabriole/drawThree.png";
import drawFour from "../../../images/design/cabriole/drawFour.png";
import drawFive from "../../../images/design/cabriole/drawFive.png";
import drawSix from "../../../images/design/cabriole/drawSix.png";

export default function Draw(){
    return(
        <div id="draw-container">
            <div>
                <img src={drawOne} alt="" />
            </div>
            <div>
                <img src={drawTwo} alt="" />
            </div>
            <div>
                <img src={drawThree} alt="" />
            </div>
            <div>
                <img src={drawFour} alt="" />
            </div>
            <div>
                <img src={drawFive} alt="" />
            </div>
            <div>
                <img src={drawSix} alt="" />
            </div>
        </div>
    );
};

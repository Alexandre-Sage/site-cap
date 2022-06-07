import React,{useState,useEffect,lazy,Suspense} from 'react';

import first from "../../../images/design/cabriole/first.png";
import second from "../../../images/design/cabriole/second.png";
import third from "../../../images/design/cabriole/third.png";
import fourth from "../../../images/design/cabriole/fourth.png";
import fith from "../../../images/design/cabriole/fith.png";

export default function CabCol(){
    return(
        <div className="images-column">
            <div>
                <img src={first} alt="" />
            </div>
            <div>
                <img src={second} alt="" />
            </div>
            <div>
                <img src={third} alt="" />
            </div>
            <div>
                <img src={fourth} alt="" />
            </div>
            <div>
                <img src={fith} alt="" />
            </div>
        </div>
    )
}

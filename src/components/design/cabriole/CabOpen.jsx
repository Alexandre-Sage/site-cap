import React,{lazy,Suspense} from 'react';
import double from "../../../images/design/cabriole/double.png";
import explain from "../../../images/design/cabriole/explain.png";
const Open=lazy(async()=>await import("./Open.jsx"));

export default function CabOpen(){
    return(
        <div className="open-container">
            <div>
                <img src={double} alt="" />
            </div>
            <Open id="open"/>
            <div>
                <img src={explain} alt="" />
            </div>
        </div>
    )
}

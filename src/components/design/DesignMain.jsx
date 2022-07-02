import React,{useState,useEffect,lazy,Suspense} from 'react';
import {useParams} from "react-router-dom";
import "../../scss/design.scss";
const NavBar=lazy(async()=>await import("../modules/NavBar.jsx"));
const Corpsage=lazy(async()=>await import("./corpsage/Corpsage.jsx"));
const Trousso=lazy(async()=>await import("./trousso/Trousso.jsx"));
const Extent=lazy(async()=>await import("./extent/Extent.jsx"));
const Cabriole=lazy(async()=>await import("./cabriole/Cabriole.jsx"));

export default function DesignMain(){
    let designName=useParams().designName;
    useEffect(()=>{
        document.body.classList.add("design-body");
        document.body.classList.remove("architect-body");
        document.body.classList.remove("landing-page-body");
        document.body.classList.remove("bara-body");
    })
    const waitingComp=<div>Loading...</div>
    const [displayedComp,setComp]=useState(designName);
    designName=useParams().designName!==displayedComp?displayedComp:designName;
    return(
        <React.Fragment>
            <header id="design-header">
                <div className="design-spacer"></div>
                <Suspense>
                    <NavBar setComp={(event)=>setComp(event)}/>
                </Suspense>
            </header>
            <Suspense fallback={waitingComp}></Suspense>
            {designName==="corpsage"?<Suspense fallback={waitingComp}><Corpsage/></Suspense>:null}
            {designName==="trousso"?<Suspense fallback={waitingComp}><Trousso/></Suspense>:null}
            {designName==="extent"?<Suspense fallback={waitingComp}><Extent/></Suspense>:null}
            {designName==="cabriole"?<Suspense fallback={waitingComp}><Cabriole/></Suspense>:null}
        </React.Fragment>
    )
}

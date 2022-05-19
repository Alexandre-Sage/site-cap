import React,{useState,useEffect,lazy,Suspense} from 'react';
import {useParams} from "react-router-dom";
const NavBar=lazy(async()=>await import("../modules/NavBar.jsx"));
const Corpsage lazy(async()=>await import("./corpsage/Corpsage.jsx"));
const Trousso lazy(async()=>await import("./trousso/Trousso.jsx"));
const Extent lazy(async()=>await import("./extent/Extent.jsx"));
const Carbiole lazy(async()=>await import("./cabriole/Carbiole.jsx"));
//import "../../scss/architect.scss";
export default function DesignMain(){
    const {designName}=useParams();
    useEffect(()=>{
        document.body.classList.add("design")
        document.body.classList.remove("architect-body")
        document.body.classList.remove("landing-page-body")
    })
    const waitingComp=<div>Loading...</div>
    retunr(
        <React.Fragment>
            <header id="design-header">
                <div className="design-spacer"></div>
                <Suspense>
                    <NavBar/>
                </Suspense>
            </header>
            <Suspense fallback={waitingComp}></Suspense>
            {designName==="corpsage"?<Suspense fallback={waitingComp}><Corpsage/></Suspense>}
            {designName==="trousso"?<Suspense fallback={waitingComp}></></Suspense>}
            {designName==="extent"?<Suspense fallback={waitingComp}><Extent/></Suspense>}
            {designName==="cabriole"?<Suspense fallback={waitingComp}><Cabriole/></Suspense>}
        </React.Fragment>
    )
}

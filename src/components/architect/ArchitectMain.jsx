import React,{useState,useEffect,lazy,Suspense} from 'react';
import {useParams} from "react-router-dom";
import "../../scss/architect.scss";
const NavBar=lazy(async ()=> await import("../modules/NavBar.jsx"));
const IbisMain=lazy(async ()=> await import("./ibis-budget/IbisMain"));
const SoJunior=lazy(async ()=> await import("./so-junior/SoJunior.jsx"));
const SushiShop=lazy(async ()=>await import("./sushi-shop/SushiShop.jsx"));
const Baragouin=lazy(async ()=>await import("./baragouin/Baragouin.jsx"));
export default function ArchitectMain(){
    useEffect(()=>{
        document.body.classList.add("architect-body")
        document.body.classList.remove("landing-page-body")
    })
    const {designName}=useParams();
    async function leftTransition(){
        console.log("ok");
        const soMain=document.body.children[1].children[1];
        const header=document.body.children[1].children[0];
        soMain.classList.add("transition-main")
        header.classList.add("transition-header")
        setTimeout(()=>{
            soMain.classList.remove("transition-main")
            header.classList.remove("transition-header")
            soMain.style.width="90%";
        },3000)
        window.scrollTo(0,0)
    }
    const waitingComp=<div>Loading...</div>
    return(
        <React.Fragment>
            <header id="arch-header">
                <div className="architect-spacer"></div>
                <Suspense>
                <NavBar/>
                </Suspense>
            </header>
            {designName==="ibis-budget"?<Suspense fallback={waitingComp}><IbisMain/></Suspense>:null}
            {designName==="so-junior"?<Suspense fallback={waitingComp}><SoJunior leftTransition={()=>leftTransition()}/></Suspense>:null}
            {designName==="sushi-shop"?<Suspense fallback={waitingComp}><SushiShop leftTransition={()=>leftTransition()}/></Suspense>:null}
            {designName==="baragouin" ?<Suspense fallback={waitingComp}><Baragouin leftTransition={()=>leftTransition()}/></Suspense>:null}
        </React.Fragment>
    )
}

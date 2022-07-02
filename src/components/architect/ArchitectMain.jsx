import React,{useState,useEffect,lazy,Suspense} from 'react';
import {useParams} from "react-router-dom";
import "../../scss/architect.scss";
import NavBar from "../modules/NavBar.jsx";
import LoadingComp from "../modules/LoadingComp";
const IbisMain=lazy(async ()=> await import("./ibis-budget/IbisMain"));
const SoJunior=lazy(async ()=> await import("./so-junior/SoJunior.jsx"));
const SushiShop=lazy(async ()=>await import("./sushi-shop/SushiShop.jsx"));
const Baragouin=lazy(async ()=>await import("./baragouin/Baragouin.jsx"));
export default function ArchitectMain(){
    useEffect(()=>{
        document.body.classList.add("architect-body");
        document.body.classList.remove("landing-page-body");
    });
    let designName=useParams().designName;
    async function leftTransition(){
        console.log("ok");
        const soMain=document.body.children[1].children[1];
        const header=document.body.children[1].children[0];
        soMain.classList.add("transition-main")
        setTimeout(()=>{
            soMain.classList.remove("transition-main")
            header.classList.remove("transition-header")
            soMain.style.width="90%";
        },3000);
        window.scrollTo(0,0);
    };
    const [displayedComp,setComp]=useState(designName);
    designName=useParams().designName!==displayedComp?displayedComp:designName;
    return(
        <React.Fragment>
            <header id="arch-header">
                <div className="architect-spacer"></div>
                <NavBar setComp={(event)=>setComp(event)}/>
            </header>
            <Suspense fallBack={<LoadingComp/>}>
                {designName==="ibis-budget"?<IbisMain/>:null}
                {designName==="so-junior"?<SoJunior leftTransition={()=>leftTransition()}/>:null}
                {designName==="sushi-shop"?<SushiShop leftTransition={()=>leftTransition()}/>:null}
                {designName==="baragouin" ?<Baragouin leftTransition={()=>leftTransition()}/>:null}
            </Suspense>
        </React.Fragment>
    );
};

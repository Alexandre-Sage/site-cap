import React,{useState,useEffect,lazy,Suspense} from 'react';
import "../../../scss/cabriole.scss";
const CabHeader=lazy(async()=>await import("./CabHeader.jsx"));
const CabCol=lazy(async()=>await import("./CabCol.jsx"));
const CabOpen=lazy(async()=>await import("./CabOpen.jsx"));
const Draw=lazy(async()=>await import("./Draw.jsx"));
export default function Cabriole (){
    return(
        <main id="cabriole-main">
            <CabHeader/>
            <CabCol/>
            <CabOpen/>
            <Draw/>
        </main>
    )
}

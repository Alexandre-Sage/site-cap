import React,{lazy, Component, Suspense} from 'react';
import {Link} from "react-router-dom";
import "../../../scss/baragouin.scss";
import LoadingComp from "../../modules/LoadingComp";
const BaraHeader=lazy(async ()=> await import("./BaraHeader.jsx"));
const BaraPlace=lazy(async ()=>await import("./BaraPlace.jsx"));
const BaraFace=lazy(async ()=>await import("./BaraFace.jsx"));
const Bara3D=lazy(async ()=>await import("./Bara3D.jsx"));
const Book=lazy(async ()=>await import("./Book.jsx"));

export default class Baragouin extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    } componentDidMount(){
        document.body.classList.add("bara-body")
    } render(){
        return(
            <Suspense fallBack={<LoadingComp/>}>
            <main id="bara-main">
                    <BaraHeader/>
                    <BaraPlace/>
                <div className="research">
                    <h2><strong>Recherches</strong> | La faille sous-marine</h2>
                        <Book/>
                </div>{/*Fin background*/}
                    <BaraFace/>
                    <Bara3D/>
            </main>
            </Suspense>
        )
    }
}

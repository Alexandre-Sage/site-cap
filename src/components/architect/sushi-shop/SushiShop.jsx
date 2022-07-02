import React,{Component} from 'react';
import {Link} from "react-router-dom";
import "../../../scss/sushi.scss";

import SushiHeader from "./SushiHeader.jsx";
import Sushi3D from "./Sushi3d.jsx";
import SushiCut from "./SushiCut.jsx";
export default class SushiShop extends Component{
    constructor(props){
        super(props)
    }componentDidMount(){
        document.body.classList.remove("bara-body")
        this.props.leftTransition()
    }render(){
        return(
            <main id="sushi-main">
                <SushiHeader/>
                <Sushi3D/>
                <SushiCut/>
            </main>
        );
    };
};

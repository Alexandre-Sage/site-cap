import React,{lazy,Component,Suspense} from 'react';
import {Link} from "react-router-dom";
import "../../../scss/sushi.scss";

const SushiHeader=lazy(async()=>await import("./SushiHeader.jsx"));
const Sushi3D=lazy(async()=>await import("./Sushi3d.jsx"));
const SushiCut=lazy(async()=>await import("./SushiCut.jsx"));
export default class SushiShop extends Component{
    constructor(props){
        super(props)
        this.state={
            sushiImage:{

            }
        }
    }  async componentDidMount(){
        document.body.classList.remove("bara-body")
        this.props.leftTransition()
    }render(){
        return(
                <main id="sushi-main">
                <Suspense>
                    <SushiHeader/>
                    <Sushi3D/>
                    <SushiCut/>
                </Suspense>

            </main>
        )
    }
}

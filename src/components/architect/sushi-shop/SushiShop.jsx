import React,{lazy,Component,Suspense} from 'react';
import {Link} from "react-router-dom";
import "../../../scss/sushi.scss";

import firebase from 'firebase/compat/app';
import {getStorage, storage,ref,listAll,getDownloadURL} from "firebase/storage";
import {dataBase, firebaseApp, /*fetchStorage*/} from "../../../firebase.js";

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
        /*fetchStorage (refFolder,callBack){
            listAll(refFolder)
            .then(res=>res.items.forEach((item, i) => {
                const objectKey=item.name.split(".")[0];
                getDownloadURL(item)
                .then(res=>callBack(objectKey,res))
            }))
        }*/
        /*const storage=getStorage()
        const refFolder=ref(storage, "architect/sushi-shop")
        const callTest=(objectKey,objectValue)=>{
            this.setState({
                sushiImage:{...this.state.sushiImage,[objectKey]:objectValue}
            })
        }*/
        //this.fetchStorage(refFolder,callTest)
        //this.props.leftTransition()
    }fetchStorage (refFolder,callBack){
        listAll(refFolder)
        .then(res=>res.items.forEach((item, i) => {
            const objectKey=item.name.split(".")[0];
            getDownloadURL(item)
            .then(res=>callBack(objectKey,res))
        }))
    }render(){
        const {sushiImage}=this.state
        console.log(sushiImage);
        return(
                <main id="sushi-main">
                <Suspense>
                    <SushiHeader fetchStorage={(refFolder,callBack)=>this.fetchStorage(refFolder,callBack)}/>
                    <Sushi3D fetchStorage={(refFolder,callBack)=>this.fetchStorage(refFolder,callBack)}/>
                    <SushiCut fetchStorage={(refFolder,callBack)=>this.fetchStorage(refFolder,callBack)}/>
                </Suspense>

            </main>
        )
    }
}

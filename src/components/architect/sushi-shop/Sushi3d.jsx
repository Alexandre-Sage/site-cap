import React,{useState,useEffect} from 'react';
import firebase from 'firebase/compat/app';
import {getStorage, storage, ref, listAll, getDownloadURL} from "firebase/storage";
import {dataBase, firebaseApp, /*fetchStorage*/} from "../../../firebase.js";

/*import renderOne from "../../../images/architecture/sushi-shop/rendua.png";
import renderTwo from "../../../images/architecture/sushi-shop/rendub.png";
import faceOne from "../../../images/architecture/sushi-shop/face1.png";
import faceTwo from "../../../images/architecture/sushi-shop/face2.png";
import plan from "../../../images/architecture/sushi-shop/plan.png";*/

export default function Sushi3D(props){
    const [sushiImage,setImage]= useState({})
    const {fetchStorage}=props;
    const storage=getStorage();
    const refFolder= ref(storage, "architect/sushi-shop/sushi-3d");
    const callBack=async (objectKey,objectValue)=>await setImage(prevState=>({
        ...prevState, [objectKey]:objectValue
    }));
    useEffect(()=>{
        fetchStorage(refFolder,callBack)
    })
    return(
        <React.Fragment>
        <div className="architecture-3d">
            <h2><strong>Architecture d'intérieur</strong> | 3D</h2>
            <div>
                <div>
                    <img src={sushiImage.rendua} alt="" />
                </div>
                <div>
                    <img src={sushiImage.rendub} alt="" />
                </div>
            </div>
        </div>
        <div className="face">
            <h2><strong>Architecture d'intérieur</strong> | Façades</h2>
            <div>
                <div>
                    <img src={sushiImage.face1} alt="" />
                </div>
                <div className="face-two">
                    <img src={sushiImage.face2} alt="" />
                </div>
            </div>
        </div>
        <div className="plan">
            <h2><strong>Architecture d'intérieur</strong> | Plan</h2>
            <div>
                <img src={sushiImage.plan} alt="" />
            </div>
        </div>
        </React.Fragment>
    )
}

import React,{useState,useEffect} from 'react';
import firebase from 'firebase/compat/app';
import {getStorage, storage, ref, listAll, getDownloadURL} from "firebase/storage";
import {dataBase, firebaseApp, /*fetchStorage*/} from "../../../firebase.js";

/*import cutOne from "../../../images/architecture/sushi-shop/coupe1.png";
import cutTwo from "../../../images/architecture/sushi-shop/coupe2.png";
import visual from "../../../images/architecture/sushi-shop/visual.png";
import sushiWeb from "../../../images/architecture/sushi-shop/sushiweb.png";
import sushiPhone from "../../../images/architecture/sushi-shop/sushiphone.png";
import sushiApp from "../../../images/architecture/sushi-shop/sushiapp.png";*/

export default  function SushiCut(props){
    const [sushiImage,setImage]= useState({})
    const {fetchStorage}=props;
    const storage=getStorage();
    const refFolder= ref(storage, "architect/sushi-shop/sushi-cut");
    const callBack=async (objectKey,objectValue)=>await setImage(prevState=>({
        ...prevState, [objectKey]:objectValue
    }));
    useEffect(()=>{
        fetchStorage(refFolder,callBack)
    })
    return(
        <React.Fragment>
        <div className="cut">
            <h2><strong>Architecture d'intérieur</strong> | Coupes</h2>
            <div>
                <div className="first-cut">
                    <img src={sushiImage.coupe1} alt="" />
                </div>
                <div>
                    <img src={sushiImage.coupe2} alt="" />
                </div>
            </div>
        </div>
        <div className="visual">
            <h2><strong>Communication visuelle</strong> | Goodies et packaging</h2>
            <div>
                <img src={sushiImage.visual} alt="" />
            </div>
        </div>
        <div className="web">
            <h2><strong>Communication visuelle</strong> | Site web et application mobile</h2>
            <div>
                <div className="image-container">
                    <img src={sushiImage.sushiweb} alt="" />
                </div>
                <div className="images-container">
                    <div>
                        <img src={sushiImage.sushiphone} alt="" />
                    </div>
                    <div>
                        <img src={sushiImage.sushiapp} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

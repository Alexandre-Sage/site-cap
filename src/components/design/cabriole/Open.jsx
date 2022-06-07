import React,{useState,useEffect,lazy,Suspense} from 'react';
import "../../../scss/cabriole.scss";
import one from "../../../images/design/cabriole/open/one.jpg";
import two from "../../../images/design/cabriole/open/two.jpg";
import three from "../../../images/design/cabriole/open/three.jpg";
import four from "../../../images/design/cabriole/open/four.jpg";
import five from "../../../images/design/cabriole/open/five.jpg";
import six from "../../../images/design/cabriole/open/six.jpg";


export default function Open(){
    const [image,setJson]=useState([
        {index:0, path:one},
        {index:1, path:two},
        {index:2, path:three},
        {index:3, path:four},
        {index:4, path:five},
        {index:5, path:six},
    ]);
    const [displayedImage,setImage]=useState({display:one,index:0});

    const nextImage=(event)=>{
        const frame=document.getElementById("open-frame");
        let index=parseInt(frame.getAttribute("index"));
        if(index<image.length-1){
            index++
            setImage({
                display: image[index].path,
                index: image[index].index
            });
        }else{
            setImage({
                display: image[0].path,
                index: image[0].index
            });
        };
    };
    const previousImage=(event)=>{
        const frame=document.getElementById("open-frame");
        let index=parseInt(frame.getAttribute("index"));
        if(index>0){
            index--
            setImage({
                display: image[index].path,
                index: image[index].index
            });
        }else{
            setImage({
                display: image[image.length-1].path,
                index: image[image.length-1].index
            });
        };
    };
    return(
        <div id="open">
            <div id="previous-button" onClick={event=>previousImage(event)}><div></div></div>
            <div className="frame-container">
                <img id="open-frame" index={displayedImage.index} src={displayedImage.display} alt="" />
            </div>
            <div id="next-button" onClick={(event)=>nextImage(event)}><div></div></div>
        </div>
    );
};

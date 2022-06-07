import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import pageOne from "../../../images/architecture/baragouin/book/page1.png";
import pageTwo from "../../../images/architecture/baragouin/book/page2.png";
import pageThree from "../../../images/architecture/baragouin/book/page3.png";
import pageFour from "../../../images/architecture/baragouin/book/page4.png";
import pageFive from "../../../images/architecture/baragouin/book/page5.png";
import pageSix from "../../../images/architecture/baragouin/book/page6.png";
import background from "../../../images/architecture/baragouin/book/background.png"
import "../../../scss/book.scss";
export default function Book(){
    const [image,setImage]=useState([
        {index:0,pathOne: pageOne, pathTwo:pageTwo},
        {index:1,pathOne: pageThree, pathTwo:pageFour},
        {index:2,pathOne: pageFive, pathTwo:pageSix},
    ])
    const [displayedImages,setDisplay]=useState({
        leftPage:{path:pageOne,index:0},
        rightPage: {path:pageTwo,index:0},
    })
    const next=async()=>{
        const leftPage=document.getElementById("left-page");
        const rightPage=document.getElementById("right-page");
        let index=parseInt(leftPage.getAttribute("index"));
        index<image.length-1?index++:index=0;
        setDisplay({
            leftPage: {path:image[index].pathOne,index:image[index].index},
            rightPage: {path:image[index].pathTwo,index:image[index].index}
        });
    }
    const previous=async()=>{
        const leftPage=document.getElementById("left-page");
        const rightPage=document.getElementById("right-page");
        let index=parseInt(leftPage.getAttribute("index"));
        index>0?index--:index=image.length-1;
        setDisplay({
            leftPage: {path:image[index].pathOne,index:image[index].index},
            rightPage: {path:image[index].pathTwo,index:image[index].index}
        });
    }

    /*async function next(event){
        const imagesContainer=document.getElementById("images-container");
        imagesContainer.classList.add("transition-out")
        const displayedImage=parseInt(event.target.getAttribute("index"))
        const newImage=displayedImage<2?displayedImage+1:0
        await setTimeout(()=>{
            imagesContainer.classList.remove("transition-out")
            imagesContainer.classList.add("transition-in")
            setDisplay({
                leftPage: image[newImage].pathOne,
                rightPage: image[newImage].pathTwo
        })},550)
        event.target.setAttribute("index",newImage)
        setTimeout(()=>{
            imagesContainer.classList.remove("transition-in")
        },1300)
    }
    async function previous(event){
        const imagesContainer=document.getElementById("images-container");
        imagesContainer.classList.add("transition-out")
        const displayedImage=parseInt(event.target.getAttribute("index"))
        const newImage=displayedImage!==0?image.findIndex(image=>image.index===displayedImage)-1:2;
        await setTimeout(()=>{
            imagesContainer.classList.remove("transition-out")
            imagesContainer.classList.add("transition-in")
            setDisplay({
            leftPage: image[newImage].pathOne,
            rightPage: image[newImage].pathTwo
        })},500)
        event.target.setAttribute("index",newImage)
        setTimeout(()=>{
            imagesContainer.classList.remove("transition-in")
        },1300)
    }*/
    return(
        <React.Fragment>
            <div id="book-container">
                <img className="background" src={background} alt="" />
                <div id="images-container">
                    <div>
                        <img id="left-page" index={displayedImages.leftPage.index} src={displayedImages.leftPage.path}  alt="" />
                    </div>
                    <div>
                        <img id="right-page" src={displayedImages.rightPage.path} index="1" alt=""/>
                    </div>
                </div>
                <div className="button-container">
                    <div onClick={event=>previous(event)} index="0"><div></div></div>
                    <div className="next" onClick={(event)=>next(event)} index="0"><div></div></div>
                </div>
            </div>
        </React.Fragment>
    )

}

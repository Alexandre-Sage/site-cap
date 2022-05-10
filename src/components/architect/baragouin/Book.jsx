import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";

export default function Book(){
    const [image,setImage]=useState([
        {index:1,path:null},
        {index:3,path:null},
        {index:3,path:null}
    ])
    return(
        <React.Fragment>
            <div id="book-container">
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </React.Fragment>
    )

}

import React,{useState,useEffect} from 'react';
import "../../scss/contact.scss";

export default function Contact(){
    useEffect(()=>{
        fetch("http://localhost:4000/",{
            //methods:"GET",
            //credentials:"include",
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
    })
    const [answers,setAnswers]=useState({nom:null,prénom:null,email:null,téléphone:null, message:null});
    const answerRecord=(event)=>setAnswers({
        ...answers,[event.target.name]:event.target.value,
    });
    const sendAnswers=()=>console.log(answers);
    const textInput=(name,type)=>(
        <div>
            <label htmlFor={name}>{name.charAt(0).toUpperCase()+name.slice(1)}</label>
            <input type={type} name={name} onChange={(event)=>answerRecord(event)}/>
        </div>
    );
    console.log(answers);
    return(
        <form>
            <div>
                {textInput("nom","text")}
                {textInput("prénom","text")}
            </div>
            <div>
                {textInput("email","email")}
                {textInput("téléphone","phone")}
            </div>
            <div className="message-area">
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea className="message" name="message"></textarea>
                </div>
            </div>
            <div className="sending-button">
                Envoyer
            </div>
        </form>
    );
};

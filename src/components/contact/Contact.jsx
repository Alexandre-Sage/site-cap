import React,{useState,useEffect} from 'react';
import "../../scss/contact.scss";

export default function Contact(){
    useEffect(()=>{
        fetch("http://localhost:4000/",{
            methods:"GET",
            credentials:"include",
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
    });
    const [answers,setAnswers]=useState({nom:"",prénom:"",email:"",téléphone:"", message:""});
    const answerRecord=(event)=>setAnswers({
        ...answers,[event.target.name]:event.target.value,
    });
    const sendAnswers=()=>fetch("http://localhost:4000/contact-form",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "CSRF-token": "XSRF-TOKEN"
        },
        body: JSON.stringify(answers),
        credentials:"include",
    })
    .then(res=>res.json())
    .then(res=>console.log(res));

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
                    <textarea className="message" name="message" onChange={(event)=>answerRecord(event)}></textarea>
                </div>
            </div>
            <div className="sending-button" onClick={()=>sendAnswers()}>
                Envoyer
            </div>
        </form>
    );
};

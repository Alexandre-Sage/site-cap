import React from 'react';
import {Component} from "react";
import NavBar from "./components/modules/NavBar.jsx";
import photoCap from "./images/landing-page/capucine.jpg";
import Contact from "./components/contact/contact.jsx";
import "./scss/app.scss";

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state={
            displayContact: false
        }
    } componentDidMount(){
        document.body.classList.add("landing-page-body");
        document.body.classList.remove("architect-body")
        document.body.classList.remove("design-body")
        document.body.classList.remove("bara-body")
    } displayContact(){
        this.setState({
            displayContact:true
        });
    } render(){
        const spacerJsx=<div className="landing-page-spacer"></div>

        return(
            <React.Fragment>
                <header>
                    {window.innerWidth>1000?spacerJsx:null}
                    <NavBar contact={(event)=>this.displayContact(event)}/>
                </header>
                <main>
                    <div className="image-container">
                        <img src={photoCap} alt="Photo Capucine"/>
                    </div>
                    {this.state.displayContact?<Contact/>:<div className="text-button-container">
                        <span><h1>Capucine Sage</h1> | <h2>Architecte d'intérieur</h2></span>
                        <div>
                            <p>Diplômée en design global à l'École Bleue, je suis créative, méticuleuse, soignée avec de réelles
                            capacités d’adaptation, dynamique et sérieuse. Je dispose de références dans des agences comme
                            Laurent Maugoust Architectures, Eliott Barnes Interiors et Eric Gizard. Je serai ravie de vous présenter les
                            travaux que j’ai réalisé pour leur compte.</p>
                            <p>Mon projet professionnel est de m’orienter vers un poste comportant à la fois une dimension créative
                            ainsi qu’un aspect technique lié au bâtiment. Je pourrai ainsi affirmer les connaissances acquises dans
                            mon poste actuel et le savoir-faire artistique que j’ai su développer au cours de ma formation et de mes
                            stages. Je souhaite m'impliquer pleinement dans un projet d’entreprise et saurai faire preuve de toute la
                            rigueur qu'exige la profession.</p>
                            <p className="download-cv"><strong>Télécharger mon CV !</strong>Pour en savoir plus sur mon pacours</p>
                        </div>
                        <div id="download-button">
                            Télécharger Cv
                        </div>
                    </div>}
                </main>
            </React.Fragment>
        )
    }
}

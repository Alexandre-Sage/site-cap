import {React,Component} from 'react';
import "../../scss/nav-bar.scss";

export default class NavBar extends Component{
    constructor(props){
        super(props)
        this.state={
            displayArchitectNav:false,
            displayDesignNav: false,
            subNavJsx: null,
            architectNav:[
                {
                    date: 2018,
                    name: "Ibis Budget"
                },
                {
                    date: 2019,
                    name: "So' Junior Suite"
                },
                {
                    date: 2020,
                    name: "Sushi Shop"
                },
                {
                    date: 2021,
                    name: "Diplome Baragouin"
                },
            ],
            designNav:[
                {
                    date: 2017,
                    name: "Corpsage"
                },
                {
                    date: 2018,
                    name: "Extent"
                },
                {
                    date: 2019,
                    name: "Trousso"
                },
                {
                    date: 2020,
                    name: "Cabriole"
                },
            ]
        }
    } handleSubNavDisplay(event){
        if(event.target.classList[0] && event.target.id[0]){
            event.target.classList.remove("activated")
        }else if(event.target.id[0] && !event.target.classList[0]){
            event.target.classList.add("activated")
        }
        switch(event.target.id){
            case "architect":
            if(!this.state.displayDesignNav && !this.state.displayArchitectNav){
                this.setState({
                    subNavJsx:
                        <div >
                            {this.state.architectNav.map((item,key)=>(
                                console.log(item.name),
                                <p key={key}>{item.date} | {item.name}</p>
                            ))}
                        </div>,
                    displayArchitectNav:true,
                })
            }else if(this.state.displayDesignNav && !this.state.displayArchitectNav){
                document.getElementById("design").classList.remove("activated")
                this.setState({
                    displayDesignNav:false,
                    subNavJsx:
                        <div className="sub-nav-list">
                            {this.state.architectNav.map((item,key)=>(
                                console.log(item.name),
                                <p key={key}>{item.date} | {item.name}</p>
                            ))}
                        </div>,
                    displayArchitectNav:true,
                })
            }else{
                this.setState({displayArchitectNav:false})
            }
            break;
            case "design":
                if(!this.state.displayDesignNav && !this.state.displayArchitectNav){
                    this.setState({
                        subNavJsx:
                            <div  className="sub-nav-list">
                                {this.state.designNav.map((item,key)=>(
                                    console.log(item.name),
                                    <p key={key}>{item.date} | {item.name}</p>
                                ))}
                            </div>,
                        displayDesignNav:true,
                    })
                }else if(!this.state.displayDesignNav && this.state.displayArchitectNav){
                    document.getElementById("architect").classList.remove("activated")
                    this.setState({
                        displayArchitectNav:false,
                        subNavJsx:
                            <div  className="sub-nav-list">
                                {this.state.designNav.map((item,key)=>(
                                    console.log(item.name),
                                    <p key={key}>{item.date} | {item.name}</p>
                                ))}
                            </div>,
                        displayDesignNav:true,
                    })
                }else{
                    this.setState({displayDesignNav:false})
                }
            break;
        }
    }handleNav(){

    } render(){
        return(
                <nav>
                    <ul>
                        <li id="acceuil">Accueil</li>
                        <li id="architect" onClick={(event)=>this.handleSubNavDisplay(event)}>
                            Architecture d'intérieur
                            {this.state.displayArchitectNav?this.state.subNavJsx:null}
                        </li>
                        <li id="design" onClick={(event)=>this.handleSubNavDisplay(event)}>
                            Design d'objet
                            {this.state.displayDesignNav?this.state.subNavJsx:null}
                        </li>
                        <li id="dessin">Dessin</li>
                        <li id="contact">Contact</li>
                    </ul>
                </nav>
        )
    }
}

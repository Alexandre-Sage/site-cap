import {React,Component} from 'react';
import {Link} from "react-router-dom";
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
                    name: "Ibis Budget",
                    path: "/architecture-interieur/ibis-budget"
                },
                {
                    date: 2019,
                    name: "So' Junior Suite",
                    path: "/architecture-interieur/so-junior"
                },
                {
                    date: 2020,
                    name: "Sushi Shop",
                    path: "sushi-shop"
                },
                {
                    date: 2021,
                    name: "Diplome Baragouin",
                    path: "baragouin"
                },
            ],
            designNav:[
                {
                    date: 2017,
                    name: "Corpsage",
                    path: "#"
                },
                {
                    date: 2018,
                    name: "Extent",
                    path: "#"
                },
                {
                    date: 2019,
                    name: "Trousso",
                    path: "#"
                },
                {
                    date: 2020,
                    name: "Cabriole",
                    path: "#"
                },
            ]
        }
    } handleSubNavDisplay(event){
        if(event.target.classList[0] && event.target.id[0]){
            event.target.classList.remove("activated")
        }else if(event.target.id[0] && !event.target.classList[0]){
            setTimeout(()=>event.target.classList.add("activated"),1000)
        }
        switch(event.target.id){
            case "architect":
            if(!this.state.displayDesignNav && !this.state.displayArchitectNav){
                this.setState({
                    subNavJsx:
                        <div className="sub-nav-list">
                            <div>
                            {this.state.architectNav.map((item,key)=>(
                                <Link key={key} className="sub-link" to={item.path}>{item.date} | {item.name}</Link>
                            ))}
                            </div>
                        </div>,
                    displayArchitectNav:true,
                })
            }else if(this.state.displayDesignNav && !this.state.displayArchitectNav){
                document.getElementById("design").classList.remove("activated")
                this.setState({
                    displayDesignNav:false,
                    subNavJsx:
                        <div className="sub-nav-list">
                            <div>
                            {this.state.architectNav.map((item,key)=>(
                                console.log(item.path),
                                <Link key={key} className="sub-link" to={item.path}>{item.date} | {item.name}</Link>
                            ))}
                            </div>
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
                            <div  className="sub-nav-list design">
                                <div>
                                {this.state.designNav.map((item,key)=>(
                                    console.log(item.name),
                                    <Link key={key} className="sub-link" to={item.path}>{item.date} | {item.name}</Link>
                                ))}
                                </div>
                            </div>,
                        displayDesignNav:true,
                    })
                }else if(!this.state.displayDesignNav && this.state.displayArchitectNav){
                    document.getElementById("architect").classList.remove("activated")
                    this.setState({
                        displayArchitectNav:false,
                        subNavJsx:
                            <div  className="sub-nav-list design">
                                <div>
                                {this.state.designNav.map((item,key)=>(
                                    console.log(item.name),
                                    <Link key={key} className="sub-link" to={item.path}>{item.date} | {item.name}</Link>
                                ))}
                                </div>
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
        const array=this.state.architectNav[0];
        console.log(array);
        return(
                <nav id="nav-bar">
                    <ul>
                        <Link to="/" id="acceuil">Accueil</Link>
                        <li >
                            <p id="architect" onClick={(event)=>this.handleSubNavDisplay(event)}>Architecture d'intérieur</p>
                            {this.state.displayArchitectNav?this.state.subNavJsx:null}
                        </li>
                        <li className="design-cont">
                            <p id="design" onClick={(event)=>this.handleSubNavDisplay(event)}>Design d'objet</p>
                            {this.state.displayDesignNav?this.state.subNavJsx:null}
                        </li>
                        <Link to="/" id="dessin">Dessin</Link>
                        <Link to="#" id="contact">Contact</Link>
                    </ul>
                </nav>
        )
    }
}

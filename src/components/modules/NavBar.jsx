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
                    path: "/architecture-interieur/sushi-shop"
                },
                {
                    date: 2021,
                    name: "Diplome Baragouin",
                    path: "/architecture-interieur/baragouin"
                },
            ],
            designNav:[
                {
                    date: 2017,
                    name: "Corpsage",
                    path: "/design/corpsage"
                },
                {
                    date: 2018,
                    name: "Extent",
                    path: "/design/extent"
                },
                {
                    date: 2019,
                    name: "Trousso",
                    path: "/design/trousso"
                },
                {
                    date: 2020,
                    name: "Cabriole",
                    path: "/design/cabriole"
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
                                window.location.href.includes("architecture-interieur")?<Link key={key} className="sub-link" to="#" onClick={()=>this.props.setComp(item.path.split("/")[2])}>{item.date} | {item.name}</Link>:<Link key={key} className="sub-link" to={item.path}>{item.date} | {item.name}</Link>
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
                                window.location.href.includes("architecture-interieur")?<Link key={key} className="sub-link" to="#" onClick={()=>this.props.setComp(item.path.split("/")[2])}>{item.date} | {item.name}</Link>:<Link key={key} className="sub-link" to={item.path}>{item.date} | {item.name}</Link>
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
                                    window.location.href.includes("design")?<Link key={key} className="sub-link" to="#" onClick={()=>this.props.setComp(item.path.split("/")[2])}>{item.date} | {item.name}</Link>:<Link key={key} className="sub-link" to={item.path}>{item.date} | {item.name}</Link>
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
                                    window.location.href.includes("design")?<Link key={key} className="sub-link" to="#" onClick={()=>this.props.setComp(item.path.split("/")[2])}>{item.date} | {item.name}</Link>:<Link key={key} className="sub-link" to={item.path}>{item.date} | {item.name}</Link>
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
        const {acceuil,contactIsDisplayed}=this.props;
        return(
                <nav id="nav-bar">
                    <ul>
                        {this.props.acceuil?<Link to="#" id="acceuil" onClick={contactIsDisplayed?this.props.contact:null}>Acceuil</Link>:<Link to="/" id="acceuil" state={{contact:false}}>Accueil</Link>}
                        <li>
                            <p id="architect" onClick={(event)=>this.handleSubNavDisplay(event)}>Architecture d'int??rieur</p>
                            {this.state.displayArchitectNav?this.state.subNavJsx:null}
                        </li>
                        <li className="design-cont">
                            <p id="design" onClick={(event)=>this.handleSubNavDisplay(event)}>Design d'objet</p>
                            {this.state.displayDesignNav?this.state.subNavJsx:null}
                        </li>
                        <Link to="/" id="dessin">Dessin</Link>
                        <Link to="/" id="contact" onClick={this.props.contact} state={{contact:true}}>Contact</Link>
                    </ul>
                </nav>
        );
    };
};

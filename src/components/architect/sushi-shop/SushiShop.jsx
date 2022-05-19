import {React,Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../../../images/architecture/sushi-shop/logo.png";
import text from "../../../images/architecture/sushi-shop/text.png";
import mood from "../../../images/architecture/sushi-shop/mood.png";

import renderOne from "../../../images/architecture/sushi-shop/rendua.png";
import renderTwo from "../../../images/architecture/sushi-shop/rendub.png";

import faceOne from "../../../images/architecture/sushi-shop/face1.png";
import faceTwo from "../../../images/architecture/sushi-shop/face2.png";
import plan from "../../../images/architecture/sushi-shop/plan.png";
import cutOne from "../../../images/architecture/sushi-shop/coupe1.png";
import cutTwo from "../../../images/architecture/sushi-shop/coupe2.png";
import visual from "../../../images/architecture/sushi-shop/visual.png";
import "../../../scss/sushi.scss";
import sushiWeb from "../../../images/architecture/sushi-shop/sushiweb.png";
import sushiPhone from "../../../images/architecture/sushi-shop/sushiphone.png";
import sushiApp from "../../../images/architecture/sushi-shop/sushiapp.png";

import firebase from 'firebase/compat/app';
import {getStorage, storage,ref,listAll,getDownloadURL} from "firebase/storage";
import {dataBase, firebaseApp} from "../../../firebase.js";
export default class SushiShop extends Component{
    constructor(props){
        super(props)
        this.state={
            testBase:[]
        }
    } componentDidMount(){
        this.props.leftTransition()
        const storage=getStorage()
        const refS=ref(storage, "architect/baragouin/bara-header")
        const list=
        listAll(refS)
        .then(res=>res.items.forEach((item, i) => {
            const test= getDownloadURL(item).then(res=>this.setState({
                testBase: res
            }))

        }))
    }render(){
        const {testBase}=this.state
        console.log(testBase);
        return(
                <main id="sushi-main">
                <img src={`${testBase}`} alt="" />
                    <img src="gs://site-cap-a764f.appspot.com/architect/baragouin/bara-header/boirevin.jpg " alt="" />
                <div className="sushi-header">
                    <div className="title-logo-container">
                        <div className="logo-container">
                            <img src={logo} alt="" />
                        </div>
                        <div className="text-container">
                            <div className="image-container">
                                <img src={text} alt="" />
                            </div>
                            <div className="title-container">
                                <h2><strong>Sushishop</strong> | 2020</h2>
                                <p>«Et si le futur n’était pas noir?»</p>
                                <p>Voilà la nouvelle problématique pour le futur concept Sushi shop. Sushi shop, marque française symbôle de la culture japonnaise, un doux mélange rempli d’inspirations et délicatesse. C’est ainsi que nous percevons ce nouveau sujet. Comment représenter le Japon et la France dans un même espace ? C’est tout l’objectif de notre rencontre. Un équilibre fragil qui vogue entre tradition et modernité, accumulation et légereté, dialogue et silence...</p>
                                <p>Nous voulons travaillé l’évidence par la simplicité, provoquer la rencontre entre deux univers bien différents et pourtant semblables.</p>
                                <p>Le bois symbôle de naturel et de tradition va venir discretement cotoyer le blanc, pureté absolue. Un mélange fin, délicat et tout en douceur pour respecter la pudeur du Japon. Une transition douce qui donnera du sens au nouveau Sushi shop de demain. L’histoire d’une rencontre, qui fera vivre aux clients une nouvelle expérience riche en sens et en émotions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="header-image-container">
                        <img src={mood} alt="" />
                    </div>
                </div>
                <div className="architecture-3d">
                    <h2><strong>Architecture d'intérieur</strong> | 3D</h2>
                    <div>
                        <div>
                            <img src={renderOne} alt="" />
                        </div>
                        <div>
                            <img src={renderTwo} alt="" />
                        </div>
                    </div>
                </div>
                <div className="face">
                    <h2><strong>Architecture d'intérieur</strong> | Façades</h2>
                    <div>
                        <div>
                            <img src={faceOne} alt="" />
                        </div>
                        <div className="face-two">
                            <img src={faceTwo} alt="" />
                        </div>
                    </div>
                </div>
                <div className="plan">
                    <h2><strong>Architecture d'intérieur</strong> | Plan</h2>
                    <div>
                        <img src={plan} alt="" />
                    </div>
                </div>
                <div className="cut">
                    <h2><strong>Architecture d'intérieur</strong> | Coupes</h2>
                    <div>
                        <div className="first-cut">
                            <img src={cutOne} alt="" />
                        </div>
                        <div>
                            <img src={cutTwo} alt="" />
                        </div>
                    </div>
                </div>
                <div className="visual">
                    <h2><strong>Communication visuelle</strong> | Goodies et packaging</h2>
                    <div>
                        <img src={visual} alt="" />
                    </div>
                </div>
                <div className="web">
                    <h2><strong>Communication visuelle</strong> | Site web et application mobile</h2>
                    <div>
                        <div className="image-container">
                            <img src={sushiWeb} alt="" />
                        </div>
                        <div className="images-container">
                            <div>
                                <img src={sushiPhone} alt="" />
                            </div>
                            <div>
                                <img src={sushiApp} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

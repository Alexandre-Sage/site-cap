import React,{useState,useEffect} from 'react';
import logo from "../../../images/architecture/sushi-shop/logo.png";
import text from "../../../images/architecture/sushi-shop/text.png";
import mood from "../../../images/architecture/sushi-shop/mood.png";

export default  function SushiHeader(props){
    return(
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
    )
}

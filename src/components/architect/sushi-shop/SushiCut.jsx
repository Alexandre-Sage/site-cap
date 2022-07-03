import React from 'react';

export default  function SushiCut(props){
    return(
        <React.Fragment>
        <div className="cut">
            <h2><strong>Architecture d'intérieur</strong> | Coupes</h2>
            <div>
                <div className="first-cut">
                    <img src={`${process.env.REACT_APP_API_URL}images/architecture/sushi-shop/coupe1.png`} alt="" />
                </div>
                <div>
                    <img src={`${process.env.REACT_APP_API_URL}images/architecture/sushi-shop/coupe2.png`} alt="" />
                </div>
            </div>
        </div>
        <div className="visual">
            <h2><strong>Communication visuelle</strong> | Goodies et packaging</h2>
            <div>
                <img src={`${process.env.REACT_APP_API_URL}images/architecture/sushi-shop/visual.png`} alt="" />
            </div>
        </div>
        <div className="web">
            <h2><strong>Communication visuelle</strong> | Site web et application mobile</h2>
            <div>
                <div className="image-container">
                    <img src={`${process.env.REACT_APP_API_URL}images/architecture/sushi-shop/sushiweb.png`} alt="" />
                </div>
                <div className="images-container">
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/sushi-shop/sushiphone.png`} alt="" />
                    </div>
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/sushi-shop/sushiapp.png`} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

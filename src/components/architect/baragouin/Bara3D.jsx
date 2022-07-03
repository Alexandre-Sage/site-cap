import React from 'react';

export default function Bara3D(){
    return(
        <React.Fragment>
        <div className="final-project-3d">
            <h2><strong>Projet final</strong> | 3D</h2>

            <div>
                <div className="simple">
                    <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/resto1.png`}
 alt="" />
                </div>
                <div className="double">
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/resto2.png`}
 alt="" />
                    </div>
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/resto3.png`}
 alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className="double">
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/resto4.png`}
 alt="" />
                    </div>
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/resto5.png`}
 alt="" />
                    </div>
                </div>
                <div className="simple">
                    <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/resto6.png`}
 alt="" />
                </div>
            </div>
        </div>
        <div className="final-project-visual">
            <h2><strong>Projet final</strong> | Communication visuelle</h2>
            <div className="line-1">
                <div className="book-container">
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/book1.png`}
 alt="" />
                    </div>
                    <div>
                        <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/book2.png`}
 alt="" />
                    </div>
                </div>
                <div className="image-container">
                    <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/book3.png`}
 alt="" />
                </div>
            </div>
            <div className="line-2">
                <img src={`${process.env.REACT_APP_API_URL}images/architecture/baragouin/subway.png`}
 alt="" />
            </div>
        </div>
        </React.Fragment>
    )
}

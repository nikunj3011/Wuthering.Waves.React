import React from 'react';

const SideBar02 = () => {
    return (
        <div className="sidebar">
            <div className="project-information">
                <h6 className="widget-title">
                    Project Information
                    <span className="title-line"></span>
                </h6>
                <ul>
                    <li>
                        <span className="data">Project Name:</span> <span className="value">California Texa</span>
                    </li>
                    <li>
                        <span className="data">Architect:</span> <span className="value">Jonathon Husten</span>
                    </li>
                    <li>
                        <span className="data">Concept:</span> <span className="value">Retro with Modern</span>
                    </li>
                    <li>
                        <span className="data">Date:</span> <span className="value">21/03/2019 To 15/12/2022</span>
                    </li>
                    <li>
                        <span className="data">Location:</span> <span className="value">California, USA</span>
                    </li>

                </ul>

                <div className="project-share">
                    <ul>
                        <li>Share:</li>
                        <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                        <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                        <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                        <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                        <li><a href="#"><i className="bi bi-pinterest"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar02;
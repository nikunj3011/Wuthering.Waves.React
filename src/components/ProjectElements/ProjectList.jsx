import React from 'react';

const ProjectList = () => {
    return (
        <ol className="project-list">
            <li className="project-list-item">
                <a href="/project-details-2">Interior Design <img src="images/portfolio/2.jpg" alt="img" className="hidden-image" /></a>
            </li>
            <li className="project-list-item">
                <a href="/project-details-2">Architecture <img src="images/portfolio/3.jpg" alt="img" className="hidden-image" /></a>
            </li>
            <li className="project-list-item">
                <a href="/project-details-2">Product Design <img src="images/portfolio/4.jpg" alt="img" className="hidden-image" /></a>
            </li>
            <li className="project-list-item">
                <a href="/project-details-2">Landscape Design <img src="images/portfolio/5.jpg" alt="img" className="hidden-image" /></a>
            </li>
            <li className="project-list-item">
                <a href="/project-details-2">Blueprint Design <img src="images/portfolio/6.jpg" alt="img" className="hidden-image" /></a>
            </li>
        </ol>
    );
};

export default ProjectList;
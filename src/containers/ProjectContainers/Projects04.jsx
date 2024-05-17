import React from 'react';
import ProjectList from '../../components/ProjectElements/ProjectList';
import SubHeading04 from '../../components/SubHeading04';

const Projects04 = () => {
    return (
        <section className="project-list-view bg-dark-200">
            <div className="container">
                <div className="section-header">
                    <SubHeading04 title="Skill of somebody reflects through the work he/she has been done. So, Please have a look on the projects We have done" />
                </div>

                <ProjectList />

                <div className="details_link"><a href="/project-details"><span className="link_text">View Details</span> <span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
            </div>
        </section>
    );
};

export default Projects04;
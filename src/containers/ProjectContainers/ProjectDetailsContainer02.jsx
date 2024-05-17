import React from 'react';
import ProjectDetailsInner02 from '../../components/ProjectElements/ProjectDetailsInner02';
import SideBar02 from '../../components/SideBar02';

const ProjectDetailsContainer02 = () => {
    return (
        <section className="project-details bg-dark-200">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <div className="post-image">
                            <img src="images/portfolio/details/sl-1.jpg" alt="image" />
                        </div>
                        <ProjectDetailsInner02 />
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <SideBar02 />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailsContainer02;
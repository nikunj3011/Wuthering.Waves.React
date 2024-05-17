import React from 'react';
import PageBanner from '../../containers/PageBanner';
import ProjectDetailsContainer02 from '../../containers/ProjectContainers/ProjectDetailsContainer02';

const ProjectDetails02 = () => {
    return (
        <main className="wrapper">
            <PageBanner pageTitle='Projects' title="Project Details" activePage="California Mansion Residence" />
            <ProjectDetailsContainer02 />
        </main>
    );
};

export default ProjectDetails02;
import React from 'react';
import PageBanner from '../../containers/PageBanner';
import ProjectDetailsContainer from '../../containers/ProjectContainers/ProjectDetailsContainer';

const ProjectDetails = () => {
    return (
        <main className="wrapper">
            <PageBanner pageTitle='Projects' title="Project Details" activePage="California Mansion Residence" />
            <ProjectDetailsContainer />

        </main>
    );
};

export default ProjectDetails;
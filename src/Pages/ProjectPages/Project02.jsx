import React from 'react';
import PageBanner03 from '../../containers/PageBanner03';
import ProjectGallery02 from '../../containers/ProjectContainers/ProjectGallery02';

const Project02 = () => {
    return (
        <>
            <PageBanner03 title="Projects" activePage="Projects" />
            <ProjectGallery02 text='Load More' className='btn gray' />

        </>
    );
};

export default Project02;
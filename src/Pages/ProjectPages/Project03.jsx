import React from 'react';
import PageBanner03 from '../../containers/PageBanner03';
import ProjectGallery03 from '../../containers/ProjectContainers/ProjectGallery03';

const Project03 = () => {
    return (
        <>
            <PageBanner03 title="Projects" activePage="Projects" />
            <ProjectGallery03 text='Load More' className='btn gray' />
        </>
    );
};

export default Project03;
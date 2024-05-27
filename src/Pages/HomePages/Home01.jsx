import React from 'react';
import AboutContainer from '../../containers/AboutContainers/AboutContainer';
import ProjectGallery from '../../containers/ProjectContainers/ProjectGallery';
import Sliders from '../../containers/SliderContainers/Sliders';

const Home01 = () => {
    return (
        <div className="wrapper">
            <Sliders />
            <AboutContainer />
            <ProjectGallery />
        </div>
    );
};

export default Home01;
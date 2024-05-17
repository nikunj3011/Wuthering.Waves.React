import React from 'react';
import AboutContainer from '../../containers/AboutContainers/AboutContainer';
import Blogs from '../../containers/Blogs';
import FormContainer from '../../containers/FormContainer';
import FunFacts from '../../containers/FunFacts/FunFacts';
import ProjectGallery from '../../containers/ProjectContainers/ProjectGallery';
import RunningProjects from '../../containers/RunningProjects';
import Services from '../../containers/Services';
import Sliders from '../../containers/SliderContainers/Sliders';
import Testimonials from '../../containers/Testimonials';

const Home01 = () => {
    return (
        <div className="wrapper">
            <Sliders />
            <Services />
            <AboutContainer />
            <FunFacts className='funfacts bg_1' />
            <RunningProjects />
            <ProjectGallery />
            <Testimonials />
            <Blogs />
            <FormContainer />
        </div>
    );
};

export default Home01;
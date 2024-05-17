import React from 'react';
import AboutContainer from '../../containers/AboutContainers/AboutContainer';
import Blogs from '../../containers/Blogs';
import FormContainer from '../../containers/FormContainer';
import FunFacts from '../../containers/FunFacts/FunFacts';
import ProjectGallery from '../../containers/ProjectContainers/ProjectGallery';
import RunningProjects from '../../containers/RunningProjects';
import Services from '../../containers/Services';
import Sliders08 from '../../containers/SliderContainers/Sliders08';
import Testimonials from '../../containers/Testimonials';

const Home08 = () => {
    return (
        <div className="wrapper">
            <Sliders08 />
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

export default Home08;
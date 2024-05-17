import React from 'react';
import AboutContainer02 from '../../containers/AboutContainers/AboutContainer02';
import FormContainer from '../../containers/FormContainer';
import FunFacts02 from '../../containers/FunFacts/FunFacts02';
import ProjectGallery09 from '../../containers/ProjectContainers/ProjectGallery09';
import ServiceContainer04 from '../../containers/ServiceContainer04';
import Sliders09 from '../../containers/SliderContainers/Sliders09';
import TeamContainer02 from '../../containers/TeamContainers/TeamContainer02';
import Testimonials from '../../containers/Testimonials';

const Home10 = () => {
    return (
        <div className="wrapper">
            <Sliders09 />
            <AboutContainer02 />
            <ServiceContainer04 />
            <FunFacts02 className='funfacts bg_3' />
            <ProjectGallery09 />
            <Testimonials />
            <TeamContainer02 />
            <FormContainer />
        </div>
    );
};

export default Home10;
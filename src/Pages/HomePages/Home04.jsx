import React from 'react';
import Blogs from '../../containers/Blogs';
import FormContainer from '../../containers/FormContainer';
import Projects04 from '../../containers/ProjectContainers/Projects04';
import Sliders04 from '../../containers/SliderContainers/Sliders04';
import Testimonials from '../../containers/Testimonials';

const Home04 = () => {
    return (
        <div className="wrapper">
            <Sliders04 />
            <Projects04 />
            <Testimonials />
            <Blogs />
            <FormContainer />
        </div>
    );
};

export default Home04;
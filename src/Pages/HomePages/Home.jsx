import React from 'react';
import AboutContainer from '../../containers/AboutContainers/AboutContainer';
import Sliders from '../../containers/SliderContainers/Sliders';

const Home = () => {
    return (
        <div className="wrapper">
            <Sliders />
            <AboutContainer />
        </div>
    );
};

export default Home;
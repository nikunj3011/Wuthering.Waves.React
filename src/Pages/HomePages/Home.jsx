import React from 'react';
import AboutContainer from '../../containers/AboutContainers/AboutContainer';
import Sliders from '../../containers/SliderContainers/Sliders';
import ImageContainer from '../../containers/ImageContainer';

const Home = () => {
    return (
        <div className="wrapper">
            <Sliders />
            {/* <ImageContainer /> */}
            <ImageContainer data={["images/main_images/screenshots/1.webp","images/main_images/screenshots/2.webp","images/main_images/screenshots/3.webp","images/main_images/screenshots/4.webp",]}/>
            <AboutContainer />
        </div>
    );
};

export default Home;
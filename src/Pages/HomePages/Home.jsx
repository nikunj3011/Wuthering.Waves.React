import React from 'react';
import AboutContainer from '../../containers/AboutContainers/AboutContainer';
import Sliders from '../../containers/SliderContainers/Sliders';
import ImageContainer from '../../containers/ImageContainer';
import SubHeading from '../../components/SubHeading';
import SectionHeader from '../../components/SectionHeader';
import InterAdsComponent from '../Ads/InterAdsComponent';

const Home = () => {
    return (
        <div className="wrapper">
            <Sliders />
            {/* <ImageContainer /> */}
            <InterAdsComponent/>

            <ImageContainer data={["images/main_images/screenshots/1.webp","images/main_images/screenshots/2.webp","images/main_images/screenshots/3.webp","images/main_images/screenshots/4.webp",]}/>
            <InterAdsComponent/>
            <AboutContainer />
        </div>
    );
};

export default Home;
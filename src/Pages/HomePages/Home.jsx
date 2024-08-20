import React from 'react';
import AboutContainer from '../../containers/AboutContainers/AboutContainer';
import Sliders from '../../containers/SliderContainers/Sliders';
import ImageContainer from '../../containers/ImageContainer';
import SubHeading from '../../components/SubHeading';
import SectionHeader from '../../components/SectionHeader';
import InterAdsComponent from '../Ads/InterAdsComponent';
import charactersData from '../../jsonData/characters.json';

import CharacterCard from '../../components/ProjectElements/CharacterCard';
const Home = () => {
    return (
        <div className="wrapper">
            <Sliders />
            {/* <ImageContainer /> */}
            {/* <InterAdsComponent/> */}
            {
            <div className="large_font">
            </div>
            }
            <AboutContainer />

            {
                <section className="projects packery">
                <div className="container">
                    <div className="section-desc row align-items-center justify-content-center">
                    <SubHeading title="Characters"></SubHeading>
                    {
                        charactersData.map(data => <CharacterCard
                            key={data.id}
                            data={data}
                        />)
                    }
                    </div>
                </div></section>}
            {/* <InterAdsComponent/> */}
            <ImageContainer data={["images/main_images/screenshots/1.webp","images/main_images/screenshots/2.webp","images/main_images/screenshots/3.webp","images/main_images/screenshots/4.webp",]}/>

        </div>
    );
};

export default Home;
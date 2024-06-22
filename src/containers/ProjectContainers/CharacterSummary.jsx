import Isotope from 'isotope-layout';
import React, { useEffect, useState } from 'react';
import SectionGridLines from '../../components/SectionGridLines';
import SectionHeader from '../../components/SectionHeader';
import charactersData from '../../jsonData/charactersdetails.json';
import CharacterCard from '../../components/ProjectElements/CharacterCard';
import LazyLoad from 'react-lazyload';

const CharacterSummary = ({id}) => {
    const currentCharacter = charactersData.filter(function (n){
        return n.id===id;
    })[0];

    return (
        <section className="projects packery">
            <SectionGridLines></SectionGridLines>
            <div className="large_font">
                <SectionHeader title={currentCharacter.name}></SectionHeader>
            </div>
            <div className="container">
                {/* <div className="section-desc row align-items-center justify-content-center" style={{backgroundColor:'black', backgroundImage:`url(${currentCharacter.img})`, backgroundRepeat: "no-repeat"}}> */}
                <div className="section-desc row align-items-center justify-content-center">
                    <div className="col-lg-2 text-left">
                    </div>
                    <div className="col-lg-4 text-right">
                        <LazyLoad once>
                            {currentCharacter.tag === "Aero" && <img src="images/main_images/elements/element_aero.webp" alt="" height="25px" width="25px" className="iconTopLeft"/>}
                            {currentCharacter.tag === "Electro" && <img src="images/main_images/elements/element_electro.webp" alt="" height="25px" width="25px" className="iconTopLeft"/>}
                            {currentCharacter.tag === "Fusion" && <img src="images/main_images/elements/element_fusion.webp" alt="" height="25px" width="25px" className="iconTopLeft"/>}
                            {currentCharacter.tag === "Glacio" && <img src="images/main_images/elements/element_glacio.webp" alt="" height="25px" width="25px" className="iconTopLeft"/>}
                            {currentCharacter.tag === "Havoc" && <img src="images/main_images/elements/element_havoc.webp" alt="" height="25px" width="25px" className="iconTopLeft"/>}
                            {currentCharacter.tag === "Spectro" && <img src="images/main_images/elements/element_spectro.webp" alt="" height="25px" width="25px" className="iconTopLeft"/>}
                            <img className="item_image" src={currentCharacter.img} alt="" style={{background: currentCharacter.bStyle}} />
                        </LazyLoad>
                        {/* <img src={currentCharacter.img} alt={currentCharacter.name}/> */}
                    </div>
                    <div className="col-lg-6 text-left">
                        <div style={{fontSize:100, color:'white'}}>
                            {currentCharacter.name}
                        </div>
                        <div style={{paddingTop:25}}>
                            {currentCharacter.intro}
                        </div>
                    </div>
                </div>
                {/* <div className="section-header text-center has_line">
                    <PageHeder className='text-white' title="Project Gallery"></PageHeder>
                    <div className="section-desc row align-items-center justify-content-center">
                        <div className="col-lg-6 text-end">
                            <Paragraph text="We will continue to grow and evolve Mrittik for the betterment of our clients and our people. Vision includes the continual expansion."></Paragraph>
                        </div>
                        <div className="col-lg-6 text-start">
                            <Paragraph text="We will continue to grow and evolve Mrittik for the betterment of our clients and our people. Vision includes the continual expansion."></Paragraph>
                        </div>
                    </div>
                </div>

                <div className="portfolio-filters-content">
                    <div className="filters-button-group">
                        <button className="button" onClick={handleFilterKeyChange('*')}>All <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('exterior')}>Exterior <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('residences')}>Residences <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('interiors')}>Interiors <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('landscape')}>Landscape <sup className="filter-count"></sup></button>
                    </div>
                </div> */}
                {/* <div className="section-desc row align-items-center justify-content-center">
                        {
                            characters.map(data => <CharacterCard
                                key={data.id}
                                data={data}
                            />)
                        }
                </div> */}
                {/* <div className="grid gutter-20 clearfix">
                    <div className="grid-sizer"></div>

                    {
                        characters.map(data => <ProjectCard
                            key={data.id}
                            data={data}
                        />)
                    }
                </div> */}
                {/* <LoadmoreBtn text='Discover All Projects' className='btn olive w-100' /> */}
            </div>
        </section>
    );
};

export default CharacterSummary;
import Isotope from 'isotope-layout';
import React, { useEffect, useState } from 'react';
import SectionGridLines from '../../components/SectionGridLines';
import SectionHeader from '../../components/SectionHeader';
import echoesData from '../../jsonData/echoes.json';
import EchoesCard from '../../components/ProjectElements/EchoesCard';

const EchoesGallery = () => {
    const echoes = echoesData;

    const [filterKey, setFilterKey] = useState('*')

    function getRandom(){
        var min = 1;
        var max = 1000;
        return  min + (Math.random() * (max-min));
    }

    useEffect(() => {
        // Isotope.current = new Isotope('.grid', {
        //     itemSelector: '.grid-item',
        //     percentPosition: true,
        //     // layoutMode: 'packery',
        //     // masonry: {
        //     //     columnWidth: '.grid-sizer'
        //     // },
        //     transformsEnabled: true,
        //     transitionDuration: "700ms",
        //     resize: true,
        //     fitWidth: true,
        //     columnWidth: '.grid-sizer',
        //     options: {
        //         layoutMode: 'masonry',
        //         masonry: { columnWidth: 100 },
        //         transitionDuration: '0.5s'
        //     }
        // })

        // // cleanup
        // return () => Isotope.current.destroy()
    }, []);

    // handling filter key change
    // useEffect(() => {
    //     filterKey === '*'
    //         ? Isotope.current.arrange({ filter: `*` })
    //         : Isotope.current.arrange({ filter: `.${filterKey}` })
    // }, [filterKey]);

    const handleFilterKeyChange = key => () => setFilterKey(key)

    return (
        <section className="projects packery">
            <SectionGridLines></SectionGridLines>
            <div className="large_font">
                <SectionHeader title="Echoes"></SectionHeader>
            </div>
            <div className="container">
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
                <div className="section-desc row align-items-center justify-content-center">
                        {
                            echoes.map(data => <EchoesCard
                                key={getRandom()}
                                data={data}
                            />)
                        }
                </div>
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

export default EchoesGallery;
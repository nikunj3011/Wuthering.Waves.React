import Isotope from 'isotope-layout';
import React, { useEffect, useState } from 'react';
import PageHeder from '../../components/PageHeder';
import Paragraph from '../../components/Paragraph';
import ProjectCard from '../../components/ProjectElements/ProjectCard';
import SectionGridLines from '../../components/SectionGridLines';
import SectionHeader from '../../components/SectionHeader';
import gearSetsData from '../../jsonData/gearsets.json';
import GearSetsCard from '../../components/ProjectElements/GearSetsCard';

const GearSetsSummary = () => {
    const gearSets = gearSetsData;

    const [filterKey, setFilterKey] = useState('*')

    useEffect(() => {
        Isotope.current = new Isotope('.grid', {
            itemSelector: '.grid-item',
            percentPosition: true,
            // layoutMode: 'packery',
            // masonry: {
            //     columnWidth: '.grid-sizer'
            // },
            transformsEnabled: true,
            transitionDuration: "700ms",
            resize: true,
            fitWidth: true,
            columnWidth: '.grid-sizer',
            options: {
                layoutMode: 'masonry',
                masonry: { columnWidth: 100 },
                transitionDuration: '0.5s'
            }
        })

        // cleanup
        return () => Isotope.current.destroy()
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
                <SectionHeader title="Characters"></SectionHeader>
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
                            gearSets.map(data => <GearSetsCard
                                key={data.id}
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

export default GearSetsSummary;
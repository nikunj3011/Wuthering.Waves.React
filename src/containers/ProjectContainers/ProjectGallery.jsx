import Isotope from 'isotope-layout';
import React, { useEffect, useState } from 'react';
import PageHeder from '../../components/PageHeder';
import Paragraph from '../../components/Paragraph';
import ProjectCard from '../../components/ProjectElements/ProjectCard';
import SectionGridLines from '../../components/SectionGridLines';
import SectionHeader from '../../components/SectionHeader';

const ProjectGallery = () => {
    const ProjectData01 = [
        {
            id: '1',
            img: 'images/portfolio/packery/2.jpg',
            details: 'Sunlight in the Room',
            tag: 'interiors'
        },
        {
            id: '2',
            img: 'images/portfolio/packery/3.jpg',
            details: 'Find your own self invintage lake house',
            tag: 'residences'
        },
        // {
        //     id: '3',
        //     img: 'images/portfolio/packery/4.jpg',
        //     details: 'Well decor house in Sydney',
        //     tag: 'landscape exterior'
        // },
        {
            id: '4',
            img: 'images/portfolio/packery/5.jpg',
            details: 'Huge large area Bedroom',
            tag: 'landscape'
        },
        {
            id: '5',
            img: 'images/portfolio/packery/6.jpg',
            details: 'Clean water in the swiming pool',
            tag: 'interiors'
        },
        {
            id: '6',
            img: 'images/portfolio/packery/7.jpg',
            details: 'Newyork golf club house',
            tag: 'interiors'
        },
        {
            id: '7',
            img: 'images/portfolio/packery/8.jpg',
            details: 'California young menz club',
            tag: 'exterior'
        },

    ];

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
    useEffect(() => {
        filterKey === '*'
            ? Isotope.current.arrange({ filter: `*` })
            : Isotope.current.arrange({ filter: `.${filterKey}` })
    }, [filterKey]);

    const handleFilterKeyChange = key => () => setFilterKey(key)


    return (
        <section className="projects packery">
            <SectionGridLines></SectionGridLines>
            <div className="large_font">
                <SectionHeader title="Gallery"></SectionHeader>
            </div>
            <div className="container">
                <div className="section-header text-center has_line">
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
                </div>
                <div className="grid gutter-20 clearfix">
                    <div className="grid-sizer"></div>

                    {
                        ProjectData01.map(data => <ProjectCard
                            key={data.id}
                            data={data}
                        />)
                    }
                </div>
                {/* <LoadmoreBtn text='Discover All Projects' className='btn olive w-100' /> */}
            </div>
        </section>
    );
};

export default ProjectGallery;
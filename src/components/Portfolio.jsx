import Isotope from 'isotope-layout';
import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectElements/ProjectCard';
import SectionGridLines from '../components/SectionGridLines';

const Portfolio = () => {
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
            transformsEnabled: true,
            transitionDuration: "700ms",
            resize: true,
            fitWidth: true,
            columnWidth: '.grid-sizer',
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
            <SectionGridLines />
            <div className="container">

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

export default Portfolio;
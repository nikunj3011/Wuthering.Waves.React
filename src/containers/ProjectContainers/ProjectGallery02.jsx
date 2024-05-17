import Isotope from 'isotope-layout';
import React, { useEffect, useState } from 'react';
import ProjectCard03_02 from '../../components/ProjectElements/ProjectCard03_02';

const ProjectGallery02 = () => {
    const ProjectData02 = [
        {
            id: '1',
            img: 'images/portfolio/1.jpg',
            details: 'Sunlight in the Room',
            tag: 'interiors'
        },
        // {
        //     id: '2',
        //     img: 'images/portfolio/2.jpg',
        //     details: 'Find your own self invintage lake house',
        //     tag: 'residences'
        // },
        // {
        //     id: '3',
        //     // img: 'images/portfolio/3.jpg',
        //     img: 'images/portfolio/3.jpg',
        //     details: 'Well decor house in Sydney',
        //     tag: 'landscape exterior'
        // },
        // {
        //     id: '4',
        //     img: 'images/portfolio/4.jpg',
        //     details: 'Huge large area Bedroom',
        //     tag: 'landscape'
        // },
        // {
        //     id: '5',
        //     // img: 'images/portfolio/5.jpg',
        //     img: 'images/portfolio/1.jpg',
        //     details: 'Clean water in the swiming pool',
        //     tag: 'interiors'
        // },
        // {
        //     id: '6',
        //     img: 'images/portfolio/6.jpg',
        //     details: 'Newyork golf club house',
        //     tag: 'interiors'
        // },
        // {
        //     id: '7',
        //     img: 'images/portfolio/7.jpg',
        //     details: 'California young menz club',
        //     tag: 'exterior'
        // },
        {
            id: '8',
            img: 'images/portfolio/8.jpg',
            details: 'Newyork golf club house',
            tag: 'interiors'
        },
        {
            id: '9',
            img: 'images/portfolio/1.jpg',
            details: 'California youngs menz club',
            tag: 'residences'
        },
        // {
        //     id: '10',
        //     img: 'images/portfolio/2.jpg',
        //     details: 'California young menz club',
        //     tag: 'landscape exterior'
        // },
        // {
        //     id: '11',
        //     img: 'images/portfolio/4.jpg',
        //     details: 'California young menz club',
        //     tag: 'landscape exterior'
        // },
        // {
        //     id: '12',
        //     img: 'images/portfolio/3.jpg',
        //     details: 'California young menz club',
        //     tag: 'landscape exterior'
        // },

    ];
    const [filterKey, setFilterKey] = useState('*')

    useEffect(() => {
        Isotope.current = new Isotope('.grid', {
            itemSelector: '.grid-item',
            percentPosition: true,
            // layoutMode: 'packery',
            masonry: {
                columnWidth: '.grid-sizer'
            },
            transformsEnabled: true,
            transitionDuration: "700ms",
            resize: true,
            fitWidth: true,
            // columnWidth: '.grid-sizer',
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
        <section className="projects masonry bg-transparent effect-tilt">
            <div className="container">
                <div className="portfolio-filters-content">
                    <div className="filters-button-group">
                        <button className="button is-checked" onClick={handleFilterKeyChange('*')}>All <sup className="filter-count"></sup></button>
                        {/* <button className="button" onClick={handleFilterKeyChange('exterior')}>Exterior <sup className="filter-count"></sup></button> */}
                        <button className="button" onClick={handleFilterKeyChange('residences')}>Residences <sup className="filter-count"></sup></button>
                        <button className="button" onClick={handleFilterKeyChange('interiors')}>Interiors <sup className="filter-count"></sup></button>
                        {/* <button className="button" onClick={handleFilterKeyChange('landscape')}>Landscape <sup className="filter-count"></sup></button> */}
                    </div>
                </div>

                <div className="grid grid-2 gutter-90 clearfix">
                    <div className="grid-sizer"></div>
                    {
                        ProjectData02.map(data => <ProjectCard03_02
                            key={data.id}
                            data={data}
                        />)
                    }
                </div>
                {/* <div className="btn_group w-100 text-center">
                    <button id="load-more" className="btn gray">Load More</button>
                </div> */}
            </div>
        </section>
    );
};

export default ProjectGallery02;
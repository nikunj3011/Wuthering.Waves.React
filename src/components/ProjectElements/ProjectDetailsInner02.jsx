import React from 'react';
import BlockGalleryItemCard from '../BlockGalleryItemCard';
import RelatedProjects from './RelatedProjects';


const ProjectDetailsInner02 = () => {
    return (
        <div className="project-details_inner">
            <div className="post_content">
                <div className="post-header">
                    <h3 className="post-title">California Mansion Residence</h3>
                </div>
                <div className="fulltext">
                    <p>
                        Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture, space planning and programming. Our portfolio of completed work includes highly acclaimed and award-winning projects for clients around the country.
                    </p>
                    <figure className="block-gallery mb-0">
                        <ul className="blocks-gallery-grid">
                            <li className="blocks-gallery-item mb-0 me-0">
                                <figure>
                                    <img src="images/portfolio/details/sl-4.jpg" alt="img" className="block-image" />
                                </figure>
                            </li>
                        </ul>
                    </figure>

                    <h6 className="widget-title">
                        Project Features
                        <span className="title-line"></span>
                    </h6>
                    <p>We design with people in mind and use every expertise at our disposal.Our practice connects communities and is committed to the stewardship of place, people, and the environment.</p>
                    <ul className="point_order">
                        <li>The talent at Mrittik runs wide and deep. Across many markets, geographies & typologies.</li>
                        <li>Our team members are some of the finest professionals in the industry.</li>
                        <li>Organized to deliver the most specialized service possible and enriched by the depth.</li>
                    </ul>

                    <figure className="block-gallery">
                        <ul className="blocks-gallery-grid">
                            <BlockGalleryItemCard img='images/portfolio/details/3.jpg' />
                            <BlockGalleryItemCard img='images/portfolio/details/4.jpg' />
                            <BlockGalleryItemCard img='images/portfolio/details/5.jpg' />
                            <BlockGalleryItemCard img='images/portfolio/details/6.jpg' />
                        </ul>
                    </figure>

                    <p>
                        Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture, space planning and programming. Our portfolio of completed work includes highly acclaimed and award-winning projects for clients around the country.
                    </p>

                    <p>
                        You don’t create unforgettable spaces all over the world with a single design tool. Our expertise in drawing people together is as broad as it is deep. It draws from a variety of disciplines, each one contributing to the bigger picture and sustainable growth. More than 3,000 projects fill our portfolio, but it’s the millions of people who experience them who matter most. We’ve grouped our work into five categories: places, venues, spaces, experiences and events. Click on the images below to learn more below about the impact our projects have on communities.
                    </p>

                    <div className="post-footer">
                        <nav className="d-flex align-items-center justify-content-between">
                            <div className="details_link l-dir pagination-previous"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
                            <div className="page-all"><a href="#"><i className="bi bi-grid"></i></a></div>
                            <div className="details_link r-dir pagination-next"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
                        </nav>
                    </div>
                </div>

                <RelatedProjects />
            </div>
        </div>
    );
};

export default ProjectDetailsInner02;
import React from 'react';
import BlockGallery from '../components/BlockGallery';
import CommentList from '../components/CommentList';
import CommentRespond from '../components/CommentRespond';
import Paragraph from '../components/Paragraph';
import PointOrder from '../components/PointOrder';
import PostFooter from '../components/PostFooter';
import SideBar from '../components/SideBar';
import WidgetTitle from '../components/WidgetTitle';

const BlogDetailsContainer = () => {
    return (
        <main className="wrapper">
            <section className="project-details bg-dark-200">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <div className="project-details_inner">
                                <div className="post_content">
                                    <div className="post-header">
                                        <h3 className="post-title">California Mansion Residence</h3>
                                    </div>
                                    <div className="intro">
                                        <Paragraph text='Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture, space planning and programming. Our portfolio of completed work includes highly acclaimed and award-winning projects for clients around the country.' />
                                    </div>
                                    <div className="fulltext">
                                        <BlockGallery className='block-gallery mb-0' img='images/blog/details/1.jpg' />

                                        <WidgetTitle title='Project Features' className='widget-title' />

                                        <Paragraph text='We design with people in mind and use every expertise at our disposal.Our practice connects communities and is committed to the stewardship of place, people, and the environment.' />

                                        <PointOrder li1='The talent at Mrittik runs wide and deep. Across many markets, geographies & typologies.' li2='Our team members are some of the finest professionals in the industry.' li3='Organized to deliver the most specialized service possible and enriched by the depth.' />

                                        <Paragraph text='Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture, space planning and programming. Our portfolio of completed work includes highly acclaimed and award-winning projects for clients around the country.' />

                                        <Paragraph text='You don’t create unforgettable spaces all over the world with a single design tool. Our expertise in drawing people together is as broad as it is deep. It draws from a variety of disciplines, each one contributing to the bigger picture and sustainable growth. More than 3,000 projects fill our portfolio, but it’s the millions of people who experience them who matter most. We’ve grouped our work into five categories: places, venues, spaces, experiences and events. Click on the images below to learn more below about the impact our projects have on communities.' />

                                        <BlockGallery className='block-gallery mb-0' img='images/blog/details/1.jpg' />

                                        <Paragraph text='Mrittik Architects is a full-service design firm providing architecture, master planning, urban design, interior architecture, space planning and programming. Our portfolio of completed work includes highly acclaimed and award-winning projects for clients around the country.' />

                                        <Paragraph text='You don’t create unforgettable spaces all over the world with a single design tool. Our expertise in drawing people together is as broad as it is deep. It draws from a variety of disciplines, each one contributing to the bigger picture and sustainable growth. More than 3,000 projects fill our portfolio, but it’s the millions of people who experience them who matter most. We’ve grouped our work into five categories: places, venues, spaces, experiences and events. Click on the images below to learn more below about the impact our projects have on communities.' />

                                        <PostFooter />

                                        <CommentList />

                                        <CommentRespond />

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <SideBar></SideBar>
                        </div>
                    </div>
                </div>
            </section >
        </main >
    );
};

export default BlogDetailsContainer;
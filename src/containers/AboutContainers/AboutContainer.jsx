import React from 'react';
import IconBoxFlex from '../../components/IconBoxFlex';
import Paragraph from '../../components/Paragraph';
import SubHeading from '../../components/SubHeading';

const AboutContainer = () => {

    return (
        <section className="about bg-dark-100">
            <div className="large_font">
                <h2 className="floating_element text-dark-200 d-flex justify-content-center">About</h2>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-5">
                        <div className="about_image">
                            <img src='images/main_images/1_.jpg' alt="img" />
                            <img src="images/about/e1.svg" alt="About" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7">
                        <div className="about_text_inner">
                            <div className="about_text">
                                <SubHeading title="ABOUT"></SubHeading>
                                <Paragraph text="Wuthering Waves is an action role-playing game set in a futuristic post-apocalyptic open world, where a mysterious catastrophe known as the Lament swept the globe, wiping out most of humanity and leaving it on the verge of extinction. After the calamity, unknown beings and monsters appeared around the world, but humanity soon adapted to the threat and found a way to cope and live with the monsters, slowly rebuilding civilization. The story follows the amnesiac Rover, who has awoken from their deep slumber. On the Rover's journey, they will explore the vast lands and will be greeted by a new world filled with novel sights and new technologies."></Paragraph>
                            </div>

                            <div className="about_icon_box">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <IconBoxFlex img="images/about/i2.svg" text="Open-world"></IconBoxFlex>
                                    </div>
                                    <div className="col-lg-6">
                                        <IconBoxFlex img="images/about/i3.svg" text="Action RPG"></IconBoxFlex>
                                    </div>
                                    <div className="col-lg-6">
                                        <IconBoxFlex img="images/about/i1.svg" text="3D Anime Style"></IconBoxFlex>
                                    </div>
                                    <div className="col-lg-6">
                                        <IconBoxFlex img="images/about/i4.svg" text="Story Rich"></IconBoxFlex>
                                    </div>
                                </div>
                            </div>

                            <div className="btn_group" >
                                <a href="/about" className="btn gray">Read More</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutContainer;
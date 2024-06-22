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
                    <div className="col-lg-5 col-md-5" >
                        <div className="">
                            <img src='images/main_images/3_.jpg' alt="img" />
                            {/* <img src="images/about/e1.svg" alt="About" /> */}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7">
                        <div className="about_text_inner">
                            <div className="about_text">
                                <SubHeading title="ABOUT"></SubHeading>
                                <Paragraph text="Wuthering Waves is a game that features open world exploration with rich and diverse narrative and a high degree of freedom of combat. Players act as Rovers, who awake after a long period of slumber, embark on adventures in the whole wide world made up of new era, new environment and new technology. Wuthering Waves is developed by Kuro Game, the creators of Punishing Gray Raven. The game features the best action RPG combat in the mobile genre and now it will be translated to a open world in the style of Genshin Impact."></Paragraph>
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

                            {/* <div className="btn_group" >
                                <a href="/about" className="btn gray">Read More</a>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutContainer;
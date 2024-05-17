import React from 'react';
import ProjectCard03 from '../../components/ProjectElements/ProjectCard03';
import ProjectCard3_2 from '../../components/ProjectElements/ProjectCard03_2';

const Projects03 = () => {
    return (
        <section className="projects top-margin bg-transparent effect-tilt p-0">
            <div className="container">
                <div className="row gutter-90 clearfix mb-clearfix">
                    {/* <div className="grid-item col-12 col-lg-6 residences">
                        <ProjectCard03 img="images/portfolio/1.jpg" details="California young menz club" />
                    </div> */}
                    <div className="grid-item col-12 col-lg-6 interiors">
                        <ProjectCard03 img="images/portfolio/2.jpg" details="Sunlight in the Room" />
                    </div>
                    <div className="grid-item col-12 col-lg-6 residences">
                        <ProjectCard03 img="images/portfolio/3.jpg" details="Find your own self invintage lake house" />
                    </div>
                    <div className="grid-item col-12 col-lg-6 landscape exterior">
                        <ProjectCard03 img="images/portfolio/4.jpg" details="Well decor house in Sydney" />
                    </div>
                    <div className="grid-item col-12 col-lg-6 landscape">
                        <ProjectCard03 img="images/portfolio/5.jpg" details="Huge large area Bedroom" />
                    </div>
                    <div className="grid-item col-12 col-lg-6 interiors">
                        <ProjectCard03 img="images/portfolio/6.jpg" details="Clean water in the swiming pool" />
                    </div>
                    <div className="grid-item col-12 col-lg-6 interiors">
                        <ProjectCard3_2 img="images/portfolio/7.jpg" details="California young menz club"></ProjectCard3_2>
                    </div>
                    <div className="grid-item col-12 col-lg-6 residences">
                        <ProjectCard3_2 img="images/portfolio/8.jpg" details="Newyork golf club house"></ProjectCard3_2>
                    </div>
                    <div className="grid-item col-12 col-lg-6 exterior">
                        <ProjectCard3_2 img="images/portfolio/1.jpg" details="California young menz club"></ProjectCard3_2>
                    </div>
                    <div className="grid-item col-12 col-lg-6 interiors">
                        <ProjectCard3_2 img="images/portfolio/2.jpg" details="California young menz club"></ProjectCard3_2>
                    </div>
                    <div className="grid-item col-12 col-lg-6 residences">
                        <ProjectCard3_2 img="images/portfolio/3.jpg" details="California young menz club"></ProjectCard3_2>
                    </div>
                    <div className="grid-item col-12 col-lg-6 landscape exterior">
                        <ProjectCard3_2 img="images/portfolio/4.jpg" details="California young menz club"></ProjectCard3_2>
                    </div>
                </div>
                {/* <div className="btn_group w-100 text-center">
                    <button id="load-more" className="btn black w-100">Discover All Projects</button>
                </div> */}
            </div>
        </section>
    );
};

export default Projects03;
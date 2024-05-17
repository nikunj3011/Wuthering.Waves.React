import $ from 'jquery';
import React, { useEffect } from 'react';
import RunningProjectItem from '../components/ProjectElements/RunningProjectItem';
import SectionGridLines from '../components/SectionGridLines';

const RunningProjects = () => {


    useEffect(() => {
        // Alternate Hover/Active
        $('.left_part .grid-item, .right_part .grid-item').hover(function () {
            $('.right_part .grid-item').removeClass('active');
        },
            function () {
                $('.right_part .grid-item + .grid-item').addClass('active');
            });
    }, []);
    return (
        <section className="running_projects">
            <SectionGridLines />
            <div className="large_font">
                <h2 className="floating_element text-dark-200 d-flex justify-content-center">Running</h2>
            </div>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5 col-md-5 col-sm-5">
                        <div className="left_part">
                            <div className="grid-item">
                                <RunningProjectItem img="images/image_box/3.jpg" name="Club House" details="California young menz club"></RunningProjectItem>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-5 col-sm-5">
                        <div className="right_part">
                            <div className="grid-item" >
                                <RunningProjectItem img="images/image_box/2.jpg" name="Club House" details="California young menz club"></RunningProjectItem>
                            </div>

                            <div className="grid-item active">
                                <RunningProjectItem img="images/image_box/1.jpg" name="Club House" details="California young menz club"></RunningProjectItem>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RunningProjects;
import React from 'react';
import Video from "../components/Video";
import FormContainer from "../containers/FormContainer";
import FunFacts from '../containers/FunFacts/FunFacts';
import MissionContainer from "../containers/MissionContainer";
import ServiceContainer01 from '../containers/ServiceContainer';
import TeamContainer02 from '../containers/TeamContainers/TeamContainer02';
import Testimonials from '../containers/Testimonials';
import TextAbout from './TextAbout';

const AboutUs = () => {
    const TeamData = [
        {
            id: '1',
            img: 'images/team/1.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '2',
            img: 'images/team/2.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '3',
            img: 'images/team/3.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '4',
            img: 'images/team/4.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '5',
            img: 'images/team/5.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '6',
            img: 'images/team/6.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '7',
            img: 'images/team/7.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '8',
            img: 'images/team/8.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
        {
            id: '9',
            img: 'images/team/9.jpg',
            name: 'Michel Robertson',
            designation: 'ARCHITECT',
        },
    ]

    return (
        <main className="wrapper">
            <MissionContainer />

            <div className="video-block" >
                <Video />
            </div>

            <FunFacts className='funfacts pd-top-lg bg_2' />
            <ServiceContainer01 />
            <TextAbout />
            <TeamContainer02 />
            <Testimonials />
            <FormContainer />
        </main>
    );
};

export default AboutUs;
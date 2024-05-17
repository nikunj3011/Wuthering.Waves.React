import React from 'react';
import ClientsContainer03 from '../../containers/ClientsContainer03';
import Projects03 from '../../containers/ProjectContainers/Projects03';
import Sliders06 from '../../containers/SliderContainers/Sliders06';

const Home06 = () => {
    return (
        <div className="wrapper">
            <Sliders06 />
            <Projects03 />
            <ClientsContainer03 />
        </div>
    );
};

export default Home06;
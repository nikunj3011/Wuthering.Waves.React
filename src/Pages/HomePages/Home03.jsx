import React from 'react';
import ClientsContainer03 from '../../containers/ClientsContainer03';
import Projects03 from '../../containers/ProjectContainers/Projects03';
import Sliders03 from '../../containers/SliderContainers/Sliders03';

const Home03 = () => {
    return (
        <div className="wrapper">
            <Sliders03 />
            <Projects03 />
            <ClientsContainer03 />
        </div>
    );
};

export default Home03;
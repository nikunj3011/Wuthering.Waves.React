import React from 'react';
import Portfolio from '../../components/Portfolio';
import PageBanner from '../../containers/PageBanner';
import EchoesGallery from '../../containers/ProjectContainers/EchoesSummary';
import WeaponsSummary from '../../containers/ProjectContainers/WeaponsSummary';

const Weapons = () => {
    return (
        <>
        <PageBanner title="Echoes" activePage="Echoes" description="All Echoes available in Wuthering Waves!"/>
        <WeaponsSummary text='Load More' className='btn gray' />
        </>
    );
};

export default Weapons;
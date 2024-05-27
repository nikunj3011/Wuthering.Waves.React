import React from 'react';
import Portfolio from '../../components/Portfolio';
import PageBanner from '../../containers/PageBanner';
import EchoesGallery from '../../containers/ProjectContainers/EchoesSummary';
import GearSetsSummary from '../../containers/ProjectContainers/GearSetsSummary';

const GearSets = () => {
    return (
        <>
        <PageBanner title="Echoes" activePage="Echoes" description="All Echoes available in Wuthering Waves!"/>
        <GearSetsSummary text='Load More' className='btn gray' />
        </>
    );
};

export default GearSets;
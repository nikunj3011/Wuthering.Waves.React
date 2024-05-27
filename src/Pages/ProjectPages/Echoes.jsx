import React from 'react';
import PageBanner from '../../containers/PageBanner';
import EchoesGallery from '../../containers/ProjectContainers/EchoesSummary';

const Characters = () => {
    return (
        <>
        <PageBanner title="Echoes" activePage="Echoes" description="All Echoes available in Wuthering Waves!"/>
        <EchoesGallery text='Load More' className='btn gray' />
        </>
    );
};

export default Characters;
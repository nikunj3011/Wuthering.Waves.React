import React from 'react';
import Portfolio from '../../components/Portfolio';
import PageBanner from '../../containers/PageBanner';
import CharactersGallery from '../../containers/ProjectContainers/CharactersGallery';

const Characters = () => {
    return (
        <>
        <PageBanner title="Characters" activePage="Characterss" description="All characters available in Wuthering Waves!"/>
        <CharactersGallery text='Load More' className='btn gray' />
        </>
    );
};

export default Characters;
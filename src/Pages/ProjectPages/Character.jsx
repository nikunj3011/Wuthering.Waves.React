import React from 'react';
import PageBanner from '../../containers/PageBanner';
import CharacterSummary from '../../containers/ProjectContainers/CharacterSummary';
import { useParams } from 'react-router-dom';

const Character = () => {
    const {id} = useParams();
    return (
        <>
        <CharacterSummary id={id} />
        </>
    );
};

export default Character;
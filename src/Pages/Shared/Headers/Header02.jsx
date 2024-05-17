import React from 'react';
import AsideInfo from '../AsideInfo';
import Header02Nav from '../Header02Nav/Header02Nav';
import UpperHeader02 from './UpperHeader02';

const Header02 = () => {
    return (
        <>
            <UpperHeader02 />
            <Header02Nav id='offcanvasHome' />
            <AsideInfo />
        </>
    );
};

export default Header02;
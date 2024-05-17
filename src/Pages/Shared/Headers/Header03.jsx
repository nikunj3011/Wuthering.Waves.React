import React from 'react';
import AsideInfo from '../AsideInfo';
import MobileResponsiveMenu from '../MobileResponsiveMenu';
import SideNav from '../SideNav';
import UppereHeader03 from './UppereHeader03';

const Header03 = () => {
    return (
        <>
            <UppereHeader03 />
            <SideNav />
            <MobileResponsiveMenu />
            <AsideInfo />
        </>
    );
};

export default Header03;
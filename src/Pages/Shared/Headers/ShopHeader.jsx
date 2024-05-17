import React from 'react';
import AsideInfo from '../AsideInfo';
import MiniCart from '../MiniCart/MiniCart';
import MobileResponsiveMenu from '../MobileResponsiveMenu';
import ShopUpperHeader from './ShopUpperHeader';

const ShopHeader = () => {
    return (
        <>
            <ShopUpperHeader />
            <MiniCart id='offcanvasNavbar' />
            <MobileResponsiveMenu />
            <AsideInfo />
        </>
    );
};

export default ShopHeader;
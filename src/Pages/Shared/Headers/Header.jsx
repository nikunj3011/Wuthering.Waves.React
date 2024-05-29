import React from 'react';
import AsideInfo from '../AsideInfo';
import MobileResponsiveMenu from '../MobileResponsiveMenu';
import UpperHeader from './UpperHeader';

const Header = () => {
    return (
        <div className='test-class'>
            <UpperHeader />
            <MobileResponsiveMenu />
            {/* <AsideInfo /> */}
        </div>
    );
};

export default Header;
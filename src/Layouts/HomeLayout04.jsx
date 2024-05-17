import React from 'react';
import { Outlet } from 'react-router-dom';
import Header03 from '../Pages/Shared/Headers/Header03';
import SectionGridLines from '../components/SectionGridLines';

const HomeLayout04 = () => {
    return (
        <div className='left_menu'>
            <Header03 />
            <Outlet />
            <SectionGridLines />
        </div>
    );
};

export default HomeLayout04;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header02 from '../Pages/Shared/Headers/Header02';
import SectionGridLines from '../components/SectionGridLines';

const HomeLayout02 = () => {
    return (
        <>
            <Header02 />
            <Outlet />
            <SectionGridLines />
        </>
    );
};

export default HomeLayout02;
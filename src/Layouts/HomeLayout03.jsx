import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Headers/Header';
import SectionGridLines from '../components/SectionGridLines';

const HomeLayout03 = () => {
    return (
        <>
            <Header />
            <Outlet />
            <SectionGridLines />
        </>
    );
};

export default HomeLayout03;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footers/Footer';
import Header from '../Pages/Shared/Headers/Header';
import SectionGridLines from '../components/SectionGridLines';

const HomeLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <SectionGridLines />
            <Footer />
        </>
    );
};

export default HomeLayout;
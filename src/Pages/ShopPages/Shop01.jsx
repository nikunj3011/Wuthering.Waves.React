import React from 'react';
import PageBanner from '../../containers/PageBanner';
import ShopContainer01 from '../../containers/ShopContainer01';

const Shop01 = () => {
    return (
        <>
            <PageBanner title="Shop" activePage="Shop" pageTitle="Pages" />
            <main className="wrapper">
                <ShopContainer01 />
            </main>
        </>
    );
};

export default Shop01;
import React from 'react';
import PageBanner from '../../containers/PageBanner';
import ShopContainer02 from '../../containers/ShopContainer02';

const Shop02 = () => {
    return (
        <>
            <PageBanner pageTitle='Pages' title="Shop" activePage="Shop" />
            <main className="wrapper">
                <ShopContainer02 />
            </main>
        </>
    );
};

export default Shop02;
import React from 'react';
import PageBanner from '../../containers/PageBanner';
import ShopContainer03 from '../../containers/ShopContainer03';

const Shop03 = () => {
    return (
        <>
            <PageBanner pageTitle='Pages' title="Shop" activePage="Shop" />
            <main className="wrapper">
                <ShopContainer03 />
            </main>
        </>
    );
};

export default Shop03;
import React from 'react';
import Checkout from '../../containers/Checkout';
import PageBanner02 from '../../containers/PageBanner02';

const ShopCheckout = () => {
    return (
        <>
            <PageBanner02 title="Shop" page="Shop" activePage='Checkout' href="/shop-1" />
            <main className="wrapper">
                <Checkout />
            </main>
        </>
    );
};

export default ShopCheckout;
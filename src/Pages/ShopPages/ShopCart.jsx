import React from 'react';
import CartContainer from '../../containers/CartContainer';
import PageBanner02 from '../../containers/PageBanner02';

const ShopCart = () => {
    return (
        <>
            <PageBanner02 title="Shop" page="Shop" activePage='Cart' href="/shop-1" />
            <main className="wrapper">
                <CartContainer />
            </main>
        </>
    );
};

export default ShopCart;
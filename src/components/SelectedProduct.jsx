import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PageBanner02 from '../containers/PageBanner02';
import ShopContainer04 from '../containers/ShopContainer04';

const SelectedProduct = () => {
    const selectedProduct = useLoaderData();
    // console.log(selectedProduct);
    return (
        <>
            <PageBanner02 title="Shop" page="Shop" activePage='Product Details' href="/shop-1" />
            <ShopContainer04 selectedProduct={selectedProduct} />
        </>
    );
};

export default SelectedProduct;
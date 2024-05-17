import React, { createContext } from 'react';
import PageBanner02 from '../../containers/PageBanner02';
import ShopContainer04 from '../../containers/ShopContainer04';

export const SingleProductContext = createContext();


const ShopProduct = () => {
    // const selectedProduct = useLoaderData();
    // console.log(selectedProduct);
    return (
        <>
            <PageBanner02 title="Shop" page="Shop" activePage='Product Details' href="/shop-1" />
            <ShopContainer04 />
        </>
    );
};

export default ShopProduct;
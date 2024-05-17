import React from 'react';
import ProductDetails from './ProductDetails';
import ProductView from './ProductView';
import RelatedProducts from './RelatedProducts';

// export const SingleProductContext = createContext();


const ShopContainer04 = ({ selectedProduct }) => {

    return (
        <main className="wrapper">
            <ProductView />
            <ProductDetails />
            <RelatedProducts />
            {/* <ProductView productView={selectedProduct} />
            <ProductDetails projectDetails={selectedProduct} />
            <RelatedProducts relatedProducts={selectedProduct} /> */}
        </main >
    );
};

export default ShopContainer04;
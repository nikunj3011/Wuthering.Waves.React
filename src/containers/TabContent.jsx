import React from 'react';
import ListProductItem from '../components/ListProductItem';
import LoadmoreBtn from '../components/LoadmoreBtn';
import PaginationDiv02 from '../components/PaginationDiv02';
import ProductItem from '../components/ProductItem';

const TabContent = () => {
    return (
        <div className="tab-content">
            <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                <div className="product_view_type">
                    <div className="product_view_grid product_col_3 type_1">
                        <ProductItem oldClass='d-none' class='badge-new' badge='New' img='images/shop/products/1-1.png' name='Decor Plant' price='$15.00' category='Decoration' />

                        <ProductItem oldClass='d-none' class='d-none' img='images/shop/products/2-1.png' name='Hanging Light' price='$15.00' category='Decoration' />

                        <ProductItem oldClass='old_price' oldPrice='$19.00' class='badge-sale' badge='Sale' img='images/shop/products/3-1.png' name='Green Armchair' price='$15.00' category='Decoration' />

                        <ProductItem oldClass='d-none' oldPrice='$19.00' class='d-none' badge='Sale' img='images/shop/products/4-1.png' name='Brown Table Lamp' price='$15.00' category='Decoration' />

                        <ProductItem oldClass='d-none' class='badge-new' badge='New' img='images/shop/products/5-1.png' name='Wooden Center Table' price='$15.00' category='Decoration' />

                        <ProductItem oldClass='old_price' img='images/shop/products/6-1.png' name='Snake Plant' price='$15.00' oldPrice='$23.00' category='Decoration' />

                        <ProductItem oldClass='d-none' img='images/shop/products/7-1.png' name='Center Table' price='$15.00' category='Furniture' />

                        <ProductItem oldClass='d-none' img='images/shop/products/8-1.png' name='Alarm Clock' price='$15.00' category='Furniture' />

                        <ProductItem oldClass='d-none' class='badge-sale' badge='Sale' img='images/shop/products/9-1.png' name='Black Vase' price='$15.00' category='Furniture' />

                        <ProductItem oldClass='d-none' class='badge-new' badge='New' img='images/shop/products/10-1.png' name='White Armchair' price='$19.00' category='Furniture' />

                        <ProductItem oldClass='d-none' class='badge-new' badge='New' img='images/shop/products/11-1.png' name='Teal Rug' price='$19.00' category='Furniture' />

                        <ProductItem oldClass='d-none' class='badge-sale' badge='Sale' img='images/shop/products/12-1.png' name='Plant With Stand' price='$15.00' category='Furniture' />

                    </div>

                    <PaginationDiv02 />
                </div>
            </div>
            <div className="tab-pane fade" id="list" role="tabpanel" aria-labelledby="list-tab">
                <div className="product_view_list">
                    <ListProductItem oldClass='d-none' class='badge-new' badge='New' img='images/shop/products/1-1.png' name='Decor Plant' price='$15.00' />

                    <ListProductItem oldClass='d-none' class='d-none' img='images/shop/products/2-1.png' name='Hanging Light' price='$15.00' c />

                    <ListProductItem oldClass='old_price' oldPrice='$19.00' class='badge-sale' badge='Sale' img='images/shop/products/3-1.png' name='Green Armchair' price='$15.00' />

                    <ListProductItem oldClass='d-none' oldPrice='$19.00' class='d-none' badge='Sale' img='images/shop/products/4-1.png' name='Brown Table Lamp' price='$15.00' />

                    <ListProductItem oldClass='d-none' class='badge-new' badge='New' img='images/shop/products/5-1.png' name='Wooden Center Table' price='$15.00' />

                    <ListProductItem oldClass='old_price' img='images/shop/products/6-1.png' name='Snake Plant' price='$15.00' oldPrice='$23.00' />

                    <ListProductItem oldClass='d-none' img='images/shop/products/7-1.png' name='Center Table' price='$15.00' />

                    <ListProductItem oldClass='d-none' img='images/shop/products/8-1.png' name='Alarm Clock' price='$15.00' />

                    <ListProductItem oldClass='d-none' class='badge-sale' badge='Sale' img='images/shop/products/9-1.png' name='Black Vase' price='$15.00' />

                    <ListProductItem oldClass='d-none' class='badge-new' badge='New' img='images/shop/products/10-1.png' name='White Armchair' price='$19.00' />

                    <ListProductItem oldClass='d-none' class='badge-new' badge='New' img='images/shop/products/11-1.png' name='Teal Rug' price='$19.00' />

                    <ListProductItem oldClass='d-none' class='badge-sale' badge='Sale' img='images/shop/products/12-1.png' name='Plant With Stand' price='$15.00' />

                    <LoadmoreBtn className='btn olive w-100' text='Discover All Products' />

                </div>
            </div>
        </div>
    );
};

export default TabContent;
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import CategotyProductItem from '../components/forJSON/CategotyProductItem';
import { addToDb } from '../components/forJSON/fakeDB';
import ListProductItem from '../components/ListProductItem';
import LoadmoreBtn from '../components/LoadmoreBtn';
import PaginationDiv02 from '../components/PaginationDiv02';
import { CartContext } from '../Layouts/ShopLayout';
import PageBanner02 from './PageBanner02';

const ShopCategory = () => {
    const categoryProducts = useLoaderData();
    const [cart, setCart] = useContext(CartContext)
    // console.log(products)

    const handleAddToCart = product => {
        let newCart = []
        const exists = cart.find(
            existingProduct => existingProduct.id === product.id
        )
        if (!exists) {
            product.quantity = 1
            newCart = [...cart, product]
        } else {
            const rest = cart.filter(
                existingProduct => existingProduct.id !== product.id
            )
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }

        setCart(newCart)
        addToDb(product.id)
        toast.info('Info: Product Added!', { autoClose: 500 })
    }

    return (
        <>
            <PageBanner02 title="Shop" page="Shop" activePage='Product Category' href="/shop-1" />

            <section className="shop_page bg-dark-200">
                <div className="container">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                            <div className="product_view_type">
                                <div className="product_view_grid product_col_3 type_1">
                                    {
                                        categoryProducts.map(product => <CategotyProductItem
                                            key={product.id}
                                            productItem={product}
                                            handleAddToCart={handleAddToCart}

                                        />)
                                    }
                                </div>

                                <PaginationDiv02 />
                            </div>
                        </div>
                        <div className="tab-pane fade" id="list" role="tabpanel" aria-labelledby="list-tab">
                            <div className="product_view_list">

                                {
                                    categoryProducts.map(product => <ListProductItem
                                        key={product.id}
                                        productItem={product}
                                    ></ListProductItem>)
                                }

                                <LoadmoreBtn className='btn olive w-100' text='Discover All Products' />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopCategory;
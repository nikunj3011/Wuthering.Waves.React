import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import LoadmoreBtn from '../../components/LoadmoreBtn';
import PaginationDiv02 from '../../components/PaginationDiv02';
import { CartContext, ProductContext } from '../../Layouts/ShopLayout';
import { addToDb } from './fakeDB';
import ListProductItem from './ListProductItem';
import ProductItem from './ProductItem';

// export const CartContext = createContext([]);
// export const ProductContext = createContext([]);

const TabContent = () => {
    const products = useContext(ProductContext)
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
        <div className="tab-content">
            <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                <div className="product_view_type">
                    <div className="product_view_grid product_col_3 type_1">
                        {
                            products.map(product => <ProductItem
                                key={product.id}
                                productItem={product}
                                handleAddToCart={handleAddToCart}
                                
                            ></ProductItem>)
                        }
                        
                    </div>

                    <PaginationDiv02 />
                </div>
            </div>
            <div className="tab-pane fade" id="list" role="tabpanel" aria-labelledby="list-tab">
                <div className="product_view_list">
                    {/* <ProductContext.Provider value={products}> */}
                    {
                        products.map(product => <ListProductItem
                            key={product.id}
                            productItem={product}
                            handleAddToCart={handleAddToCart}
                        ></ListProductItem>)
                    }
                    {/* </ProductContext.Provider> */}
                    
                    <LoadmoreBtn className='btn olive w-100' text='Discover All Products' />

                </div>
            </div>
        </div>
    );
};

export default TabContent;
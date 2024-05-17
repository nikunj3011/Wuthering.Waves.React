import React from 'react';
import CartContent from '../components/CartContent';
import CartHeader from '../components/CartHeader';
import CuponCode from '../components/CuponCode';
import GrandTotal from '../components/forJSON/GrandTotal';

const CartContainer = () => {
    const MiniCartData = [
        {
            "id": "1",
            "name": "Decor Plant",
            "price": "15.00",
            "badge": "new",
            "newClass": "badge-new",
            "img": "https://i.ibb.co/3ztPtN7/1-1.png",
            "categoryID": "4",
            "categoryName": "Garden"
        },
        {
            "id": "2",
            "name": "Hanging Light",
            "price": "15.00",
            "oldClass": "d-none",
            "img": "https://i.ibb.co/8BgPvQd/2-1.png",
            "categoryID": "7",
            "categoryName": "Home Decor"

        },

    ]

    return (
        <section className="shopping_cart bg-dark-200">
            <div className="container">
                <form action="checkout.php" method="POST">
                    <table className="cart_table">
                        <CartHeader />

                        {MiniCartData.map(product => (
                            <CartContent
                                key={product.id}
                                product={product}
                            />
                        ))}

                    </table>

                    <CuponCode />
                </form>
                <div className="row">
                    <div className="col-lg-7">
                        <GrandTotal total={30} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartContainer;
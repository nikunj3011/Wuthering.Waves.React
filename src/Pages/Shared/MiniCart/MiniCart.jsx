import React from 'react';
import { Link } from "react-router-dom";
import "./MiniCart.css";
import MiniCartContent from './MiniCartContent';

const MiniCart = (props) => {
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
        <div className="bg-dark offcanvas offcanvas-end" tabIndex="-1" id={props.id} aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Cart</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="row gutter-3">
                    {MiniCartData.map(product => (
                        <MiniCartContent
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>
                <div className="container mt-5">
                    <div className="row gutter-0">
                        <div className="cart_button d-flex justify-content-center">
                            <Link to="/shop-cart"><button className="button me-3">View Cart</button></Link>
                            <Link to="/shop-checkout"><button className="button">Check Out</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MiniCart;
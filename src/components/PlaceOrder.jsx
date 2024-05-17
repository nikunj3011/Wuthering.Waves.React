import React from 'react';
import OrderListItem from './OrderListItem';
import WidgetTitle from './WidgetTitle';

const PlaceOrder = () => {
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
        <div className="place_order">
            <WidgetTitle title='Your Order' className='widget-title' />
            <ul>
                <li className="totalvalue"><span className="text">Product</span> <span className="value">Price</span></li>

                {
                    MiniCartData.map(product => <OrderListItem
                        key={product.id}
                        product={product}
                    />)
                }

                <li className="totalvalue"><span className="text">Subtotal</span> <span className="value">$ 30.00</span></li>
                <li className="totalvalue"><span className="text">Tax (10%)</span> <span className="value">$ 3.00</span></li>
                <li className="totalvalue">
                    <span className="text">Shipping</span>
                    <div className="form-group">
                        <label className="radio_circle">Flat Rate
                            <input type="radio" name="shipping" value="cash" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio_circle">Free Shipping
                            <input type="radio" checked="checked" name="shipping" value="card" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio_circle">Local Pickup
                            <input type="radio" name="shipping" value="online" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </li>
                <li className="totalvalue"><span className="text">Total</span> <span className="value">$ 33.00</span></li>
            </ul>
            <div className="form-group paymentmethod">
                <label className="radio_circle">Direct Bank Transfer
                    <input type="radio" checked="checked" name="paymethod" value="cash" />
                    <span className="checkmark"></span>
                    <span className="text">Make your payment directly into our bank account. Please use your
                        Order ID as the payment reference. Your order will not be shipped
                        until the funds have cleared in our account.</span>
                </label>
                <label className="radio_circle">Check Payment
                    <input type="radio" name="paymethod" value="card" />
                    <span className="checkmark"></span>
                    <span className="text">Your personal data will be used to process your order, support your
                        experience throughout this website, and for other purposes described
                        in our privacy policy.</span>
                </label>
            </div>

            <div className="btn_group">
                <button
                    type='button'
                    className='btn white'
                >
                    Place Order
                </button>

            </div>
        </div>
    );
};

export default PlaceOrder;
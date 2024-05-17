import React from 'react';
import WidgetTitle from '../WidgetTitle';

const GrandTotal = ({total}) => {
    const tax = (Number(total)* 0.1).toFixed(2);
    const grandTotal = (Number(total) + Number(tax)).toFixed(2);
    // console.log(total);
    return (
        <div className="grand_total">
            <WidgetTitle title='Card Total' className='widget-title' />
                <ul>
                    <li><span className="text">Subtotal</span> <span className="value total_price">${total}</span></li>
                    <li><span className="text">Tax (10%)</span> <span className="value">${tax}</span></li>
                    <li><span className="text">Shipping</span> <span className="value">Enter your address to view shipping options.
                        Calculate Shipping</span></li>
                    <li className="totalvalue"><span className="text">Total</span> <span className="value">${grandTotal}</span></li>
                </ul>
                <form action='/shop-checkout' className="btn_group">
                    <input className="btn white" type="submit" value="Proceed To Checkout" name="submit" />
                </form>
        </div>
    );
};

export default GrandTotal;
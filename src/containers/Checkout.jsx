import CheckoutForm from "../components/CheckoutForm";
import PlaceOrder from "../components/PlaceOrder";
import WidgetTitle from "../components/WidgetTitle";

const Checkout = () => {
    return (
        <section className="shopping_cart bg-dark-200">
            <div className="container">
                <div className="shipping_form">
                    <form>
                        <div className="have_coupon">
                            <div className="form-group">
                                <label for="couponcode">Have a coupon?</label>
                                <input type="text" className="form-control" id="couponcode" name="couponcode" placeholder="Enter Coupon Code" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7 pe-5">
                                <WidgetTitle title='Billing Address' className='widget-title' />
                                <CheckoutForm />
                            </div>
                            <div className="col-lg-5">
                                <PlaceOrder />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Checkout;
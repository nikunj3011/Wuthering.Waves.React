import React from 'react';
import PageBanner02 from '../containers/PageBanner02';

const Login = () => {
    return (
        <>
            <PageBanner02 title="Login" page="Shop" activePage='Login' href="/shop-1"></PageBanner02>

            <main className="wrapper">
                <section className="login-page ">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-8 offset-lg-2">
                                <div className="shipping_form">
                                    <h1 className="widget-title text-uppercase">Login <span className="title-line"></span></h1>
                                    <form action="" method="post">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="fname" value="" placeholder="Username or Email Address *" required />
                                        </div>

                                        <div className="form-group">
                                            <input type="password" className="form-control" name="password" value="" placeholder="Password *" required />
                                        </div>

                                        <div className="form-group d-flex align-items-center mb-4">
                                            <input type="checkbox" className="form-check-input me-2" name="checkbox1" value="" />
                                            <label className="form-label mb-0" for="checkbox1">Remember Passord</label>
                                        </div>

                                        <div className="btn_group mb-2">
                                            <button type="submit" className="btn white">Log In</button>
                                        </div>

                                        <div className="form-group mt-4">
                                            <label><a href="#">Forgot Password</a></label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </>
    );
};

export default Login;
import React from 'react';

const ProductDetails = () => {


    return (
        <section className="product_details_section bg-dark-200">
            <div className="container">
                <div className="product_details_tab">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="active" data-bs-toggle="tab" href="#description">Description</a>
                        </li>
                        <li className="nav-item">
                            <a data-bs-toggle="tab" href="#information">Additional Information</a>
                        </li>
                        <li className="nav-item">
                            <a data-bs-toggle="tab" href="#reviews">Reviews (2)</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="description" tabIndex="0">
                            <p>Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt eget. Leo a tempor id. A lacus vest ibulum sed arcu non odio euismod lacinia. In tellus integer feugiat sceleris que. Feugiat in ferme ntum posuere urna nec tincidunt praesent.</p>
                            <p>Porttitor rhonc elementum facilisis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectusSenectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ne semper auctor.</p>
                        </div>
                        <div className="tab-pane fade" id="information" tabIndex="0">
                            <div className="product_additional_info">
                                <p className="mb-3">A lacus vestibulum sed arcu non odio euismod lacinia. In tellus integer feugiat scelerisque. Feugiat in fermentum posuere urna nec tincidunt praesent. Porttitor rhonc
                                    elementum facilisis.</p>
                                <ul className="px-0 mb-0">
                                    <li className="categories"><span>Material:</span> Cotton & Linen</li>
                                    <li className="sku"><span>Lenght:</span> 30 Inch</li>
                                    <li className="tags"><span>Weight:</span> 400gm</li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="reviews" tabIndex="0">
                            <div className="review_sec">
                                <h6 className="review_title">1 review for <a href="#">Product Name</a></h6>
                                <ul className="review_area">
                                    {/* <!-- First Review --> */}
                                    <li className="blog_review_user">
                                        <div className="reviewer_div">
                                            <div className="reviewer">
                                                <img alt="img" src="images/blog/commenter1.png" className="avatar" />
                                            </div>
                                            <div className="review_block">
                                                <div className="product_rating">
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-half"></i>
                                                    <i className="bi bi-star"></i>
                                                </div>
                                                <h4 className="reviewer_name">Adam Paul <span className="review_date">07/08/2022</span></h4>
                                                <p className="reviewer_review">Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Neque convallis a cras
                                                    semper auctor. Libero id faucibus nisl tincidunt eget. </p>

                                            </div>
                                        </div>
                                    </li>

                                    {/* <!-- Second Review --> */}
                                    <li className="blog_review_user">
                                        <div className="reviewer_div">
                                            <div className="reviewer">
                                                <img alt="img" src="images/blog/commenter2.png" className="avatar" />
                                            </div>
                                            <div className="review_block">
                                                <div className="product_rating">
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-half"></i>
                                                    <i className="bi bi-star"></i>
                                                </div>
                                                <h4 className="reviewer_name">Belik Jam <span className="review_date">29/07/2022</span></h4>
                                                <p className="reviewer_review">As the world continues to fight COVID-19 some property owners are searching for way they can improve the security of their buildings.</p>

                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="reviews-pagination">
                                    <span aria-current="page" className="page-numbers current">1</span>
                                    <a className="page-numbers" href="#">2</a>
                                </div>
                            </div>

                            <div className="review_form">
                                <div className="review_form_heading_wrapper">
                                    <h4 className="review_form_title">Add a Review <span className="title-line"></span></h4>
                                    <h6 className="review_form_sub_title">Your email address will not be published. Required fields are marked *</h6>
                                    <h6 className="give_rating">Your Rating *</h6>
                                    <div className="reviewer_rating">
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </div>
                                </div>
                                <div className="comment-respond mt-4">
                                    <form className="comment-form" action="register.php" method="post">
                                        <div className="form-container">
                                            <div className="row">
                                                <div className="col-md-12 col-lg-12">
                                                    <div className="form-group">
                                                        <textarea name="message" className="form-control" placeholder="Text Here*" required="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6">
                                                    <div className="form-group">
                                                        <input type="text" name="name" className="form-control" placeholder="Name*" required="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-6">
                                                    <div className="form-group">
                                                        <input type="email" name="email" className="form-control" placeholder="E-mail*" required="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-lg-12">
                                                    <div className="btn_group">
                                                        <input className="btn olive" type="submit" value="Submit" name="submit" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default ProductDetails;
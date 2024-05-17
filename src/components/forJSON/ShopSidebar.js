import React, { createContext, useEffect, useState } from 'react';
import WidgetTitle from '../../components/WidgetTitle';
import WidgetSearch from '../../containers/WidgetSearch';
// import '../assets/plugins/price_range/script';
import CategoryItem from './CategoryItem';
export const CategoryContext = createContext();


const ShopSidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://mrittik-server.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    
    
    // useEffect(() => {
    //     $("#slider-range").slider({
    //         range: true,
    //         min: 10,
    //         max: 1500,
    //         values: [100, 500],
    //         slide: function (event, ui) {
    //             $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    //         }
    //     });

    //     $("#amount").val("$" + $("#slider-range").slider("values", 0) +
    //         " - $" + $("#slider-range").slider("values", 1));

    // }, []);

    return (
        <div className="shop_sidebar">
            <WidgetSearch />
            <div id="category" className="widget widget_categories">
                <WidgetTitle title='Product Categories' className='widget-title'/>
                <CategoryContext.Provider value={categories}>
                <ul className="sidebar_category">
                    {
                        categories.map(category => <CategoryItem
                            key={category.id}
                            categoryItem={category}
                        ></CategoryItem>)
                    }

                </ul>
                </CategoryContext.Provider>
            </div>

            {/* <div id="pricerange" className="widget widget_additional_filter">
                <h2 className="widget-title">Price Filter <span className="title-line"></span></h2>
                <div className="sidebar_price_filter">
                    <div id="slider-range" className="range-bar"></div>
                    <div className="range-value d-flex justify-content-end">
                        <span>Price:</span> <input type="text" id="amount" readOnly />
                    </div>
                </div>
            </div> */}

            <div id="brand" className="widget widget_brand">
                <h2 className="widget-title">Filter by Brand <span className="title-line"></span></h2>
                <div className="sidebar_brand">
                    <form action="checkout.php" method="post">
                        <div className="form-check">
                            <label for="checkbox1">ChanMilwaukee (32)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox1" name="checkbox1" value="" />
                        </div>
                        <div className="form-check">
                            <label for="checkbox2">Makita (09)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox2" name="checkbox2" checked value="" />
                        </div>
                        <div className="form-check">
                            <label for="checkbox3">DeWalt (02)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox3" name="checkbox3" value="" />
                        </div>
                        <div className="form-check">
                            <label for="checkbox4">Festool (12)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox4" name="checkbox4" value="" />
                        </div>
                        <div className="form-check">
                            <label for="checkbox5">Bosch Tools (22)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox5" name="checkbox5" value="" />
                        </div>
                        <div className="form-check">
                            <label for="checkbox6">Ridgid (16)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox6" name="checkbox6" value="" />
                        </div>
                    </form>
                </div>
            </div>

            <div id="size" className="widget widget_size">
                <h2 className="widget-title">Filter by Type <span className="title-line"></span></h2>
                <div className="sidebar_brand">
                    <form action="checkout.php" method="post">
                        <div className="form-check">
                            <label for="checkbox7">XL (09)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox7" name="checkbox7" value="" />
                        </div>
                        <div className="form-check">
                            <label for="checkbox8">L (12)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox8" name="checkbox8" checked value="" />
                        </div>
                        <div className="form-check">
                            <label for="checkbox9">M (0)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox9" name="checkbox9" value="" />
                        </div>
                        <div className="form-check">
                            <label for="checkbox10">S (12)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox10" name="checkbox10" value="" />
                        </div>
                        <div className="form-check">
                            <label for="checkbox11">XS (22)</label>
                            <input type="checkbox" className="form-check-input" id="checkbox11" name="checkbox11" value="" />
                        </div>
                    </form>
                </div>
            </div>

            <div id="popular" className="widget widget_popular_entries">
                <h2 className="widget-title">Popular Products <span className="title-line"></span></h2>
                <div className="sidebar_popular_products">
                    <ul className="popular_product_list">
                        <li className="popular_product_item">
                            <div className="popular_product_image">
                                <img className="primary_img" src="images/shop/products/1-1.png" alt="img" />
                            </div>
                            <div className="popular_product_content">
                                <h5 className="product_title"><a href="#">Decor Plant</a></h5>
                                <h6 className="product_price">$22.00</h6>
                            </div>
                        </li>
                        <li className="popular_product_item">
                            <div className="popular_product_image">
                                <img className="primary_img" src="images/shop/products/7-1.png" alt="img" />
                            </div>
                            <div className="popular_product_content">
                                <h5 className="product_title"><a href="#">Center Table</a></h5>
                                <h6 className="product_price">$22.00</h6>
                            </div>
                        </li>
                        <li className="popular_product_item">
                            <div className="popular_product_image">
                                <img className="primary_img" src="images/shop/products/9-1.png" alt="img" />
                            </div>
                            <div className="popular_product_content">
                                <h5 className="product_title"><a href="#">Black Vase</a></h5>
                                <h6 className="product_price">$22.00</h6>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="tags" className="widget widget_tag_cloud">
                <h2 className="widget-title">Product Tag <span className="title-line"></span></h2>
                <div className="sidebar_tags">
                    <ul className="tag_list">
                        <a href="#">Architecture</a>
                        <a href="#">Interior</a>
                        <a href="#">Trendy</a>
                        <a href="#">Decor</a>
                        <a href="#">Dining</a>
                        <a href="#">Lawn</a>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default ShopSidebar;
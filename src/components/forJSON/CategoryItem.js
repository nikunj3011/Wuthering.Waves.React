import React from 'react';

const CategoryItem = ({ categoryItem }) => {
    const { id, name, href, item1, item2, item3, categoryID } = categoryItem;

    return (
        <li className="category_item">
            <div className="category_item_inner">
                {/* <Link to={`/shop-category/${categoryID}`}> */}
                <div className="cat_name"><a href="#">{name}</a></div>
                {/* </Link> */}
                <span className="cat_toggler">
                    <a data-bs-toggle="collapse" href={href}>
                        <i className="bi bi-chevron-right"></i>
                    </a>
                </span>
            </div>
            <ul id={id} className="child_category collapse">
                <li>
                    <div className="cat_name"><a href="#">{item1}</a></div>
                </li>
                {/* <>
                {
                    item1 ? <>
                                <li>
                                <div className="cat_name"><a href="#">{item1}</a></div>
                                </li> 
                            </> : <></>
                }
                </> */}

                <>
                {
                    item2 ? <>
                                <li>
                                <div className="cat_name"><a href="#">{item2}</a></div>
                                </li> 
                            </> : <></>
                }
                </>
                <>
                {
                    item3 ? <>
                                <li>
                                <div className="cat_name"><a href="#">{item3}</a></div>
                                </li> 
                            </> : <></>
                }
                </>
               
            </ul>
        </li>
    );
};

export default CategoryItem;
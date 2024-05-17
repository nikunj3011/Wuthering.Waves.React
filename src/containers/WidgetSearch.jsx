import React from 'react';

const WidgetSearch = () => {
    return (
        <div id="search" className="widget widget_search">
            <div className="sidebar_search">
                <div className="search_form">
                    <input type="text" name="search" className="keyword form-control" placeholder="Search Products" />
                    <button type="submit" className="form-control-submit"><i className="bi bi-search"></i></button>
                </div>
            </div>
        </div>
    );
};

export default WidgetSearch;
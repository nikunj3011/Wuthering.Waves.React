import React from 'react';

const PostFooter = () => {

    return (
        <div className="post-footer">
            <nav className="d-flex align-items-center justify-content-between">
                <div className="details_link l-dir pagination-previous"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
                <div className="page-all"><a href="#"><i className="bi bi-grid"></i></a></div>
                <div className="details_link r-dir pagination-next"><a href="#"><span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
            </nav>
        </div>

    );
};

export default PostFooter;
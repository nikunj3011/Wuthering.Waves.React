import React from 'react';

const BlogCard = (props) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="blog_post mb-0">
                <img src={props.img} alt="img" />
                <div className="blog_content">
                    <h2 className="post-count">{props.postCount}</h2>
                    <div className="meta">
                        <time className="text-olive" dateTime={props.dateTime}>{props.date}</time>
                    </div>
                    <h5><a href="/blog-details" className="text-white">{props.title}</a></h5>
                    <p>{props.text}</p>
                    <div className="details_link"><a href="/blog-details"><span className="link_text">View Details</span> <span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
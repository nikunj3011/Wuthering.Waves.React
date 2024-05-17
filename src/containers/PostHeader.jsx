import React from 'react';

const PostHeader = (props) => {
    return (
        <div className="post-header">
            <h3 className="post-title">{props.title}</h3>
        </div>
    );
};

export default PostHeader;
import React from 'react';
import './DetailsBlogs.css'

const DetailsBlogs = ({detailsBlog}) => {
    // const {name, description} = props.detailsBlog;
    return (
        <div className="mt-5 detailsBlog-part">
            <h1 className="font-weight-bold">{detailsBlog.name}</h1>
            <p>{detailsBlog.description}</p>
            <div className="blogs-btn mt-5 mb-4">
                <button className="btn btn-success mr-2">Update</button>
                <button className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
};

export default DetailsBlogs;
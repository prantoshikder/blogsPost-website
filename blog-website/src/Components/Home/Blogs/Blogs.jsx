import React, { useEffect, useState } from 'react';
import BlogsCard from '../BlogsCard/BlogsCard';

const Blogs = () => {
    const [blogsData, setBlogsData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bloglist')
        .then(res => res.json())
        .then(data => setBlogsData(data));
    })

    return (
        <div className="blogs-part mt-5 mb-5 pb-5">
            <div className="container">
                <div className="blogs-heading text-center">
                    <h1 className="font-weight-bold text-uppercase">Blogs</h1>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="row">
                        {
                            blogsData.map(blogsData => <BlogsCard key={blogsData._id} blogsData={blogsData}></BlogsCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
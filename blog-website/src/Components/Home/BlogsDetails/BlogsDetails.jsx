import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogsFakeData from '../BlogsFakeData/BlogsFakeData';
import DetailsBlogs from '../DetailsBlogs/DetailsBlogs';

const BlogsDetails = () => {
    const {BlogsCard} = useParams();
    const [blogsContent, setBlogsContent] = useState(BlogsFakeData)
    const [detailsBlog, setDetailsBlog] = useState([]);
    useEffect( ()=>{
        const blogs = blogsContent.filter(bd => bd.name.toLowerCase() === BlogsCard.toLowerCase());
        setDetailsBlog(blogs);
    }, [BlogsCard])

    return (
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div>
                    <div>
                        {
                            detailsBlog.map(detailsBlog => <DetailsBlogs detailsBlog={detailsBlog}></DetailsBlogs>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsDetails;
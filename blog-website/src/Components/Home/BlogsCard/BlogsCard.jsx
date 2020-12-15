import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./BlogsCard.css"

const BlogsCard = ({blogsData}) => {

    const deleteBlogsPost = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data) {
                alert("Delete successfully");
            }
        })
    }
    
    

    return (
        <div className="col-md-4 mt-5">
            <div className="card-group">
                <div className="card">
                    {/* <img src={blogsData.image} alt=""/> */}
                    <div className="card-body">
                        <h5 className="font-weight-bold">{blogsData.name}</h5>
                        <p>{blogsData.description}</p>
                        <Link to={`/updatepost/${blogsData._id}`}>
                            <button className="btn btn-success font-weight-bold ml-2 mr-2">Update</button>
                        </Link>
                        <button onClick={() => deleteBlogsPost(blogsData._id)} className="btn btn-danger font-weight-bold">Delete</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsCard;
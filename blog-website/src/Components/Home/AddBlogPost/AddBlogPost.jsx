import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddBlogPost.css'


const AddBlogPost = () => {

    const [blogsInfo, setBlogsInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newBlogsInfo = { ...blogsInfo };
        newBlogsInfo[e.target.name] = e.target.value;
        setBlogsInfo(newBlogsInfo)
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(blogsInfo);
        formData.append('file', file);
        formData.append('name', blogsInfo.name);
        formData.append('description', blogsInfo.description);

        fetch('http://localhost:5000/addBlogPost', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    alert("successfully");
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="pt-5" style={{backgroundColor: 'rgba(0,212,255,0.300455216266194)', height:'100vh', width:'100%'}}>
            <div className="row">
                <div className="col-md-6 offset-md-3 addBlogPost-part" style={{marginTop:'10%'}}>
                    <form>
                        <div className="form-group">
                            <label>Author Name</label>
                            <input onBlur={handleBlur} type="text" name="name" className="form-control" placeholder="Author Name" autoComplete="off" />
                        </div>
                        <div className="form-group">
                            <label>Blogs</label>
                            <textarea onBlur={handleBlur} type="text" name="description" className="form-control" placeholder="description" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <input onChange={handleFileChange} type="file" name="file" className="form-control-file" />
                        </div>
                    </form>
                    <Link to="/">
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default AddBlogPost;
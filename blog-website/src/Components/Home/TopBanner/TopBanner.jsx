import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../../Image/banner-img.png';
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div className="top-banner-part">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="banner-content">
                            <h1 className="font-weight-bold">Our Blogs</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, molestiae pariatur modi et ipsam illum earum autem laudantium fuga esse corporis libero, praesentium magnam eveniet?</p>
                            <div className="banner-btn">
                                <Link to="/addblogpost">
                                    <a className="font-weight-bold" aria-current="page" href="#">Add BlogPost</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="banner-img">
                            <img src={bannerImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer-part">
            <div className="container">
                <div className="footer-heading">
                    <h2 className="font-weight-bold text-white">Contact Us</h2>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quod!</p>
                </div>
                <div className="footer-content pt-4">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div>
                                        <ul className="text-white">
                                            <li>prantoshikder24@gmail.com</li>
                                            <li>+8801722225588</li>
                                            <li>Dhanmondi-27 <br />Dhaka, Bangladesh</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div>
                                        <ul>
                                            <li><a style={{ textDecoration: 'none', color: '#fff' }} href="#">Home</a></li>
                                            <li><a style={{ textDecoration: 'none', color: '#fff' }} href="#">About Us</a></li>
                                            <li><a style={{ textDecoration: 'none', color: '#fff' }} href="#">Service</a></li>
                                            <li><a style={{ textDecoration: 'none', color: '#fff' }} href="#">Blogs</a></li>
                                            <li><a style={{ textDecoration: 'none', color: '#fff' }} href="#">Our Team</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="social-icon">
                                <ul className="d-flex">
                                    <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
                                    <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                                    <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon" icon={faGithub} /></a></li>
                                    <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                                    <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 offset-md-1">
                            <div className="contact-form">
                                <form>
                                    <div className="form-group">
                                        <label className="text-white" for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" placeholder="Enter Your Email" name="email" autoComplete="off" />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-white" for="exampleInputPassword1">Description</label>
                                        <textarea className="form-control" placeholder="Description" rows="3"></textarea>
                                    </div>
                                    <button className="btn btn-primary font-weight-bold" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';

const Header = () => {
    return (
        <div className="header-top bg-light">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand font-weight-bold" href="#">BlogPost</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active font-weight-bold" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-weight-bold" aria-current="page" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-weight-bold" aria-current="page" href="#">Blogs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-weight-bold" aria-current="page" href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
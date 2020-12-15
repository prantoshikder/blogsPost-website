import React from 'react';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopBanner></TopBanner>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;
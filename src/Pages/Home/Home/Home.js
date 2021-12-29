import React from 'react';
import About from '../About/About';
import Bannar from '../Bannar/Bannar';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div id="home">
            <Bannar></Bannar>
            <Projects></Projects>
            <About></About>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
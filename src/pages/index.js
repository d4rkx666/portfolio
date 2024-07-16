import React from "react";
import { MainHeaderBody } from './../components/MainHeaderBody';
import { Footer } from './../components/Footer';
import { Portfolio } from './../components/Portfolio';
import { Skills } from './../components/Skills';
import { About } from './../components/About';
 
const Home = () => {
    return (
        <div>
        <MainHeaderBody />
        <Portfolio/>
        <Skills/>
        <About/>
        <Footer/>
        </div>
    );
};
 
export default Home;
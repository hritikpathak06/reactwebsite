import React from 'react';
import web from '../images/logo.jpg';
import { NavLink } from 'react-router-dom';
import Common from './Common';

const Home = () => {
    return (
        <>
           <Common
           name='Grow Your Buissness With' 
           imgsrc={web}
           visit='/services'
           btnname='Get Started'
           />
        </>
    )
}

export default Home;

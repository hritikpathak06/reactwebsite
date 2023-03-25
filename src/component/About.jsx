import React from 'react';
import web from '../images/rocket.avif';
import { NavLink } from 'react-router-dom';
import Common from './Common';

const About = () => {
    return (
        <>
           <Common 
           name='Welcome To About Page Of' 
           imgsrc={web}
           visit='/contact'
           btnname='Contact Us'
           />
        </>
    )
}

export default About;

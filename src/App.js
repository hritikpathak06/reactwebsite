import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './component/Home';
import Services from './component/Services';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './Navbar';
import Footer from './component/Footer';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<Navigate to='/' replace/>}/>
    </Routes>
    <Footer/>
    </>
  );
};

export default App;

import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Landingpage/Home';
import About from './About/About';
import Career from './Career/Career';
import ContectUs from './Contect_Us/Contect_Us';
import Cart from './Cart/Cart';

export default function NavRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Career' element={<Career/>} />
            <Route path='/contect_us' element={<ContectUs/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/' element={<Navigate to ='/home'/>} />

          </Routes>
    </BrowserRouter>
  )
}

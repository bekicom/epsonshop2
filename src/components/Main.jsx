import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../page/Home'

export default function Main() {
  return (
    <div className='main'>
      <header>
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          ShopNow</p>
        <select name="" id="">
          <option value="">Eng</option>
          <option value="">Rus</option>
          <option value="">Uzb</option>
        </select>
      </header>

      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />

      </Routes>






    </div>
  )
}

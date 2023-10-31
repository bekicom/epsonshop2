import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Createacc from "../page/Createacc";
import Login from "../page/Login";
import Footer from "./Footer";
import About from "../page/About";
import Contact from "../page/Contact";
import Wishing from "../page/Wishing";

export default function Main() {
  return (
    <div className="main">
      <header>
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          ShopNow
        </p>
        <select name="" id="">
          <option value="">Eng</option>
          <option value="">Rus</option>
          <option value="">Uzb</option>
        </select>
      </header>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Createacc />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Wishing />
      <Footer />
    </div>
  );
}

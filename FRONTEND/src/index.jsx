import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './Landing_page/Home/HomePage.jsx'
import AboutPage from './Landing_page/About/AboutPage.jsx'
import PricingPage from './Landing_page/Pricing/PricingPage.jsx'
import ProductPage from './Landing_page/Product/ProductPage.jsx'
import SignupPage from './Landing_page/SignUp/SignupPage.jsx'
import SupportPage from './Landing_page/Support/SupportPage.jsx'
import Navbar from './Landing_page/Navbar.jsx'
import Footer from './Landing_page/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/product" element={<ProductPage/>}></Route>
      <Route path="/pricing" element={<PricingPage />}></Route>
      <Route path="/Signup" element={<SignupPage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="*" element={<HomePage />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
)

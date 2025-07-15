import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function ZerodhaNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm mb-3">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center fs-4 ml-5 sticky-top " to="/" >
          <img
            src="/images/logo.svg"
            alt="Zerodha"
            height="17"
            width="130"
            className="me-2"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-center p-2">
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/signup" >Signup</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/about" >About</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/product" >Products</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/pricing" >Pricing</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/support" >Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

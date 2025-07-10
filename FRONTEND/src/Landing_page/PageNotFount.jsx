import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center p-4">
      <img
        src="/images/stock-inedx.jpg"
        alt="Stock Market Index"
        style={{ maxWidth: "400px", width: "100%", marginBottom: "30px" }}
      />
      <h1 className="display-4 fw-bold text-danger">404 - Page Not Found</h1>
      <p className="lead text-muted mb-4">
        Sorry, the page you are looking for doesn’t exist.
      </p>
      <Link to="/" className="btn btn-primary px-4 py-2">
        Go to Homepage
      </Link>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function LoginPage() {
  const [errors, setErrors] = useState({});
  let [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const validateForm = () => {
    let newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";
    return newErrors;
  };

  let handleOnChanges = (event) => {
    let { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  let handleOnSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setErrors({});
    let { data } = await axios.post(
      "https://zerodha-1ppf.onrender.com/login",
      {
        ...inputValue,
      },
      { withCredentials: true }
    );

    if (data.success) {
      console.log("Logged in");
    } else {
      console.error("Login failed:", data.message);
    }

    let handleSuccess = (msg) =>
      toast.success(msg, {
        position: "bottom-right",
    });

    let handleError = (err) => toast.error(err, {
        position: "bottom-left",
    })

    let { success, message } = data;
    if (success) {
      handleSuccess(message);
      setTimeout(() => {
        window.location.href = "http://localhost:5173";
      }, 1000);
    } else {
        handleError(message)
    }

    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div className="row m-5 p-5">
      <h1 className="col-6 offset-3 mt-3">Login</h1>
      <div className="col-6 offset-3 mt-3">
        <form onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="username" className="form-label">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="username"
              value={email}
              onChange={handleOnChanges}
              className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
            />
            {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
          </div>
          <div>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleOnChanges}
              className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
            />{" "}
            {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            <br />
          </div>
          <button className="btn btn-outline-primary">Login</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

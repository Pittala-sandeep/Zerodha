import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function SignUp() {
  const [errors, setErrors] = useState({});
  let [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { email, password, username } = inputValue;

  const validateForm = () => {
    let newErrors = {};
    if (!username.trim()) newErrors.username = "Username is required";
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

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    try {
      const { data } = await axios.post(
        "https://zerodha-1ppf.onrender.com/signup",
        inputValue,
        { withCredentials: true }
      );

      const { success, message, user } = data;

      const handleError = (msg) =>
        toast.error(msg, { position: "bottom-left" });
      const handleSuccess = (msg) =>
        toast.success(msg, { position: "bottom-right" });

      if (success) {
        handleSuccess(message);
        console.log("Signed up user:", user);
        setTimeout(() => {
          window.location.href = "http://localhost:5173";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log("Signup error:", error);
      toast.error("Something went wrong", { position: "bottom-left" });
    }

    // Reset form
    setInputValue({ email: "", password: "", username: "" });
  };

  return (
    <div className="col-6 mt-3">
      <h2 className="col-6 mt-3">SignUp Now</h2>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleOnChanges}
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
          />
          {errors.username && (
            <div className="invalid-feedback">{errors.username}</div>
          )}
          <br />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleOnChanges}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />{" "}
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
          <br />
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
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />{" "}
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
          <br />
        </div>
        <button className="btn btn-outline-primary">SignUp</button>
        <span className="ms-3">
          Already have an account? <a href="/login">Login</a>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

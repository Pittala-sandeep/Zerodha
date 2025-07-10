import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function SignUp() {
  const [alertMessage, setAlertMessage] = useState("");
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

  let handleOnSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setErrors({});
    try {
      let { data } = await axios.post(
        "http://localhost:5000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      const handleError = (err) =>
        toast.error(err, {
          position: "bottom-left",
        });
      const handleSuccess = (msg) =>
        toast.success(msg, {
          position: "bottom-right",
        });

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:5174";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const msg = params.get("message");
    if (msg) {
      setAlertMessage(msg);
    }
  }, []);

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
      <div>
        {alertMessage && (
          <div className="alert alert-warning">{alertMessage}</div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

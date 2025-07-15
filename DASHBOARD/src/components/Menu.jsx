import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Menu = () => {
  const [selectMenu, setSelectedMenu] = useState(-1);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  let handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const fetchUser = async () => {
    try {
      const res = await axios.get("https://zerodha-1ppf.onrender.com/userDetails", {
        withCredentials: true,
      });

      if (res.data.success) {
        setUser(res.data.user);
      } else {
        console.warn("User fetch failed:", res.data.message);
      }
    } catch (err) {
      console.error("Error fetching user from cookie:", err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try{
    let { data } = await axios.get("https://zerodha-1ppf.onrender.com/logout", { withCredentials: true });
    const { success, message } = data;

    const handleError = (msg) =>
      toast.error(msg, { position: "bottom-left" });
    const handleSuccess = (msg) =>
      toast.success(msg, { position: "bottom-right" });

    if (success) {
          handleSuccess(message);
          setTimeout(() => {
            window.location.href = "http://localhost:5174";
          }, 1000);
        } else {
          handleError(message);
        }
      } catch (error) {
        console.log("Logut error:", error);
        toast.error("Something went wrong", { position: "bottom-left" });
      }

    setUser(null);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus d-flex align-items-center">
        <ul className="d-flex align-items-center">
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
          <li style={{ position: "relative" }}>
            <div
              className={`profile ${
                selectMenu === 6 ? activeMenuClass : menuClass
              }`}
              onClick={() => setShowDropdown(!showDropdown)}
              style={{ cursor: "pointer" }}
            >
              <div className="avatar">
                <i className="fa-solid fa-user"></i>
              </div>
              <p className="username">{user ? user.username : "loading.."}</p>
            </div>

            {showDropdown && user && (
              <div className="showDropDown">
                <p>
                  <strong>Username:</strong> {user.username}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </li>
        </ul>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Menu;

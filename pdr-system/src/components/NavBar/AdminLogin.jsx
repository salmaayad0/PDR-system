import React, { useState } from "react";
import style from "./Nav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { adminLoginCheck } from "../../redux/slices/admin";
import { Link, useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  let { error, adminState } = useSelector((state) => state.adminLoginSlice);

  const navgate = useNavigate();

  const clearForm = () => {
    setFormData({
      username: "",
      password: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateFormData = (data) => {
    const errors = {};

    if (!data.username) errors.username = "name is required";
    else if (data.username.length <= 3) errors.username = "name is invalid";

    if (!data.password) errors.password = "Password is required";
    else if (data.password.length < 2) errors.password = "Wrong Password";

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length === 0) {
      // submit form data
      // send data to backend
      let username = formData.username;
      let password = formData.password;
      const admin = dispatch(adminLoginCheck({ username, password }));
      if(!error){
        localStorage.setItem("admin", admin);
        navgate("/admin");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin");
    adminState = {};
    clearForm();
    navgate('/');
    window.location.reload();
  };

  if(adminState){
    return (
      <div>
        <p 
        className={style.adminInput}
        >{formData.username}
        </p>
        <Link
        to={'/'} 
        onClick={handleLogout} 
        className={style.sumitButton}
        >
          Logout
        </Link>
      </div>
    ) 
  }
 else{
  return (
    <>
    <form 
    method="POST" 
    className="dropdown-item" 
    onSubmit={handleSubmit}
    >
      <li className="mb-2">
        <input
          className={`form-control form-control-sm ` + style.adminInput}
          type="text"
          name="username"
          placeholder="admin user name"
          aria-label="admin user name"
          value={formData.username}
          onChange={handleInputChange}
        />
        {errors.username && (
          <span 
          className="error"
          >
          {errors.username}
          </span>
        )}
      </li>

      <li className="mb-2">
        <input
          className={`form-control form-control-sm ` + style.adminInput}
          type="password"
          name="password"
          placeholder="your password"
          aria-label="your password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && (<span className="error">{errors.password}</span>)} 
      </li>

      <li>
        <button 
        type="submit" 
        className={style.sumitButton}
        >
        Login
        </button>
        {error ? <p className="error">{error}</p> : ''}
      </li>
    </form>
  </>
  );
 } 
}

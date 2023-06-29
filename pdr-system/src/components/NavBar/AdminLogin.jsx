import React, { useState } from "react";
import style from "./Nav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { adminLoginCheck } from "../../redux/slices/admin";
import { useNavigate } from "react-router-dom";

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
      handleRequest(username, password);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleRequest = async (username, password) => {
    try {
      const admin = await dispatch(adminLoginCheck({ username, password }));

      localStorage.setItem("admin", admin);
      navgate("/admin");
    } 
    catch (error) 
    {
      clearForm();
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin");
    adminState = null;
    clearForm();
    navgate("/");
  };

  if (adminState){
    return (
      <div>
        <p 
        className={style.adminInput}
        >{formData.username}
        </p>
        <button 
        onClick={handleLogout} 
        className={style.sumitButton}
        >
          Logout
        </button>
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
            onInput={handleInputChange}
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
          {error && <p className="error">{error}</p>}
        </li>
      </form>
    </>
  );
 } 
}

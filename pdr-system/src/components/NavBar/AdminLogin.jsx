import React, { useState } from "react";
import style from "./Nav.module.css";

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateFormData = (data) => {
    const errors = {};

    if (!data.userName) 
    errors.userName = "name is required";
    else if (data.userName.length < 3) 
    errors.userName = "name is invalid";

    if (!data.password) 
    errors.password = "Password is required";
    else if (data.password.length < 8)
      errors.password = "Wrong Password";

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length === 0) {
      // submit form data
      // send data to backend
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <form
        method="POST"
        className="dropdown-item"
        action="/"
        onSubmit={handleSubmit}
      >
        <li className="mb-2">
          <input
            className={`form-control form-control-sm ` + style.adminInput}
            type="text"
            name="userName"
            placeholder="admin user name"
            aria-label="admin user name"
            value={formData.userName}
            onChange={handleInputChange}
          />
          {errors.userName && <span className="error">{errors.userName}</span>}
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
          {errors.password && <span className="error">{errors.password}</span>}
        </li>

        <li>
          <button type="submit" className={style.sumitButton}>
            Login
          </button>
        </li>
      </form>
    </>
  );
}

import React, { useState } from "react";

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailPattern.test(email);
  };


  const validateFormData = (data) => {
    const errors = {};

    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Email is invalid';
    }
    if (!data.password) {
      errors.password = 'Password is required';
    } else if (data.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
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
      <form method="POST" className="dropdown-item" action="/" onSubmit={handleSubmit}>
        <li className="mb-1">
        <input
          className="form-control form-control-sm"
          type="email"
          name="email"
          placeholder="admin email"
          aria-label="admin email"
          value={formData.email} onChange={handleInputChange} 
        />
        {errors.email && <span className="error">{errors.email}</span>}
        </li>
        
        <li className="mb-1">
        <input
          className="form-control form-control-sm"
          type="password"
          name="password"
          placeholder="your password"
          aria-label="your password"
          value={formData.password} onChange={handleInputChange} 
        />
        {errors.password && <span className="error">{errors.password}</span>}
        </li>

        <li>
          <button type="submit" className="mb-1">Login</button>
        </li>

      </form>
    </>
  );
}

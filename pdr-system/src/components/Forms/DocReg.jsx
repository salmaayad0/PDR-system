import React, { useState } from 'react'
import style from "./Form.module.css";

export default function DocReg() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone_number: "",
        major: "",
        address: "",
        password: "",
        confirm_password: "",
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateFormData = (data) => {
        const errors = {};
        const mailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const phoneReg = /^(01|\+201|01)[0-2,5]{1}[0-9]{8}$/g;
    
        if (!data.name) errors.name = "name is required";
        else if (data.name.length <= 3) errors.name = "name is invalid";
    
        if (!data.password) errors.password = "Password is required";
        else if (data.password.length < 2) errors.password = "Wrong Password";

        if (!data.confirm_password) errors.confirm_password = "confirm password";
        else if (data.confirm_password !== data.password) 
        errors.confirm_password = "confirm Password has to match password";

        if (!data.email) errors.email = "email is required";
        else if (!mailReg.test(data.email)) errors.email = "email is invalid";

        if (!data.phone_number) 
        errors.phone_number = "phone number is required";
        else if (!phoneReg.test(data.phone_number)) 
        errors.phone_number = "phone number is invalid";

        if(!data.major) errors.major = "major is required";
    
        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateFormData(formData);
        if (Object.keys(validationErrors).length === 0) {
          // submit form data
          // send data to backend
          console.log('done');
        } else {
          setErrors(validationErrors);
        }
      };

  return (
    <>
     <form 
     method="POST"
     onSubmit={handleSubmit}
    >
     <div className={`mb-2 ` + style.formInput}>
          <input
            className='form-control form-control-sm '
            type="text"
            name="name"
            placeholder="name"
            aria-label="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          { errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input
            className='form-control form-control-sm '
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            onChange={handleInputChange}
            value={formData.email}
            required
          />
          { errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input
            className='form-control form-control-sm '
            type="text"
            name="phone_number"
            placeholder="phone number"
            aria-label="phone number"
            onChange={handleInputChange}
            value={formData.phone_number}
            required
          />
          { errors.phone_number && <span className="error">{errors.phone_number}</span>}
        </div>

        <div className={`mb-2 ` + style.formInput}>
        <select 
        name="major" 
        className='form-control form-control-sm ' 
        id="major"
        onChange={handleInputChange}
        value={formData.major}
        >
           <option disabled selected>Select Major</option>
           <option value="General">General</option>
           <option value="Cardiologist">Cardiology</option>
           <option value="Internal medicine">Internal medicine</option>
           <option value="Neurologist">Neurology</option>
           <option value="Obstetrics and gynaecology">Obstetrics and gynaecology</option>
           <option value="Dermatology">Dermatology</option>
           <option value="Anesthesiology">Anesthesiology</option>
           <option value="Family medicine">Family medicine</option>
           <option value="Pediatrics">Pediatrics</option>
         </select>
          { errors.major && <span className="error">{errors.major}</span>}
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input
            className='form-control form-control-sm '
            type="text"
            name="address"
            placeholder="address"
            aria-label="address"
            onChange={handleInputChange}
            value={formData.address}
          />
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input
            className='form-control form-control-sm '
            type="password"
            name="password"
            placeholder="set password"
            aria-label="set password"
            onChange={handleInputChange}
            value={formData.password}
            required
          />
          {errors.password && (<span className="error">{errors.password}</span>)} 
        </div>

        <div className={`mb-2 ` + style.formInput}>
          <input
            className='form-control form-control-sm '
            type="password"
            name="confirm_password"
            placeholder="confirm password"
            aria-label="confirm password"
            onChange={handleInputChange}
            value={formData.confirm_password}
            required
          />
          {errors.confirm_password && (<span className="error">{errors.confirm_password}</span>)} 
        </div>

        <div className="text-center">
          <button type="submit" className={style.sumitButton}>
            Login
          </button>
        { <span className="error">{}</span>}
        </div>
      </form>
    </>
  )
}

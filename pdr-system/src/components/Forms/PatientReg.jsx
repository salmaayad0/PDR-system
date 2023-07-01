import React, { useState } from 'react'
import style from "./Form.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { addPatient } from '../../redux/slices/patient';
import { useNavigate } from 'react-router-dom';

export default function PatientReg() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age:"",
        phone_number: "",
        gender: "",
        address: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const dispatch = useDispatch();

    const { error } = useSelector(state => state.patientSlice)

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateFormData = (data) => {
        const errors = {};
        const mailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const phoneReg = /^(01|\+201|01)[0-2,5]{1}[0-9]{8}$/g;
    
        if (!data.name) errors.name = "name is required";
        else if (data.name.length < 3) errors.name = "name is invalid";
    
        if (!data.password) errors.password = "Password is required";
        else if (data.password.length < 2) errors.password = "Wrong Password";

        if (!data.age) errors.age = "age is required";
        else if (data.age < 0) errors.age = "age invalid";

        if (!data.address) errors.address = "address is required";

        if (!data.email) errors.email = "email is required";
        else if (!mailReg.test(data.email)) errors.email = "email is invalid";

        if (!data.phone_number) 
        errors.phone_number = "phone number is required";
        else if (!phoneReg.test(data.phone_number)) 
        errors.phone_number = "phone number is invalid";

        if(!data.gender) errors.gender = "gender is required";
    
        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateFormData(formData);
        if (Object.keys(validationErrors).length === 0) {
          // submit form data
          // send data to backend
          dispatch(addPatient(formData));
          if(!error) navigate('/allpatients');
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
            type="number"
            name="age"
            placeholder="age"
            aria-label="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
          { errors.age && <span className="error">{errors.age}</span>}
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
        <input type="radio" id="male" name="gender" 
        value='male'
        checked={formData.gender === 'male'} 
        onChange={handleInputChange}
        />
        <label for="male">Male</label>

        <input type="radio" 
        id="female" name="gender" 
        value='female'
        checked={formData.gender === 'female'} 
        onChange={handleInputChange}
        />
        <label for="female">Female</label>

        { errors.gender && <span className="error">{errors.gender}</span>}
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
            required
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

        <div className="text-center">
          <button type="submit" className={style.sumitButton}>
            Login
          </button>
        { error && <span className="error text-danger">{error}</span>}
        </div>
      </form>
    </>
  )
}

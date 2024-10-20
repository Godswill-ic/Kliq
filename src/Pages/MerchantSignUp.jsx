import React, { useState } from 'react'
import './AffiliateSignUp/AffiliateSignUp.css'
import { useForm } from "react-hook-form";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';


// Top 30 countries in the world including Nigeria, in alphabetical order
const countryOptions = [
  {
    value: "+61",
    label: (
      <div>
        <img
          src="https://flagcdn.com/au.svg"
          alt="Australia"
          style={{ width: "20px", marginRight: "8px" }}
        />
        
      </div>
    ),
  },
  {
    value: "+55",
    label: (
      <div>
        <img
          src="https://flagcdn.com/br.svg"
          alt="Brazil"
          style={{ width: "20px", marginRight: "8px" }}
        />
         
      </div>
    ),
  },
  {
    value: "+1",
    label: (
      <div>
        <img
          src="https://flagcdn.com/ca.svg"
          alt="Canada"
          style={{ width: "20px", marginRight: "8px" }}
        />
        
      </div>
    ),
  },
  {
    value: "+86",
    label: (
      <div>
        <img
          src="https://flagcdn.com/cn.svg"
          alt="China"
          style={{ width: "20px", marginRight: "8px" }}
        />
         
      </div>
    ),
  },
  {
    value: "+45",
    label: (
      <div>
        <img
          src="https://flagcdn.com/dk.svg"
          alt="Denmark"
          style={{ width: "20px", marginRight: "8px" }}
        />
         
      </div>
    ),
  },
  {
    value: "+20",
    label: (
      <div>
        <img
          src="https://flagcdn.com/eg.svg"
          alt="Egypt"
          style={{ width: "20px", marginRight: "8px" }}
        />
        
      </div>
    ),
  },
  {
    value: "+33",
    label: (
      <div>
        <img
          src="https://flagcdn.com/fr.svg"
          alt="France"
          style={{ width: "20px", marginRight: "8px" }}
        />
         
      </div>
    ),
  },
  {
    value: "+49",
    label: (
      <div>
        <img
          src="https://flagcdn.com/de.svg"
          alt="Germany"
          style={{ width: "20px", marginRight: "8px" }}
        />
         
      </div>
    ),
  },
  {
    value: "+91",
    label: (
      <div>
        <img
          src="https://flagcdn.com/in.svg"
          alt="India"
          style={{ width: "20px", marginRight: "8px" }}
        />
         
      </div>
    ),
  },
  {
    value: "+62",
    label: (
      <div>
        <img
          src="https://flagcdn.com/id.svg"
          alt="Indonesia"
          style={{ width: "20px", marginRight: "8px" }}
        />
         
      </div>
    ),
  },
  {
    value: "+98",
    label: (
      <div>
        <img
          src="https://flagcdn.com/ir.svg"
          alt="Iran"
          style={{ width: "20px", marginRight: "8px" }}
        />
        
      </div>
    ),
  },
  {
    value: "+81",
    label: (
      <div>
        <img
          src="https://flagcdn.com/jp.svg"
          alt="Japan"
          style={{ width: "20px", marginRight: "8px" }}
        />
         
      </div>
    ),
  },
  {
    value: "+82",
    label: (
      <div>
        <img
          src="https://flagcdn.com/kr.svg"
          alt="South Korea"
          style={{ width: "20px", marginRight: "8px" }}
        />
        
      </div>
    ),
  },
  {
    value: "+60",
    label: (
      <div>
        <img
          src="https://flagcdn.com/my.svg"
          alt="Malaysia"
          style={{ width: "20px", marginRight: "8px" }}
        />
         
      </div>
    ),
  },
  {
    value: "+52",
    label: (
      <div>
        <img
          src="https://flagcdn.com/mx.svg"
          alt="Mexico"
          style={{ width: "20px", marginRight: "8px" }}
        />
         
      </div>
    ),
  },
  {
    value: "+31",
    label: (
      <div>
        <img
          src="https://flagcdn.com/nl.svg"
          alt="Netherlands"
          style={{ width: "20px", marginRight: "8px" }}
        />
         
      </div>
    ),
  },
  {
    value: "+64",
    label: (
      <div>
        <img
          src="https://flagcdn.com/nz.svg"
          alt="New Zealand"
          style={{ width: "20px", marginRight: "8px" }}
        />
        
      </div>
    ),
  },
  {
    value: "+234",
    label: (
      <div>
        <img
          src="https://flagcdn.com/ng.svg"
          alt="Nigeria"
          style={{ width: "20px", marginRight: "8px" }}
        />
         
      </div>
    ),
  },
  {
    value: "+47",
    label: (
      <div>
        <img
          src="https://flagcdn.com/no.svg"
          alt="Norway"
          style={{ width: "20px", marginRight: "8px" }}
        />
         
      </div>
    ),
  },
  {
    value: "+92",
    label: (
      <div>
        <img
          src="https://flagcdn.com/pk.svg"
          alt="Pakistan"
          style={{ width: "20px", marginRight: "8px" }}
        />
         
      </div>
    ),
  },
  {
    value: "+51",
    label: (
      <div>
        <img
          src="https://flagcdn.com/pe.svg"
          alt="Peru"
          style={{ width: "20px", marginRight: "8px" }}
        />
         
      </div>
    ),
  },
  {
    value: "+63",
    label: (
      <div>
        <img
          src="https://flagcdn.com/ph.svg"
          alt="Philippines"
          style={{ width: "20px", marginRight: "8px" }}
        />
        
      </div>
    ),
  },
  {
    value: "+48",
    label: (
      <div>
        <img
          src="https://flagcdn.com/pl.svg"
          alt="Poland"
          style={{ width: "20px", marginRight: "8px" }}
        />
         
      </div>
    ),
  },
  {
    value: "+351",
    label: (
      <div>
        <img
          src="https://flagcdn.com/pt.svg"
          alt="Portugal"
          style={{ width: "20px", marginRight: "8px" }}
        />
        
      </div>
    ),
  },
  {
    value: "+7",
    label: (
      <div>
        <img
          src="https://flagcdn.com/ru.svg"
          alt="Russia"
          style={{ width: "20px", marginRight: "8px" }}
        />
        
      </div>
    ),
  },
  {
    value: "+27",
    label: (
      <div>
        <img
          src="https://flagcdn.com/za.svg"
          alt="South Africa"
          style={{ width: "20px", marginRight: "8px" }}
        />
        
      </div>
    ),
  },
  {
    value: "+34",
    label: (
      <div>
        <img
          src="https://flagcdn.com/es.svg"
          alt="Spain"
          style={{ width: "20px", marginRight: "8px" }}
        />
        
      </div>
    ),
  },
  {
    value: "+46",
    label: (
      <div>
        <img
          src="https://flagcdn.com/se.svg"
          alt="Sweden"
          style={{ width: "20px", marginRight: "8px" }}
        />
        
      </div>
    ),
  },
  {
    value: "+41",
    label: (
      <div>
        <img
          src="https://flagcdn.com/ch.svg"
          alt="Switzerland"
          style={{ width: "20px", marginRight: "8px" }}
        />
         
      </div>
    ),
  },
  {
    value: "+90",
    label: (
      <div>
        <img
          src="https://flagcdn.com/tr.svg"
          alt="Turkey"
          style={{ width: "20px", marginRight: "8px" }}
        />
        
      </div>
    ),
  },
  {
    value: "+44",
    label: (
      <div>
        <img
          src="https://flagcdn.com/gb.svg"
          alt="UK"
          style={{ width: "20px", marginRight: "8px" }}
        />
        
      </div>
    ),
  },
  {
    value: "+1",
    label: (
      <div>
        <img
          src="https://flagcdn.com/us.svg"
          alt="US"
          style={{ width: "20px", marginRight: "8px" }}
        />
        
      </div>
    ),
  },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    minWidth: '87px',  // Adjust the width here
    fontSize: '14px',   // Adjust the font size here
    border: 'none',
    background: '#F4F4F4',
    height: '40px',
    outline: 'none',
    cursor: 'pointer',
  }),
  menu: (provided) => ({
    ...provided,
    fontSize: '14px',   // Adjust the font size of the dropdown items
  }),
};

const MerchantSignUp = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  // const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  

  const onSubmit = (data) => {
    console.log(data);
    navigate(`/MerchantSignUpCont`);
    // Handle form submission
  };

  const redirect = () => {
    navigate(`/MerchantSignIn`);
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='affiliate-sign-up'>
      <div className='affiliate-section1'>
        <h3>Kliq</h3>
        <hr />
        <strong>This feels like the start of something really special</strong>
        <p>We hope you are as excited as we are</p>
      </div>

      <div className='affiliate-section2'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='name'>
            <div className='firstname'>
              <p>First Name:</p>
              <input
                type="text"
                {...register("firstName", { required: "First name is required" })}
              />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>

            <div className='lastname'>
              <p>Last Name:</p>
              <input
                type="text"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
          </div>

          <div className='name2'>
          <div className="tel">
              <p>Phone Number:</p>
              <div className="straight">
                    <Select
                      options={countryOptions}
                      placeholder=""
                      styles={customStyles}
                      {...register("countryCode", { required: "" })}
                    />
                {errors.countryCode && <p>{errors.countryCode.message}</p>}

                <input
                  type="tel"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  {...register('phoneNumber', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^\d+$/,
                      message: 'Phone number must be numeric',
                    },
                  })}
                />
              </div>
              {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
            </div>

            <div className='email'>
              <p>Email Address:</p>
              <div className='mail'>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              </div>
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          </div>

          <div className='password'>
            <p>Password:</p>
            <div style={{ display: "flex", alignItems: "center" }} className='align'>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
                style={{ marginLeft: "8px", cursor: "pointer", marginRight: "20px" }}
              />
            </div>
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          

            <div className='sign-up'>
              <button type="submit">Proceed</button>
            </div>

            <p className='end'>Have an account? <span className='login' onClick={redirect}> Log in here</span></p>
        </form>
        
      </div>
    </div>
    
  )
}

export default MerchantSignUp
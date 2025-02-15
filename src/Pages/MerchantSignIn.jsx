import React, { useState }  from 'react'
import './AffiliateSignIn/AffiliateSignIn.css'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

const MerchantSignIn = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [confirmEmail, setConfirmEmail] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`Confirmed Email: ${confirmEmail}`);
    // console.log(`Confirmed Email: ${confirmPassword}`);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='affiliate-sign-in'>
      <div className='affiliate-sign-in-1'>
        <h3>kliq</h3>
        <hr />
        <strong>Welcome back</strong>
        <p>Enter your details to sign in</p>
      </div>

      <div className='affiliate-sign-in-2'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='sign-in-email'>
            <p>Email address</p>
            <input
              type="email"
              placeholder=""
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              required
                />
          </div>

          <div className='sign-in-password'>
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

          <Link to='/MerchantDashboard' className='link'>
          <div className='affiliate-sign-in-btn'>
            <button type="submit">
              Sign in
            </button>
          </div>
        </Link>
        </form>

       

        <p className='base'>Don't have an account? <Link to="/MerchantSignUp" className='login'> Sign up here</Link></p>
        <Link to="/MerchantSignUp" className='login base'>Forgot password</Link>
      </div>
    </div>
  )
}

export default MerchantSignIn
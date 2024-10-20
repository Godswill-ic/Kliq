import React, { useState }  from 'react'
import './AffiliateEmailConfirm/AffiliateEmailConfirm.css'
import { useNavigate } from 'react-router-dom';

const MerchantEmailConfirm = () => {

  const [confirmEmail, setConfirmEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Confirmed Email: ${confirmEmail}`);
    navigate(`/MerchantPhoneConfirm`);
  };

  const redirect = () => {
    navigate(`/MerchantSignUp`);
  }

  return (
    <div className='affiliate-email-confirm'>
      <div className='affiliate-email-confirm-1'>
        <h3>kliq</h3>
        <hr />
        <strong>Confirm your email address</strong>
        <p>So we know its really you</p>
      </div>

      <div className='affiliate-email-confirm-2'>
        <span>Enter the code that was sent to your email address to confirm email</span>

        <form onSubmit={handleSubmit} className='email-confirm-form'>
          
          <p>Enter code</p>
          <input
            type="text"
            placeholder=""
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
              />
        

          <div className='sides'>
            <p className='side-1'>Resend code</p>
            <p className='side-2' onClick={redirect}>Edit email address</p>
          </div>

        
          <div className='affiliate-email-confirm-btn'>
            <button type="submit">
              Confirm
            </button>
          </div>
        </form>

       
        
      </div>
    </div>
  )
}

export default MerchantEmailConfirm
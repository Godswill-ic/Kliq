import React, { useState }   from 'react'
import './AffiliatePhoneConfirm/AffiliatePhoneConfirm.css'
// import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MerchantPhoneConfirm = () => {

  const [confirmPhone, setConfirmPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Confirmed Phone Number: ${confirmPhone}`);
    navigate(`/MerchantDashboard`);
  };

  const redirect = () => {
    navigate(`/MerchantSignUp`);
  }

  return (
    <div className='affiliate-phone-confirm'>
      <div className='affiliate-phone-confirm-1'>
        <h3>kliq</h3>
        <hr />
        <strong>Confirm your phone number</strong>
        <p>You know the drill... 😊</p>
      </div>

      <div className='affiliate-phone-confirm-2'>
        <span>Enter the code that was sent to your phone number to confirm phone number</span>

        <form onSubmit={handleSubmit} className='phone-confirm-form'>
          <p>Enter code</p>
          <input
            type="text"
            placeholder=""
            value={confirmPhone}
            onChange={(e) => setConfirmPhone(e.target.value)}
            required
              />

          <div className='sides'>
            <p className='side-1'>Resend code</p>
            <p className='side-2' onClick={redirect}>Edit phone number</p>
          </div>

        
          <div className='affiliate-phone-confirm-btn'>
            <button type="submit">
              Confirm
            </button>
          </div>

        </form>

       
      
      </div>
    </div>
  )
}

export default MerchantPhoneConfirm;
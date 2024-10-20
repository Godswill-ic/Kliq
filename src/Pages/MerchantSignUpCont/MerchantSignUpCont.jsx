import React, { useState } from 'react'
import '../MerchantSignUpCont/MerchantSignUpCont.css'
import '../AffiliateSignUp/AffiliateSignUp.css'
import '../Landing/Landing.css'
import { useNavigate } from 'react-router-dom';

const MerchantSignUpCont = () => {

  const [formData, setFormData] = useState({
    textInput: '',
    industry: '',
    dropdown2: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
    // You can perform any action with the form data here, such as an API call
    navigate(`/MerchantEmailConfirm`);
  };

  const redirect = () => {
    navigate(`/MerchantSignIn`);
  }

  return (
    <div className='affiliate-sign-up'>
      <div className='affiliate-section1'>
        <h3>Kliq</h3>
        <hr />
        <strong>This feels like the start of something really special</strong>
        <p>We hope you are as excited as we are</p>
      </div>

      <div className='merchant-sign-up'>
        <form onSubmit={handleSubmit}>

        <div className='company'>
          <p>Name of company</p>
          <input
            type="text"
            name="textInput"
            value={formData.textInput}
            onChange={handleChange}
            required
          />
        </div>

        <div className='industry'>
            <p>Industry</p>
            <div className='customized-dropdown'>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
              >
                <option value=""></option>
                <option value="Arts">Arts & Music</option>
                <option value="Autos">Autos & Vehicles</option>
                <option value="Beauty">Beauty & Makeup</option>
                <option value="Books">Books & Literature</option>
                <option value="Business">Business & Industry</option>
                <option value="Computers">Computers & Accessories</option>
                <option value="Dating">Dating & Romance</option>
                <option value="Electronics">Electronics</option>
                <option value="Events">Events</option>
                <option value="Fashion">Fashion & Clothing</option>
                <option value="Finance">Finance</option>
                <option value="Fitness">Fitness & Wellness</option>
                <option value="Food">Food & Drinks</option>
                <option value="Games">Games</option>
                <option value="Health">Health</option>
                <option value="Hobbies">Hobbies & Leisure</option>
                <option value="Home">Home & Garden</option>
                <option value="Internet">Internet & Telecom</option>
                <option value="Jobs">Jobs & Education</option>
                <option value="Law">Law & Government</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Movies">Movies & Entertainment</option>
                <option value="News">News</option>
                <option value="Online">Online communities</option>
                <option value="People">People & Society</option>
                <option value="Pets">Pets & Animals</option>
                <option value="Phones">Phones & Tablets</option>
                <option value="Real">Real Estate</option>
                <option value="Science">Science</option>
                <option value="Shopping">Shopping</option>
                <option value="Software">Software</option>
                <option value="Sports">Sports & Recreation</option>
                <option value="Travel">Travel</option>
                <option value="Web">Web Design & Development</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

            <div className='dropdown2'>
              <p>Do you have an active website?</p>
              <div className='customized-dropdown'>
                <select
                  name="dropdown2"
                  value={formData.dropdown2}
                  onChange={handleChange}
                >
                  <option value="" disabled></option>
                  <option value="optionA">Yes</option>
                  <option value="optionB">No</option>
                </select>
              </div>
            </div>

            <div className='sign-up'>
              <button type="submit">Sign up</button>
            </div>

            <p className='end-comment'>Have an account? <span onClick={redirect}>Login here</span></p>

        </form>
      </div>
    </div>
  )
}

export default MerchantSignUpCont
import React, { useState }  from 'react'
import "../Landing/Landing.css"
import LandingNav from '../../Components/LandingNav/LandingNav'
import LandingFooter from '../../Components/LandingFooter/LandingFooter'
import Rectangle33 from '../../assets/Rectangle-33.png'
import Rectangle46 from '../../assets/Rectangle-46.png'
import Rectangle47 from '../../assets/Rectangle-47.png'
import Rectangle49 from '../../assets/Rectangle49.png'
import Rectangle50 from '../../assets/Rectangle50.png'
import Rectangle51 from '../../assets/Rectangle51.png'
import Rectangle68 from '../../assets/Rectangle68.png'
import Rectangle69 from '../../assets/Rectangle69.png'
import Rectangle70 from '../../assets/Rectangle70.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import tiktok from '../../assets/tiktok.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import square6 from '../../assets/square6.png'
import square5 from '../../assets/square5.png'
import square4 from '../../assets/square4.png'
import square3 from '../../assets/square3.png'
import square2 from '../../assets/square2.png'
import square1 from '../../assets/square1.png'
import brand from '../../assets/brand.png'
import calendar from '../../assets/calendar.png'
import newProduct from '../../assets/new-product.png'
// import arrowDropDown from '../../assets/arrow-drop-down.png'


import { Link } from 'react-router-dom'

const Landing = () => {
  
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      description: '',
      industry: '',
      message: '',
      subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    // You can process the form submission here (e.g., API call)
  };

  

  return (
    <div className='landing'>
      <div>
        <LandingNav />
      </div>

      <div className='landing1'>
        <div className='landing1-container'>
          <div className='landing1-container-inner1'>
            <h1>Grow your business With affiliate marketing</h1>
            <p>Kliq lets you tap into the power of social networks to grow your business</p>
            <Link to="/MerchantSignUp"><button className='inner1--btn1'>Merchants</button></Link>
            <Link to="/AffiliateSignUp"><button className='inner1--btn2'>Marketers</button></Link>
          </div>

          <div className='landing1-container-inner2'>
            <img src={Rectangle33} alt="" className='r1'/>
            <img src={Rectangle46} alt="" className='r2'/>
            <img src={Rectangle47} alt="" className='r3'/>
          </div>
        </div>

        <div className='socials'>
          <img src={facebook} alt="" className='l1'/>
          <img src={instagram} alt="" className='l2'/>
          <img src={tiktok} alt="" className='l3'/>
          <img src={twitter} alt="" className='l4'/>
          <img src={youtube} alt="" className='l5'/>
        </div>
      </div>

      <div className='landing2'>
        <div className='landing2-inner1'>
          <h5>FOR MERCHANTS</h5>
          <hr />
          <span>No matter your industry</span>
          <p>We have the right affiliate partners for your brand</p>
        </div>

        <div className='landing2-inner2'>
          <div className='pair'>
            <div className='wrap'>
              <img src={square6} alt="" />
              <p>Technology</p>
            </div>

            <div className='wrap'>
              <img src={square5} alt="" />
              <p>e-Commerce</p>
            </div>
          </div>

          <div className='pair'>
            <div className='wrap'>
              <img src={square4} alt="" />
              <p>Travel</p>
            </div>

            <div className='wrap'>
              <img src={square3} alt="" />
              <p>Healthcare</p>
            </div>
          </div>

          <div className='pair'>
            <div className='wrap'>
              <img src={square2} alt="" />
              <p>Fashion</p>
            </div>

            <div className='wrap hide'>
              <img src={square1} alt="" />
              <p>Real-estate</p>
            </div>
          </div>
        </div>
      </div>

      <div className='landing3'>
        <div className='landing3-inner1'>
          <h4>Launch a campaign in 3 easy steps</h4>
          <p>Let the affiliates do the rest</p>
        </div>

        <div className='landing3-inner2'>
          <div className='cover'>
            <img src={brand} alt="" />
            <p>Add a product, brand<br />or service</p>
          </div>

          <hr />

          <div className='cover'>
            <img src={calendar} alt="" />
            <p>Affiliates start<br />promoting</p>
          </div>

          <hr />

          <div className='cover'>
            <img src={newProduct} alt="" />
            <p>Review sales and make<br />payments</p>
          </div>
        </div>
      </div>

      
      <div className='landing4'>
        
          <h5>We handle your marketing</h5>
          <p>So you can mind your business</p>
          <button className='l4-btn'>Start a campaign</button>
        

          <div className='image-container'>
            <img src={Rectangle50} alt="" className='i1'/>
            <img src={Rectangle49} alt="" className='i2'/>
            <img src={Rectangle51} alt="" className='i3'/>
          </div>
          
      </div>

      <div className='landing5'>
          <div className='landing5-inner1'>
            <img src={Rectangle68} alt="" />
            <img src={Rectangle69} alt="" />
            <img src={Rectangle70} alt="" />
          </div>

          <div className='landing5-inner2'>
            <span>FOR AFFILIATES</span>
            <hr />
            <h3>Work with brands you love</h3>
            <p>And get paid seamlessly</p>
            <Link to=''><button id="affiliate-btn">Sign up as an affiliate</button></Link>
          </div>
      </div>

      <div className='landing6'>
        <h3>Contact us</h3>
        <h5>Send us a proposal and we will get back to you with a response</h5>

        <div className='contact' onSubmit={handleSubmit}>

          <div className='contact1'>
            <div>
              <p>What is your name?</p>
              <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              />
            </div>

            <div>
              <p>What is your email address?</p>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div >
              <p>Which of this best describes you?</p>
              <div className='custom-dropdown'>
              <select
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              >
                <option value=""></option>
                <option value="merchant">I am a merchant</option>
                <option value="marketer">I am a marketer</option>
              </select>
              </div>
            </div>

            <div >
              <p>Select your interest/industry</p>
              <div className='custom-dropdown'>
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

          </div>

          <div className='contact2'>
            <p>Write a message</p>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

         
        </div>

        <div className='checkbox'  onSubmit={handleSubmit}>
            <label>
              <input
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
              />
              Subscribe to updates and newsletters from kliq
            </label>
        </div>

        <div className='contact-btn'  onSubmit={handleSubmit}><button type="submit">Send message</button></div>
      </div>
      
      <div>
        <LandingFooter />
      </div>
    </div>
  )
}

export default Landing
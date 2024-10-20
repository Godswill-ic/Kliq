import React, { useState, useEffect } from 'react'
import "../LandingNav/LandingNav.css"
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png"
import arrow from "../../assets/arrow.png"
import vendor2 from "../../assets/vendor-2.png"
import group73 from "../../assets/Group-73.png"
import menu from "../../assets/menu.png"

const LandingNav = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setShowDropdown(prevState => !prevState);
    };

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    }

    const handleMenuClickOutside = (event) => {
        if (!event.target.closest('.menu') && !event.target.closest('.nav-links')) {
          setIsMenuOpen(false);
        }
    };
    
    const handleClickOutside = (event) => {
        // Check if the click target is not within the dropdown area
        if (!event.target.closest('.dropdown')) {
          setShowDropdown(false);
        }
    };
    
    useEffect(() => {
        // Add event listener when the component mounts
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('click', handleMenuClickOutside);
    
        // Clean up the event listener when the component unmounts
        return () => {
          document.removeEventListener('click', handleClickOutside);
          document.removeEventListener('click', handleMenuClickOutside);
        };
    }, []);

    const handleMerchantSignUp = () => {
        navigate('/MerchantSignUp');
        setShowDropdown(false);
    };
    const handleAffiliateSignUp = () => {
        navigate('/AffiliateSignUp');
        setShowDropdown(false);
    };

  return (
    <div className='nav'>
            <div className='nav-logo'>
                <img alt='' src={logo} />
                <h3>Kliq</h3>
            </div>


            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <button className='nav-btn1'>Sign in</button>

                <button 
                    className='nav-btn2' 
                    onClick={(e) => {
                        e.stopPropagation(); // Stop propagation to prevent immediate closing of the dropdown
                        toggleDropdown(); // Toggle dropdown when clicked
                    }}
                >
                        Sign up {showDropdown && (
                            <div className="dropdown">
                                <div 
                                    className='dropdown-list-1' 
                                    onClick={handleMerchantSignUp}
                                >
                                    <div className='dd-item-1'>
                                        <img alt='' src={vendor2} />
                                    </div>
                                    <div className='dd-item-2'>
                                        <h5>Sign up as a merchant</h5>
                                        <p>Grow your sales by with our affiliate partners</p>
                                    </div>
                                    <div className='dd-item-3'>
                                        <img alt='' src={arrow} />
                                    </div>
                                </div>

                                <div 
                                    className='dropdown-list-2'
                                    onClick={handleAffiliateSignUp}
                                >
                                    <div className='dd-item-4'>
                                        <img alt='' src={group73} />
                                    </div>
                                    <div className='dd-item-2'>
                                        <h5>Sign up as a marketer</h5>
                                        <p>Get paid to promote goods and services</p>
                                    </div>
                                    <div className='dd-item-3'>
                                        <img alt='' src={arrow} />
                                    </div>
                                </div>
                            </div>
                        )}
                </button>
            </div>

            <div className='menu' onClick={toggleMenu}>
                <img alt='' src={menu} />
            </div>
        </div>
  )
}

export default LandingNav;
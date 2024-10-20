import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "../MainNav/MainNav.css"
import Group106 from "../../assets/group106.png"
import ellipse7 from "../../assets/ellipse7.png"
import Group132 from "../../assets/Group132.png"

const MainNav = () => {
    const [showDrop, setShowDrop] = useState(false);
    const navigate = useNavigate();

    const toggleDrop = () => {
        setShowDrop(prevState => !prevState);
    };
    const handleClickOutside = (event) => {
        // Check if the click target is not within the dropdown area
        if (!event.target.closest('.drop')) {
          setShowDrop(false);
        }
    };

    useEffect(() => {
        // Add event listener when the component mounts
        document.addEventListener('click', handleClickOutside);
    
        // Clean up the event listener when the component unmounts
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const Logout = () => {
        navigate('/Landing');
        setShowDrop(false);
    };

  return (
    <div className='main-nav'>
        <div className='main-nav1'></div>

        <div className='main-nav2'>
            <h2>kliq</h2>

            <div className='balance'>
                <p>CURRENT BALANCE</p>
                <strong>N0.00</strong>
            </div>

            

            <div className='profile'>
                <img className='notification' src={Group106} alt="" />
                <p>Lucky Ndube</p>

                <div 
                    onClick={(e) => {
                        e.stopPropagation(); // Stop propagation to prevent immediate closing of the dropdown
                        toggleDrop(); // Toggle dropdown when clicked
                    }}>
                <img src={ellipse7} alt=""/> {showDrop && (
                        <div className="drop" onClick={Logout}>
                           <img src={Group132} alt="" />
                        </div>
                    )}
                </div>
            </div>

        </div>
    </div>
  )
}

export default MainNav
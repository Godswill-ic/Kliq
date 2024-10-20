import React, { useState } from 'react'
import "../SideMenu/SideMenu.css"
import Home from '../../assets/home.png'
import Campaign from '../../assets/campaign.png'
import Earnings from '../../assets/earnings.png'
import Settings from '../../assets/Setting.png'

const SideMenu = () => {

  // State to track if the div is clicked
  const [isClicked, setIsClicked] = useState(false);

  // Function to toggle the background color
  const handleClick = (id) => {
    setIsClicked(id);
  };

  return (
    <div className='side-menu'>
        <div 
            className='side-menu-divs'
            onClick={() => handleClick(1)}
            style={{
                backgroundColor: isClicked === 1 ? '#FDE7EB' : 'transparent',
                transition: 'background-color 0.3s ease',
            }} 
        >
            <img src={Home} alt="" />
            <p>Home</p>
        </div>

        <div 
            className='side-menu-divs'
            onClick={() => handleClick(2)}
            style={{
                backgroundColor: isClicked === 2 ? '#FDE7EB' : 'transparent',
                transition: 'background-color 0.3s ease',
            }} 
        >
            <img src={Campaign} alt="" />
            <p>Campaigns</p>
        </div>

        <div 
            className='side-menu-divs'
            onClick={() => handleClick(3)}
            style={{
                backgroundColor: isClicked === 3 ? '#FDE7EB' : 'transparent',
                transition: 'background-color 0.3s ease',
            }} 
        >
            <img src={Earnings} alt="" />
            <p>Earnings</p>
        </div>

        <div 
            className='side-menu-divs'
            onClick={() => handleClick(4)}
            style={{
                backgroundColor: isClicked === 4 ? '#FDE7EB' : 'transparent',
                transition: 'background-color 0.3s ease',
            }} 
        >
            <img src={Settings} alt="" />
            <p>Settings</p>
        </div>
    </div>
  )
}

export default SideMenu
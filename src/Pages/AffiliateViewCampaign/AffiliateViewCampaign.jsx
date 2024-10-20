import React from 'react'
import '../AffiliateViewCampaign/AffiliateViewCampaign.css'
import MainNav from '../../Components/MainNav/MainNav'
import SideMenu from '../../Components/SideMenu/SideMenu'
import Bluehost from '../../assets/bluehost.png'
import Host from '../../assets/host.png'
import { useNavigate } from 'react-router-dom';

const AffiliateViewCampaign = () => {
  const navigate = useNavigate();

  const next = () => {
    navigate(`/AffiliateCampaignDetails`);
  }

  return (
    <div className='affiliate-container'>
    <MainNav />

    <div className='affiliate-wrap'>

      <div className='sideMenu'>
        <SideMenu />
      </div>

      <div className='affiliate-view-campaign'>

        <div className='affiliate-view-campaign-heading'>
          <img src={Host} alt="" />
          <strong>Bluehost</strong>
        </div>

        <img src={Bluehost} alt="" className='affiliate-view-campaign-img'/>

        <strong>Earn N15,000 per sale</strong>

        <div className='affiliate-view-campaign-divs'>
          <div className='sec--1'>
            <div className='top-left'>
              <p>COOKIE LENGTH</p>
              <span>90 days</span>
            </div>
            
            <div className='top-right'>
              <p>CATEGORY</p>
              <span>Technology</span>
            </div>
          </div>

          <div className='sec--1'>
            <div className='bottom-left'>
              <p>RATING</p>
              <span>4.8</span>
            </div>

            <div className='bottom-right'>
              <p>STARTED</p>
              <span>August 2018</span>
            </div>
          </div>
        </div>

        <div className='affiliate-view-campaign-words'>
          <p>A brief description of the product and any useful information that merchants want to communicate to intending maarketers. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab maxime autem repudiandae? Sapiente quo corrupti fugiat vitae ea nihil delectus dolore beatae totam amet, quaerat accusantium possimus eligendi perspiciatis doloribus. nihil delectus dolore beatae totam amet, quaerat accusantium possimus eligendi perspiciatis doloribus.</p>
        </div>

        <div className='affiliate-view-campaign-btn' onClick={next}>
          <button>Join this campaign</button>
        </div>

      </div>

    </div>
  </div>
  )
}

export default AffiliateViewCampaign
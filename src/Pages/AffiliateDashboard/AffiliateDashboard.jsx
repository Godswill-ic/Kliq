import React from 'react'
import '../AffiliateDashboard/AffiliateDashboard.css'
import MainNav from '../../Components/MainNav/MainNav'
import SideMenu from '../../Components/SideMenu/SideMenu'
import { Link } from 'react-router-dom'

const AffiliateDashboard = () => {
  return (
    <div className='affiliate-container'>
      <MainNav />

      <div className='affiliate-wrap'>

        <div className='sideMenu'>
          <SideMenu />
        </div>

        <div className='affiliate-dashboard'>
          <h3>Select interests</h3>
          <p className='sub-heading'>This will help us recommend brands, products and campaigns that you'll love
          </p>

          <div className='interests'>
            <div className='purple'>Entertainment</div>
            <div className='normal'>Sports </div>
            <div className='normal'>Health</div>
            <div className='purple'>Entertainment</div>
            <div className='normal'>Sports</div>
            <div className='normal'>Health</div>
            <div className='normal'>Food </div>
            <div className='normal'>Fashion</div>
            <div className='normal'>Beauty</div>
            <div className='normal'>Music</div>
            <div className='normal'>Food</div>
            <div className='normal'>Fashion</div>
            <div className='normal'>Beauty</div>
            <div className='normal'>Music</div>
            <div className='normal'>Movies</div>
            <div className='purple'>Education</div>
            <div className='purple'>Lifestyle</div>
            <div className='normal'>Movies</div>
            <div className='purple'>Education</div>
            <div className='purple'>Lifestyle</div>
            <div className='purple'>Entertainment</div>
            <div className='normal'>Sports </div>
            <div className='normal'>Health</div>
            <div className='purple'>Entertainment</div>
            <div className='normal'>Sports</div>
            <div className='normal'>Health</div>
            <div className='normal'>Food </div>
            <div className='normal'>Fashion</div>
            <div className='normal'>Beauty</div>
            <div className='normal'>Music</div>
            <div className='normal'>Food</div>
            <div className='normal'>Fashion</div>
            <div className='normal'>Beauty</div>
            <div className='normal'>Music</div>
            <div className='normal'>Movies</div>
            <div className='purple'>Education</div>
            <div className='purple'>Lifestyle</div>
            <div className='normal'>Movies</div>
            <div className='purple'>Education</div>
            <div className='purple'>Lifestyle</div>
          </div>

          <Link className='link' to='/AffiliateHome'>
            <div className='interests-btn'>
              <button>
                Next
              </button>
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default AffiliateDashboard
import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../AffiliateHome/AffiliateHome.css'
import MainNav from '../../Components/MainNav/MainNav'
import SideMenu from '../../Components/SideMenu/SideMenu'
// import { Link } from 'react-router-dom'
import Angle34 from '../../assets/angle34.png'
import Angle36 from '../../assets/angle36.png'
import Rectangle34 from '../../assets/Rectangle34.png'
import Rectangle36 from '../../assets/Rectangle36.png'
import Rectangle38 from '../../assets/Rectangle38.png'
import Rectangle40 from '../../assets/Rectangle40.png'
import Ellipse8 from '../../assets/Ellipse8.png'
import Ellipse10 from '../../assets/Ellipse10.png'
import EllipseBluehost from '../../assets/Ellipse-bluehost.png'

const AffiliateHome = () => {
    const navigate = useNavigate();

    const forward = () => {
        navigate(`/AffiliateViewCampaign`);
      }

  return (
    <div className='affiliate-container'>
    <MainNav />

    <div className='affiliate-wrap'>

      <div className='sideMenu'>
        <SideMenu />
      </div>

      <div className='affiliate-home'>
        <div className='topics'>
            <div className='purple'>All</div>
            <div className='normal'>Entertainment</div>
            <div className='normal'>Sports </div>
            <div className='normal'>Health</div>
            <div className='normal'>Food </div>
            <div className='normal'>Fashion</div>
            <div className='normal'>Beauty</div>
            <div className='normal'>Music</div>
            <div className='normal'>Movies</div>
            <div className='normal'>Education</div>
            <div className='normal'>Lifestyle</div>
            <div className='normal'>Technology</div>
            <div className='normal'>e-commerce</div>
        </div>

        <div className='home-campaign'>
            <div className='home-campaign-inner'>
                <div className='campaign-front' onClick={forward}>
                    <div className='campaign-front-header'>
                        <img src={EllipseBluehost} alt="" />
                        <p>Bluehost</p>
                    </div>
                    <img src={Rectangle34} alt="" className='campaign-front-img'/>
                    <h5>Bluehost Hosting</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quia, fugiat enim molestiae voluptatum ab dolorum eveniet ea commodi.</p>
                </div>
                
                <div className='campaign-front'>
                    <div className='campaign-front-header'>
                        <img src={Ellipse8} alt="" />
                        <p>Nivea</p>
                    </div>
                    <img src={Rectangle36} alt="" className='campaign-front-img'/>
                    <h5>Amazon Associates</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quia, fugiat enim molestiae voluptatum ab dolorum eveniet ea commodi.</p>
                </div>
            </div>


            <div className='home-campaign-inner'>
                <div className='campaign-front'>
                    <div className='campaign-front-header'>
                        <img src={Ellipse10} alt="" />
                        <p>Pepsi</p>
                    </div>
                    <img src={Rectangle38} alt="" className='on campaign-front-img'/>
                    <img src={Angle34} alt="" className='off campaign-front-img'/>
                    <h5>Pepsi Zero</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quia, fugiat enim molestiae voluptatum ab dolorum eveniet ea commodis.</p>
                </div>

                <div className='campaign-front'>
                    <div className='campaign-front-header'>
                        <img src={Ellipse8} alt="" />
                        <p>Nivea</p>
                    </div>
                    <img src={Rectangle40} alt="" className='on campaign-front-img'/>
                    <img src={Angle36} alt="" className='off campaign-front-img'/>
                    <h5>Wakanow</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quia, fugiat enim molestiae voluptatum ab dolorum eveniet ea commodi.</p>
                </div>
            </div>
        </div>
       
      </div>

    </div>
  </div>
  )
}

export default AffiliateHome
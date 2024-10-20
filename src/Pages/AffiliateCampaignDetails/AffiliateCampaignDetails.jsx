import React from 'react'
import '../AffiliateCampaignDetails/AffiliateCampaignDetails.css'
import MainNav from '../../Components/MainNav/MainNav'
import SideMenu from '../../Components/SideMenu/SideMenu'
import Host from '../../assets/host.png'
import Fb from '../../assets/fb.png'
import Google from '../../assets/google.png'
import X from '../../assets/x.png'
import Img1 from '../../assets/img1.png'
import Img2 from '../../assets/img2.png'
import Img3 from '../../assets/img3.png'
import Img4 from '../../assets/img4.png'
import Down from '../../assets/down.png'
import Share from '../../assets/share.png'
import Copy from '../../assets/copy.png'

const AffiliateCampaignDetails = () => {
  return (
    <div className='affiliate-container'>
    <MainNav />

    <div className='affiliate-wrap'>

      <div className='sideMenu'>
        <SideMenu />
      </div>

      <div className='affiliate-campaign-details'>

        <div className='affiliate-campaign-details-heading'>
          <img src={Host} alt="" />
          <div>
            <strong>Bluehost</strong>
            <span>The Best Web Hosting</span>
          </div>
        </div>

        <hr />

        <p className='p-heading'>ABOUT THE PRODUCT</p>
        <p className='p-sub'>Useful information about the product for marketers to be familiar with the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sequi magnam voluptates, itaque commodi reiciendis, dicta atque error consectetur eum optio, saepe nihil dolor sapiente aut. Necessitatibus animi rerum autem?</p>

        <p className='p-site'>bluehost.com</p>
        <div className='contact-info'>
          <img src={Fb} alt="" />
          <img src={X} alt="" />
          <img src={Google} alt="" />
        </div>

        <hr />

        <p className='p-heading'>MARKETING CONTENT</p>

        <div className='affiliate-campaign-details-content'>
          <p className='p-heading'>1</p>
          <p className='p-sub'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores dignissimos eos eveniet. Perferendis atque adipisci delectus molestias eum labore nam ex libero animi hic aut praesentium in, odit reprehenderit rerum.hic aut praesentium in, odit reprehenderit rerum.</p>
        </div>

        <div className='affiliate-campaign-details-content'>
          <p className='p-heading'>2</p>
          <p className='p-sub'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores dignissimos eos eveniet. Perferendis atque adipisci delectus molestias eum labore nam ex libero animi hic aut praesentium in, odit reprehenderit rerum.hic aut praesentium in, odit reprehenderit rerum.</p>
        </div>

        <div className='affiliate-campaign-details-content'>
          <p className='p-heading'>3</p>
          <p className='p-sub'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores dignissimos eos eveniet. Perferendis atque adipisci delectus molestias eum labore nam ex libero animi hic aut praesentium in, odit reprehenderit rerum.hic aut praesentium in, odit reprehenderit rerum.</p>
        </div>

        <p className='p-heading'>MEDIA LIBRARY</p>

        <div className='media'>
          <div className='media1'>
            <div>
              <img src={Img1} alt="" className='bluehost-img'/>
              <div>
                <img src={Down} alt="" />
                <p>Download</p>
              </div>
            </div>

            <div>
              <img src={Img2} alt="" className='bluehost-img'/>
              <div>
                <img src={Down} alt="" />
                <p>Download</p>
              </div>
            </div>
          </div>

          <div className='media1'>
            <div>
              <img src={Img3} alt="" className='bluehost-img'/>
              <div>
                <img src={Down} alt="" />
                <p>Download</p>
              </div>
            </div>

            <div>
              <img src={Img4} alt="" className='bluehost-img'/>
              <div>
                <img src={Down} alt="" />
                <p>Download</p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className='share'>
          <div className='share-left'>
            <p>AFFILIATE LINK</p>
            <span>bluehost.com/lucky1234</span>
          </div>

          <div className='share-right'>
            <div className='share-btn'>
              <img src={Share} alt="" />
              <p>Share</p>
            </div>

            <div className='share-btn'>
              <img src={Copy} alt="" />
              <p>Copy link</p>
            </div>
          </div>
        </div>

        <hr />

        <div className='share'>
          <div className='share-left'>
            <p>AFFILIATE CODE</p>
            <span>Bluehostlucky1234</span>
          </div>

          <div className='share-right'>
            <div className='share-btn'>
              <img src={Share} alt="" />
              <p>Share</p>
            </div>

            <div className='share-btn'>
              <img src={Copy} alt="" />
              <p>Copy code</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
  )
}

export default AffiliateCampaignDetails
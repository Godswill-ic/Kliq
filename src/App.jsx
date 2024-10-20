import React from 'react';
import './App.css';
import { createBrowserRouter } from "react-router-dom";
import Landing from './Pages/Landing/Landing';
import MerchantSignUp from './Pages/MerchantSignUp';
import MerchantSignIn from './Pages/MerchantSignIn';
import MerchantEmailConfirm from './Pages/MerchantEmailConfirm';
import MerchantPhoneConfirm from './Pages/MerchantPhoneConfirm';
import MerchantSignUpCont from './Pages/MerchantSignUpCont/MerchantSignUpCont'
import AffiliateSignUp from './Pages/AffiliateSignUp/AffiliateSignUp';
import AffiliateSignIn from './Pages/AffiliateSignIn/AffiliateSignIn';
import AffiliateEmailConfirm from './Pages/AffiliateEmailConfirm/AffiliateEmailConfirm';
import AffiliatePhoneConfirm from './Pages/AffiliatePhoneConfirm/AffiliatePhoneConfirm';
import AffiliateDashboard from './Pages/AffiliateDashboard/AffiliateDashboard';
import AffiliateHome from './Pages/AffiliateHome/AffiliateHome';
import AffiliateViewCampaign from './Pages/AffiliateViewCampaign/AffiliateViewCampaign';
import AffiliateCampaignDetails from './Pages/AffiliateCampaignDetails/AffiliateCampaignDetails';
import MerchantDashboard from './Pages/MerchantDashboard/MerchantDashboard'


const App = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/Landing",
    element: <Landing />,
  },
  {
    path: "/MerchantSignUp",
    element: <MerchantSignUp />,
  },
  {
    path: "/MerchantSignIn",
    element: <MerchantSignIn />,
  },
  {
    path: "/MerchantSignUpCont",
    element: <MerchantSignUpCont />,
  },
  {
    path: "/MerchantEmailConfirm",
    element: <MerchantEmailConfirm />,
  },
  {
    path: "/MerchantPhoneConfirm",
    element: <MerchantPhoneConfirm />,
  },
  {
    path: "/AffiliateSignUp",
    element: <AffiliateSignUp />,
  },
  {
    path: "/AffiliateSignIn",
    element: <AffiliateSignIn />,
  },
  {
    path: "/AffiliateEmailConfirm",
    element: <AffiliateEmailConfirm />,
  },
  {
    path: "/AffiliatePhoneConfirm",
    element: <AffiliatePhoneConfirm />,
  },
  {
    path: "/AffiliateDashboard",
    element: <AffiliateDashboard />,
  },
  {
    path: "/AffiliateHome",
    element: <AffiliateHome />,
  },
  {
    path: "/AffiliateViewCampaign",
    element: <AffiliateViewCampaign />,
  },
  {
    path: "/AffiliateCampaignDetails",
    element: <AffiliateCampaignDetails />,
  },
  {
    path: "/MerchantDashboard",
    element: <MerchantDashboard />,
  },
]);

export default App;
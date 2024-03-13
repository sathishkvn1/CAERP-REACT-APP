// Content.jsx
import React from "react";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Index from "../accounts/Index";
import VoucherIndex from "../accounts/voucher/VoucherIndex";
// import OurTeam from "../pages/SideBarSubMenu/OurTeam/OurTeam.jsx";
// import PrivacyPolicy from "../pages/SideBarSubMenu/PrivacyPolicy/PrivacyPolicy.jsx";
// import TermsAndCondition  from "../pages/SideBarSubMenu/TermsAndCondition/TermsAndCondition.jsx";
// import GeneralContactDetails from "../pages/SideBarSubMenu/GeneralContactDetails/GeneralContactDetails.jsx";
// import SocialMediaUrl from "../pages/SideBarSubMenu/SocialMediaUrl/SocialMediaUrl.jsx";
// import ContactDetails from "../pages/SideBarSubMenu/ContactDetails/ContactDetails.jsx";
// import ImageGallery from "../pages/SideBarSubMenu/ImageGallery/ImageGallery.jsx";
// import OurDirectors from "../pages/SideBarSubMenu/OurDirectors/OurDirectors.jsx";
// import TrendingNews from "../pages/SideBarSubMenu/TrendingNews/TrendingNews.jsx";
// import AdminUser from "../pages/SideBarSubMenu/AdminUser/AdminUser.jsx";
// import AdminMainMenu from "../pages/SideBarSubMenu/AdminMainMenu/AdminMainMenu.jsx";
// import LegalAboutUs from "../pages/SideBarSubMenu/LegalAboutUs/LegalAboutUs.jsx";
// import Product from "../pages/SideBarSubMenu/Product/Product.jsx";
// import Home from '../pages/SidebarMainMenu/Home.jsx'; 
// import ForgotPassword from "./ForgotPassword.jsx";
// import ChangePassword from "../pages/HeaderMenu.jsx/ChangePassword.jsx";
// import AdminProfile from "../pages/HeaderMenu.jsx/AdminProfile.jsx";


const Content = () => {



  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/voucher/*" element={<VoucherIndex/>}/>
        {/* <Route path="/sitemanager/aboutus" element={<AboutUs/>}/>
        <Route path="/sitemanager/faq" element={<Faq/>}/>
        <Route path="/sitemanager/ourteam" element={<OurTeam/>}/>
        <Route path="/sitemanager/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/sitemanager/termsandcondition" element={<TermsAndCondition/>}/>
        <Route path="/sitemanager/generalcontactdetails" element={<GeneralContactDetails/>}/>
        <Route path="/sitemanager/socialmediaurl" element={<SocialMediaUrl/>}/>
        <Route path="/sitemanager/ourdirectors" element={<OurDirectors/>}/>
        <Route path="/sitemanager/trendingnews" element={<TrendingNews/>}/>
        <Route path="/sitemanager/imagegallery" element={<ImageGallery/>}/>
        <Route path="/sitemanager/contactdetails" element={<ContactDetails/>}/>
        <Route path="/sitemanager/product" element={<Product/>}/>
        <Route path="/sitemanager/adminuser" element={<AdminUser/>}/>
        <Route path="/sitemanager/adminmainmenu" element={<AdminMainMenu/>}/>
        <Route path="/sitemanager/legalaboutus" element={<LegalAboutUs/>}/>
        <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
        <Route path="/ChangePassword" element={<ChangePassword/>}/>
        <Route path="/AdminProfile" element={<AdminProfile/>}/> */}
      </Routes>
    </div>
  );
};
export default Content;

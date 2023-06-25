import React from "react";
import facebook from "../../assets/img/facebook.png";
import twitter from "../../assets/img/twitter.png";
import linkedin from "../../assets/img/linkedin.png";
import instagram from "../../assets/img/instagram.png";
import pinterest from "../../assets/img/pinterest.png";
import accessibility from "../../assets/img/accessibility.png";
import language from "../../assets/img/language.png";

const Footer = () => {
  return (
    <div className="flex justify-center text-gray-400 m-12">
      <div className="w-11/12">
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <h2 className="text-base text-gray-800 font-bold">Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-base text-gray-800 font-bold">About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-base text-gray-800 font-bold">Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Liverr</span>
            <span>Buying on Liverr</span>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-base text-gray-800 font-bold">Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-base text-gray-800 font-bold">More From Fiverr</h2>
            <span>Liverr Business</span>
            <span>Liverr Pro</span>
            <span>Liverr Logo Maker</span>
            <span>Liverr Guides</span>
            <span>Get Inspired</span>
            <span>Liverr Select</span>
            <span>ClearVoice</span>
            <span>Liverr Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr  className="m-12 h-0 border border-solid border-gray-200"/>
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <h2>fiverr</h2>
            <span>© fiverr International Ltd. 2023</span>
          </div>
          <div className="flex items-center">
            <div className="flex gap-5">
              <img className="h-6 w-6" src={twitter} alt="" />
              <img className="h-6 w-6" src={facebook} alt="" />
              <img className="h-6 w-6" src={linkedin} alt="" />
              <img className="h-6 w-6" src={pinterest} alt="" />
              <img className="h-6 w-6" src={instagram} alt="" />
            </div>
            <div className="flex gap-5">
              <img className="h-6 w-6" src={language} alt="" />
              <span>English</span>
            </div>
            <div className="flex gap-2">
              <span>₹ INR</span>
            </div>
            <img className="h-6 w-6" src={accessibility} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

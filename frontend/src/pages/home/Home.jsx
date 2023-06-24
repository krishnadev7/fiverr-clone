import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import { cards } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import video from "../../assets/img/video.mp4";
import check from "../../assets/img/check.png";

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
      <div className="pt-24 pb-0">
      <div className="bg-green-50 flex justify-center p-24">
        <div className="flex items-center gap-48 ">
          <div className="flex flex-col gap-4">
            <h1 className="font-medium pb-6 text-3xl">The best part? Everything.</h1>
            <div className="flex items-center gap-2 font-medium ">
              <img className="h-6 w-6" src={check} />
              Stick to your budget
            </div>
            <p className="font-light text-lg text-gray-500">
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="flex items-center gap-2 font-medium ">
              <img className="h-6 w-6" src={check} />
              Get quality work done quickly
            </div>
            <p className="font-light text-lg text-gray-500">
              Hand your project over to a talented freelancer in minutes, get
              long-lasting results.
            </p>
            <div className="flex items-center gap-2 font-medium  ">
              <img className="h-6 w-6" src={check} />
              Pay when you're happy
            </div>
            <p className="font-light text-lg text-gray-500">
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>
            <div className="flex items-center gap-2 font-medium ">
              <img className="h-6 w-6" src={check} />
              Count on 24/7 support
            </div>
            <p className="font-light text-lg text-gray-500">
              Our round-the-clock support team is available to help anytime,
              anywhere.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <video className="" src={video} controls></video>
          </div>
        </div>
      </div>
      </div>

      <div className="pt-24 pb-0">
      <div className="bg-indigo-950 flex justify-center p-24">
        <div className="flex items-center gap-48 ">
          <div className="flex flex-col gap-4">
            <h1 className="font-medium pb-6 text-3xl text-white">fiverr business</h1>
            <h1 className="font-medium pb-6 text-3xl text-white">A solution built for business</h1>
            <p className="text-white mb-5">Upgrade to a curated experience to access vetted talent and exclusive tools</p>
            <div className="flex items-center gap-2 font-medium text-sm text-white ">
              <img className="h-6 w-6" src={check} />
              Talent matching
            </div>
            <div className="flex items-center gap-2 font-medium  text-sm text-white">
              <img className="h-6 w-6" src={check} />
              Dedicated account management
            </div>
            <div className="flex items-center gap-2 font-medium  text-sm text-white">
              <img className="h-6 w-6" src={check} />
              Team collaboration tools
            </div>
            <div className="flex items-center gap-2 font-medium text-sm text-white ">
              <img className="h-6 w-6" src={check} />
              Business payment solutions
            </div>
            <button className="bg-green-500 text-white p-3 rounded text-sm cursor-pointer mt-5 w-max">Explore Fiverr Business</button>
          </div>
          <div className="flex flex-col gap-4">
            <img className="" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <div className="bg-green-50 flex justify-center py-24 px-0">
        <div className="flex items-center gap-4 w-11/12">
          <div> 
            <h1>The best part? Everything.</h1>
            <div title>
              <img src={check} />
              Stick to your budget
              <p>
                Find the right service for every price point. No hourly rates,
                just project-based pricing.
              </p>
            </div>
            <div title>
              <img src={check} />
              Get quality work done quickly
              <p>
                Hand your project over to a talented freelancer in minutes, get
                long-lasting results.
              </p>
            </div>
            <div title>
              <img src={check} />
              Pay when you're happy
              <p>
                Upfront quotes mean no surprises. Payments only get released
                when you approve.
              </p>
            </div>
            <div title>
              <img src={check} />
              Count on 24/7 support
              <p>
                Our round-the-clock support team is available to help anytime,
                anywhere.
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <video src={video} controls></video>
          </div>
        </div>
      </div>
    </div> */
}

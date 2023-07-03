import React from "react";
import { Link } from "react-router-dom";
import star from "../../assets/img/star.png";
import heart from "../../assets/img/heart.png";

function GigCard({ item }) {
  return (
    <Link to="/gig/123">
      <div className="w-80 h-96 border border-solid border-gray-200 mb-6">
        <img className="w-full h-2/4 object-cover" src={item.img} />
        <div className="flex flex-col gap-4 pt-3 pb-3 pl-5 pr-5">
          <div className="flex items-center gap-2">
            <img className="w-6 h-6 rounded-3xl" src={item.pp} />
            <span>{item.username}</span>
          </div>
          <p className="text-black">{item.desc}</p>
          <div className="flex items-center gap-1">
            <img className="w-4 h-4" src={star} alt="" srcset="" />
            <span className="text-sm font-bold text-yellow-500">
              {item.star}
            </span>
          </div>
        </div>
        <hr className="h-0 border border-solid  text-gray-200" />
        <div className="pt-3 pb-3 pr-5 pl-5 flex items-center justify-between">
          <img
            className="w-4 h-4 cursor-pointer"
            src={heart}
          />
          <div>
            <span className="text-sm text-gray-400">STARTING AT</span>
            <h2 className="text-gray-600 text-lg font-normal">₹{item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GigCard;

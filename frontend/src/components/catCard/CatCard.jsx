import React from "react";
import { Link } from "react-router-dom";

function CatCard({ item }) {
  return (
    <Link to='/gigs?cat=design'>
      <div className="w-64 h-80 text-white rounded cursor-pointer relative">
        <img className="w-full h-full object-cover" src={item.img} alt="" />
        <span className="font-medium font-2xl absolute top-10 left-4">{item.title}</span>
        <span className="font-light absolute top-4 left-4">{item.desc}</span>
      </div>
    </Link>
  );
}

export default CatCard;

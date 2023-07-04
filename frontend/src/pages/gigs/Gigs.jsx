import React, { useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import downImg from "../../assets/img/down.png";
import {gigs} from '../../data'
import GigCard from '../../components/gigCard/GigCard'

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className="flex justify-center">
      <div className="w-11/12 pt-8 pb-8 flex flex-col gap-4">
        <span className="flex items-center gap-4 font-normal text-sm text-gray-900">
          <div className="hover:bg-slate-100 p-2 rounded-full">
            <Link to="/">
              <HiOutlineHome />{" "}
            </Link>
          </div>
          <span className="text-gray-300">/</span> Graphics & Design
        </span>
        <h1>AI Artists</h1>
        <p className="font-light text-slate-700 text-md">
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-600 font-light">
            <span>Budget</span>
            <input
              className="p-1 border border-solid border-black outline-none"
              type="text"
              placeholder="min"
            />
            <input
              className="p-1 border border-solid border-black outline-none"
              type="text"
              placeholder="max"
            />
            <button className="bg-green-500 hover:bg-green-400 font-medium cursor-pointer rounded pt-1 pb-1 pr-2 pl-2 text-white">
              Apply
            </button>
          </div>
          <div className="flex items-center gap-2 relative">
            <span className="text-slate-500 font-light">Sort By</span>
            <span className="font-medium">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              className="w-4 cursor-pointer"
              src={downImg}
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="p-5 bg-white rounded border border-solid border-slate-500 absolute top-7 right-0 flex flex-col gap-5 text-slate-500 ">
                {sort === "sales" ? (
                  <span
                    className="cursor-pointer"
                    onClick={() => reSort("createdAt")}
                  >
                    Newest
                  </span>
                ) : (
                  <span
                    className="cursor-pointer"
                    onClick={() => reSort("sales")}
                  >
                    Best Selling
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
                  {gigs.map((gig) => (
                    <GigCard key={gig.id} item={gig}/>
                  ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;

import React, { useEffect, useState } from "react";
import fiverLogo from "../../assets/Fiverr New.png";
import fiverLogoW from "../../assets/fiver-logo.png";
import userPic from "../../assets/user-picture.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    userName: "john doe",
    isSeller: true,
  };

  return (
    <div
      className={
        active || pathname !== "/"
          ? "flex flex-col items-center bg-white transition duration-500 ease-in-out sticky top-0 z-50"
          : "flex flex-col items-center bg-green-600 transition duration-500 ease-in-out sticky top-0 z-50 "
      }
    >
      <div className="w-11/12 flex justify-between py-1 px-0">
        {active || pathname !== "/" ? (
          <div>
            <Link to="/">
              <img className="h-20 w-32" src={fiverLogo} alt="fiver-logo" />
            </Link>
          </div>
        ) : (
          <div className="h-24 w-36 flex items-center">
            <Link to="/">
              <img className="h-6 w-24 " src={fiverLogoW} alt="fiver-logo" />
            </Link>
          </div>
        )}
        <div
          className={
            active || pathname !== "/"
              ? "flex gap-6 font-medium items-center text-black"
              : "flex gap-6 text-white font-medium items-center"
          }
        >
          <span>Fiverr Business</span>
          <span>Explore</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          <span>Sign in</span>
          {!currentUser && (
            <button
              className={
                active
                  ? "py-1 px-4 text-green-600 rounded border border-solid border-green-600 hover:border-green-600 hover:bg-green-600 hover:text-white"
                  : "py-1 px-4 text-white rounded border border-solid border-white hover:border-green-600 hover:bg-green-600"
              }
            >
              join
            </button>
          )}
          {currentUser && (
            <div
              className="flex gap-2 items-center relative cursor-pointer "
              onClick={() => setOpen(!open)}
            >
              <img
                src={userPic}
                alt="userPic"
                className="h-8 w-8 rounded-md object-cover"
              />
              <span>{currentUser?.userName}</span>
              {open && (
                <div className="absolute top-12 right-0 p-5 bg-white rounded-lg border-2 border-solid border-slate-200 flex flex-col gap-2 w-48 text-slate-600 font-light">
                  {currentUser?.isSeller && (
                    <>
                      <Link to="/mygigs">Gigs</Link>
                      <Link to="/add">Add new Gig</Link>
                    </>
                  )}
                  <Link to="/orders">Orders</Link>
                  <Link to="/messages">Messages</Link>
                  <Link to="">Logout</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {active  && (
        <hr className="border border-solid border-slate-200 w-full h-0 " />
      )}
      {pathname !=='/'   && (
        <hr className="border border-solid border-slate-200 w-full h-0" />
      )}

      {(active || pathname !== "/") && (
        <>
        <div
          className={
            active || pathname !== "/"
              ? "w-11/12 flex justify-between text-black py-2 px-0 "
              : "w-11/12 flex justify-between text-white py-2 px-0 "
          }
        >
          <Link to="/">Graphics & Design</Link>
          <Link to="/">Digital Marketing</Link>
          <Link to="/">Writing & Translation</Link>
          <Link to="/">Video & Animation</Link>
          <Link to="/">Music & Audio</Link>
          <Link to="/">Programming & Tech</Link>
          <Link to="/">Photography</Link>
          <Link to="/">Business</Link>
          <Link to="/">AI Services</Link>
        </div>
        <hr className="border border-solid border-slate-200 w-full h-0" />
        </>
      )}
    </div>
  );
};

export default Navbar;

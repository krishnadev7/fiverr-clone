import React, { useEffect, useState } from 'react'
import fiverLogo from '../../assets/fiver-logo.png'

const Navbar = () => {

  const [active,setActive] = useState(false);
  
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }

  useEffect(() => {
    window.addEventListener("scroll",isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    }
  },[])

  return (
    <div className={ active ? 'flex flex-col items-center bg-white transition duration-500 ease-in-out sticky top-0' : 'flex flex-col items-center bg-red-800 transition duration-500 ease-in-out sticky top-0 '}>
      <div className='w-11/12 flex justify-between py-5 px-0'>
        <div>
          <img className='h-7 w-20' src={fiverLogo} alt="fiver-logo"  />
        </div>
        <div className={active ? 'flex gap-6 font-medium items-center text-black' : 'flex gap-6 text-white font-medium items-center'}>
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>Become a Seller</span>
          <span>
            Sign in
          </span>
          <button className={active? 'py-1 px-4 text-green-600 rounded border border-solid border-green-600 hover:border-green-600 hover:bg-green-600 hover:text-white' :'py-1 px-4 text-white rounded border border-solid border-white hover:border-green-600 hover:bg-green-600'}>
            join
          </button>
        </div>
      </div>

    <hr className='border border-solid border-slate-200 w-full h-0'/>

   { active && 
   <div className={active ? 'w-11/12 flex justify-between text-black py-2 px-0 ' :'w-11/12 flex justify-between text-white py-2 px-0 '}>
      <span>Graphics & Design</span>
      <span>Digital Marketing</span>
      <span>Writing & Translation</span>
      <span>Video & Animation</span>
      <span>Music & Audio</span>
      <span>Programming & Tech</span>
      <span>Photography</span>
      <span>Business</span>
      <span>AI Services</span>
    </div>}

    </div>
  )
}

export default Navbar
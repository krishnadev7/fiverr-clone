import React from 'react'
import fiverLogo from '../../assets/fiver-logo.png'

const Navbar = () => {
  return (
    <div className='flex justify-center bg-red-800 '>
      <div className='w-11/12 flex justify-between py-5 px-0'>
        <div>
          <img className='h-7 w-20' src={fiverLogo} alt="fiver-logo"  />
        </div>
        <div className='flex gap-6 text-white font-medium items-center'>
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>Become a Seller</span>
          <span>
            Sign in
          </span>
          <button className='py-1 px-4 text-white rounded border border-solid border-white hover:border-green-600 hover:bg-green-600'>
            join
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
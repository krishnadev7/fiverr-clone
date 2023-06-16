import React from 'react'

function TrustedBy() {
  return (
    <div className='flex bg-slate-100 h-24 justify-center'>
        <div className='max-w-3xl flex items-center gap-5 font-medium text-slate-300'>
            <span>Trusted by:</span>
            <img className='h-12 object-contain' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png" alt="" />
            <img className='h-12 object-contain' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png" alt="" />
            <img className='h-12 object-contain' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png" alt="" />
            <img className='h-12 object-contain' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png" alt="" />
            <img className='h-12 object-contain' src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png" alt="" />
        </div>
    </div>
  )
}

export default TrustedBy
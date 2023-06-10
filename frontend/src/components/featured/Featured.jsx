import React from 'react'
import manImage from '../../assets/img/man.png'
import searchBar from '../../assets/img/search.png'

const Featured = () => {
  return (
    <div className='h-1/4 flex justify-center bg-green-600'>
        <div className='w-11/12 flex items-center justify-between text-white'>
            <div className='flex flex-col gap-7'>
                <h1 className='text-5xl'>Find the right <i className='font-light'>freelance</i> <i className='font-light'>service</i>, right away</h1>
                <div className='flex items-center justify-between bg-white rounded-md '>
                    <div className='flex items-center justify-between gap-2'>
                        <input className='px-2' type='text' placeholder='Search for any service'/>
                    </div>
                    <button className='px-3  h-12 bg-green-400 cursor-pointer'><img className='w-5 h-5 m-3' src={searchBar}/></button>
                </div>
                <div className='flex items-center gap-2'>
                    <span>Popular:</span>
                    <button className='text-white bg-transparent rounded-2xl text-sm py-1 px-3 border-2 border-solid border-white'>Website Design</button>
                    <button className='text-white bg-transparent rounded-2xl text-sm py-1 px-3 border-2 border-solid border-white'>WordPress</button>
                    <button className='text-white bg-transparent rounded-2xl text-sm py-1 px-3 border-2 border-solid border-white'>Logo Design</button>
                    <button className='text-white bg-transparent rounded-2xl text-sm py-1 px-3 border-2 border-solid border-white'>AI Services</button>
                </div>
            </div>
            <div className='h-auto'>
                <img className='h-auto object-contain' src={manImage} alt="" srcset="" />
            </div>
        </div>
    </div>
  )
}

export default Featured
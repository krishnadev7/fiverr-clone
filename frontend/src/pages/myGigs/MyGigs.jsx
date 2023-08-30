import React from 'react';
import { Link } from 'react-router-dom';
import deleteImg from '../../assets/img/delete.png'

const MyGigs = () => {
  return (
    <div className='myGigs flex justify-center'>
      <div className="container w-11/12 p-12">
        <div className="title flex justify-between items-center">
          <h1>Gigs</h1>
          <Link to='/add'>
            <button className='bg-green-600 text-white p-2 cursor-pointer border-none font-medium'>Add new gig</button>
          </Link>
        </div>
        <table>
        <tr className='h-12'>
            <th className='text-left'>Image</th>
            <th className='text-left'>Title</th>
            <th className='text-left'>Price</th>
            <th className='text-left'>Sales</th>
            <th className='text-left'>Action</th>
          </tr>
          <tr className='h-12'>
            <td>
              <img
                className="image w-12 h-6 object-cover"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Stunning concept art</td>
            <td>3000</td>
            <td>13</td>
            <td>
              <img className="delete w-5 cursor-pointer" src={deleteImg} alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyGigs
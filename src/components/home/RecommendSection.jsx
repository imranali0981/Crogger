import React, { useEffect, useState } from 'react'
import categories from '../../assets/Category'
import { bloggers } from '../../assets/Category'
import profile from "../../assets/profile.jpg"
import axios from 'axios'

function RecommendSection() {
  const [fetchId, setFetchid] = useState([]);

  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const token = localStorage.getItem('token');
        const resp = await axios.get("http://localhost:5000/api/blogs/", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setFetchid(resp.data);
      } catch (e) {
        console.log("Error occurred: ", e);
      }
    }
    fetchBlock();
  }, []);

  return (
    <div className='py-2 border-l-2 h-full border-black md:pl-7'>
      <div className='text-2xl font-bold'>Recommended Topics</div>
      <div className='grid grid-cols-3 gap-4'>
        {fetchId.map((cont, index) => (
          <button key={index} className='my-4 py-2 px-7 rounded-3xl text-lg font-semibold bg-gray-100 hover:bg-gray-300'>
            {cont.category}
          </button>
        ))}
      </div>

      <div className='text-2xl font-bold pt-8 pb-4'>Who To Follow</div>
      <div className='flex flex-col'>
        {bloggers.map((blog, index) => (
          <div key={index} className='w-full px-2 justify-between shadow-lg hover:shadow-xl py-3 my-2 flex'>
            <div className='flex space-x-4'>
              <div className='md:h-12 md:w-12 hover:cursor-pointer '>
                <img src={profile} alt="" className='border-2 rounded-full' />
              </div>
              <div className='flex flex-col'>
                <div className='text-xl font-bold'>{blog.name}</div>
                <div className='text-gray-500 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
              </div>
            </div>
            <div className='flex items-center'>
              <button className='px-4 py-2 border-black border-2 hover:text-white hover:bg-black transition-colors duration-500 rounded-full'>
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecommendSection;

import React, { useEffect, useState } from 'react';
import unknown from '../../assets/profile.jpg';
import axios from 'axios';
import { PiHandsClappingLight } from 'react-icons/pi';
import { FaRegComment } from 'react-icons/fa6';
import { MdOutlineDoNotDisturbOn } from 'react-icons/md';
import { CiBookmarkPlus } from 'react-icons/ci';
import { IoIosMore } from 'react-icons/io';

function getFormattedDateAndDay() {
  const date = new Date();
  const option = { month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, option);
}

function TooltipIcon({ Icon, tooltipText }) {
  return (
    <div className="relative group">
      <div className="hover:cursor-pointer">
        <Icon />
      </div>
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {tooltipText}
      </div>
    </div>
  );
}

function Blogs_Content() {
  const [data,setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(()=>{
    const fetchBlogs =  async () =>{
      try{
        const token = localStorage.getItem('token');
        const resp = await axios.get('http://localhost:5000/api/blogs/',{
          headers:{
            'Authorization':`Bearer ${token}`
          }
        })
        setData(resp.data)
        console.log(resp.data)
      }catch(e){
        setError(e.message)
      }finally{
        setLoading(false)
      }
    };
    fetchBlogs();
  },[]);
    if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data.map((cont) => (
        <div key={cont._id} className='w-full rounded-xl shadow-lg border-none hover:shadow-2xl md:m-2 my-10 py-8 px-5 md:px-10'>
          <div className='flex gap-3 items-center'>
            <div className='w-7 h-7'>
              <img src={unknown} className='border-black border-2 rounded-full w-full' alt="" />
            </div>
            <div className='text-md'>{cont.author.name}</div>
          </div>
          <div className='flex justify-between items-center hover:cursor-pointer'>
            <div className='flex-col'>
              <div className='text-2xl font-bold'>{cont.title}</div>
              <div className='text-md line-clamp-2'>{cont.content}</div>
            </div>
            <div className='w-20 h-20 md:w-44 md:h-32 flex-shrink-0'>
              <img src={unknown} alt={cont.title} className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex gap-4 md:gap-10'>
              <div>{getFormattedDateAndDay(cont.createdAt)}</div>
              <div className='flex items-center'>
                <TooltipIcon Icon={PiHandsClappingLight} tooltipText={"Reacts"} />
                <div>{cont.like}</div>
              </div>
              <div className='flex items-center'>
                <TooltipIcon Icon={FaRegComment} tooltipText={"Comments"} />
                <div>90</div>
              </div>
            </div>
            <div className='flex items-center text-xl gap-3 md:gap-6'>
              <TooltipIcon Icon={MdOutlineDoNotDisturbOn} tooltipText="Show Less" />
              <TooltipIcon Icon={CiBookmarkPlus} tooltipText="Add to Bookmark" />
              <TooltipIcon Icon={IoIosMore} tooltipText="Show More" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs_Content;

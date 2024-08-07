import React from 'react';
import unknown from '../../assets/profile.jpg';
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
  const content = [
    { id: 1, title: 'AI Will Take Over the World Lorem ipsum dolor sit Lorem, ipsum dolor.', description: 'Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, nostrum. lorem ipsum dummy text is running around here', owner: 'Imran', reacts: 20, img: unknown, uploadDate: getFormattedDateAndDay(), comments: 100 },
    { id: 2, title: 'AI Will Take Over the World', description: 'Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, nostrum. lorem ipsum dummy text is running around here Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, nesciunt?Lorem ipsum dolor sit.', owner: 'Imran', reacts: 20, img: unknown, uploadDate: getFormattedDateAndDay(), comments: 100 },
    { id: 3, title: 'AI Will Take Over the World', description: 'Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, nostrum. lorem ipsum dummy text is running around here Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, nesciunt?Lorem ipsum dolor sit.', owner: 'Imran', reacts: 20, img: unknown, uploadDate: getFormattedDateAndDay(), comments: 100 },
    { id: 4, title: 'AI Will Take Over the World', description: 'Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, nostrum. lorem ipsum dummy text is running around hereLorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, nesciunt?Lorem ipsum dolor sit.', owner: 'Imran', reacts: 20, img: unknown, uploadDate: getFormattedDateAndDay(), comments: 100 },
    { id: 5, title: 'AI Will Take Over the World', description: 'Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, nostrum. lorem ipsum dummy text is running around here', owner: 'Imran', reacts: 20, img: unknown, uploadDate: getFormattedDateAndDay(), comments: 100 },
    { id: 6, title: 'AI Will Take Over the World', description: 'Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, nostrum. lorem ipsum dummy text is running around here', owner: 'Imran', reacts: 20, img: unknown, uploadDate: getFormattedDateAndDay(), comments: 100 },
    { id: 7, title: 'AI Will Take Over the World', description: 'Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, nostrum. lorem ipsum dummy text is running around here', owner: 'Imran', reacts: 20, img: unknown, uploadDate: getFormattedDateAndDay(), comments: 100 },
    { id: 8, title: 'AI Will Take Over the World', description: 'Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, nostrum. lorem ipsum dummy text is running around here', owner: 'Imran', reacts: 20, img: unknown, uploadDate: getFormattedDateAndDay(), comments: 100 },
    { id: 9, title: 'AI Will Take Over the World', description: 'Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, nostrum. lorem ipsum dummy text is running around here', owner: 'Imran', reacts: 20, img: unknown, uploadDate: getFormattedDateAndDay(), comments: 100 },
    { id: 10, title: 'AI Will Take Over the World', description: 'Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, nostrum. lorem ipsum dummy text is running around here', owner: 'Imran', reacts: 20, img: unknown, uploadDate: getFormattedDateAndDay(), comments: 100 },
  ];

  return (
    <div>
      {content.map((cont) => (
        <div key={cont.id} className='w-full rounded-xl shadow-lg border-none hover:shadow-2xl m-2 py-4 px-10'>
          <div className='flex gap-3 items-center'>
            <div className='w-7 h-7'>
              <img src={unknown} className='border-black border-2 rounded-full w-full' alt="" />
            </div>
            <div className='text-md'>{cont.owner}</div>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex-col'>
              <div className='text-2xl font-bold'>{cont.title}</div>
              <div className='text-md line-clamp-2'>{cont.description}</div>
            </div>
            <div className='w-44 h-32'>
              <img src={cont.img} alt={cont.title} className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex gap-10'>
              <div>{cont.uploadDate}</div>
              <div className='flex items-center'>
                <PiHandsClappingLight />
                <div>{cont.reacts}</div>
              </div>
              <div className='flex items-center'>
                <FaRegComment />
                <div>{cont.comments}</div>
              </div>
            </div>
            <div className='flex items-center text-xl gap-6'>
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

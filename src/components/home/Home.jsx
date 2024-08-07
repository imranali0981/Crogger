import React from 'react'
import Left from "./CategorySection";
import Right from "./RecommendSection";
import Blogs_Content from './Blogs_Content';

function Home() {
  return (
    <div className=' px-10 w-screen grid-cols-1  pt-5 md:flex md:space-x-16 '>
        <div className='md:w-2/3 flex-col'> 
          <Left  />
          <div> <Blogs_Content /> </div>
        </div>
        <div className=' hidden md:block md:w-full'><Right  /></div>
    </div>
  )
}

export default Home

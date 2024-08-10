import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import categories from '../../assets/Category';
// export const categories = [
//   { id: 1, name: 'Technology', selected: true },
//   { id: 2, name: 'Health', selected: true },
//   { id: 3, name: 'Travel', selected: true },
//   { id: 4, name: 'Food', selected: true },
//   { id: 5, name: 'Business', selected: true },
//   { id: 6, name: 'Finance', selected: false },
//   { id: 7, name: 'Lifestyle', selected: true },
//   { id: 8, name: 'Education', selected: true },
//   { id: 9, name: 'Entertainment', selected: false },
//   { id: 10, name: 'Sports', selected: true },
//   { id: 11, name: 'Science', selected: true },
//   { id: 12, name: 'Music', selected: false },
//   { id: 13, name: 'Art', selected: true },
//   { id: 14, name: 'Politics', selected: true },
//   { id: 15, name: 'History', selected: false },
// ];

const CategorySection = () => {

  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative  py-4 ">
      <div className="container mx-auto flex items-center">
        <button 
          onClick={scrollLeft} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-accent text-primary hover:bg-accent p-2 rounded-full shadow-md"
        >
          <FaArrowLeft />
        </button>
         <div 
          ref={containerRef} 
          className="container overflow-x-auto whitespace-nowrap flex items-center space-x-4 px-10"
          style={{ 
            overflowX: 'scroll',
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none' /* Internet Explorer 10+ */
          }}
        >
          {categories.filter(cat => cat.selected).map(category => (
            <span 
              key={category.id} 
              className="inline-block px-4 py-2 bg-accent text-primary rounded-full cursor-pointer hover:bg-green-500 transition duration-200"
            >
              {category.name}
            </span>
          ))}
        </div>
        <button 
          onClick={scrollRight} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-secondary hover:bg-accent p-2 rounded-full shadow-md"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CategorySection;

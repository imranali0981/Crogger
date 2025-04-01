import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import { useEffect,useState } from 'react';
import {jwtDecode} from 'jwt-decode';


function create() {
	let token ="";
	useEffect(() => {
		  token = localStorage.getItem("jwtToken");
		  if(token){
			const decoded = jwtDecode(token);
			const currentTime = Date.now()/1000;
			if(decoded.exp < currentTime){
			  localStorage.removeItem("jwtToken");
			  console.log("Token expired");
			  navigate("/login");
			}else{
			  console.log("Token Valid for this date");
			}
		  }else{
			navigate("/login");
		  }

		},[]);
	const [formData, setFormData] = useState({
		title:"",
		content:"",
		category:"",
	}); 
	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData({ ...formData,[name]:value});
		// console.log(formData);
	};
	const handleCreate = async (e) => {
		e.preventDefault();
		console.log(formData);
		if (!token) {
        console.error("No token found. User must be logged in.");
        return;
    }

	try {
	} catch (error) {
		console.error("Error creating the blog:", error);
	}

	};
	const navigate = useNavigate();
		
  return (
    <div>
      <Navbar />
      <div className="p-6 m-6 bg-gray-300 w-full">
        <h1 className="text-4xl font-bold left-0">Create Page</h1>
        <form onSubmit={handleCreate}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* Title Input */}
                <div className="sm:col-span-4">
                  <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                    Title
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                        Title name
                      </div>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Input */}
                <div className="col-span-full">
                  <label htmlFor="content" className="block text-sm/6 font-medium text-gray-900">
                    Content
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="content"
                      id="content"
                      rows="3"
                      onChange={handleChange}
                      value={formData.content}
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                  <p className="mt-3 text-sm/6 text-gray-600">Write about your Content</p>
                </div>

                {/* Category Select */}
                <div className="col-span-full">
                  <label htmlFor="category" className="block text-sm/6 font-medium text-gray-900">
                    Category
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option value="">Select the Category</option>
                      <option value="Cricket">Cricket</option>
                      <option value="Football">Football</option>
                      <option value="Basketball">Basketball</option>
                      <option value="Tennis">Tennis</option>
                      <option value="Baseball">Baseball</option>
                      <option value="Hockey">Hockey</option>
                      <option value="Golf">Golf</option>
                      <option value="Rugby">Rugby</option>
                      <option value="Athletics">Athletics</option>
                      <option value="Swimming">Swimming</option>
                      <option value="Boxing">Boxing</option>
                      <option value="Cycling">Cycling</option>
                      <option value="Wrestling">Wrestling</option>
                      <option value="Gymnastics">Gymnastics</option>
                      <option value="MMA">MMA</option>
                      <option value="Table Tennis">Table Tennis</option>
                      <option value="Badminton">Badminton</option>
                      <option value="Snooker/Pool">Snooker/Pool</option>
                      <option value="Chess">Chess</option>
                      <option value="Motorsports">Motorsports</option>
                      <option value="Volleyball">Volleyball</option>
                      <option value="Skating">Skating</option>
                      <option value="Esports">Esports</option>
                    </select>
                  </div>
                </div>

                {/* Image Upload */}
                <div className="col-span-full">
                  <label htmlFor="image" className="block text-sm/6 font-medium text-gray-900">
                    Upload Photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <svg
                        className="mx-auto size-12 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="mt-4 flex text-sm/6 text-gray-600">
                        <label
                          htmlFor="image"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                        >
                          <span>Upload a Photo</span>
                          <input
                            id="image"
                            name="image"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default create;
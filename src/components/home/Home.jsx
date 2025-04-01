import React, { useEffect } from 'react'
import Left from "./CategorySection";
import Right from "./RecommendSection";
import Blogs_Content from './Blogs_Content';  
import Navbar from '../Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation , useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";


function Home() {
  const location  = useLocation();
  const navigate = useNavigate();
    const notifySuccessLogin = () => toast.success('Logged in successfully!');
    useEffect(() => {
      const token = localStorage.getItem("jwtToken");
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
      }
    },[]);

    useEffect(() => {
      if(location.state && location.state.lginSuccess){
        notifySuccessLogin();
      }
    },[location.state]);
  return (

    <div>
      <ToastContainer
            position="top-right"
            theme="dark"
            autoClose={5000} // Auto close after 5 seconds
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
      <Navbar />
      <div className=' px-10 w-screen grid-cols-1  pt-5 md:flex md:space-x-16 '>
        <div className='md:w-2/3 flex-col'> 
          {/* <Left  /> */}
          <div> <Blogs_Content /> </div>
        </div>
        {/* <div className=' hidden md:block md:w-full'><Right  /></div> */}
    </div>
    </div>
  )
}

export default Home

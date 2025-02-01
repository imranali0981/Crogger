import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import { useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';


function create() {
	const navigate = useNavigate();
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
		  }else{
			navigate("/login");
		  }

		},[]);
  return (
	<div>
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for the fixed Navbar */}
        <h1>Create Page</h1>
		<form>
			
		</form>
      </div>
    </div>
  )
}

export default create;
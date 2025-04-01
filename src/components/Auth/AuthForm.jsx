import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { GrFormViewHide , GrFormView } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const notifyErrorLogin = () => toast.error('Error logging in!');
  const notifySuccessSignup = () => toast.success('Signed up successfully!');
  const notifyErrorSignup = () => toast.error('Error signing up!');
  const confirmPasswordError = () => toast.error('Password and Confirm Password not matched!');



  const handleSlide = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginSubmission = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post('http://localhost:5000/api/user/login/', { email, password });
      if (resp.status === 200) { 
        const token = resp.data.token;
        console.log("token: ----> ", token);
        localStorage.setItem("jwtToken", token);
        navigate('/', {state: {lginSuccess: true}});
      }
    } catch (e) {
      notifyErrorLogin();
      console.log("Login Failed:", e);
    }
  };

  const handleSignupSubmission = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Password and Confirm Password not matched!");
      confirmPasswordError();
      return;
    }
    try {
      const resp = await axios.post('http://localhost:5000/api/user/register/', { username: name, email, password });
      if (resp.status === 200) {
        notifySuccessSignup();
        setIsLogin(true);
      }
    } catch (e) {
      notifyErrorSignup();
      console.log("Signup Failed:", e.response ? e.response.data : e.message);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google Login");
    window.location.href = 'http://localhost:5000/api/auth/google/';
    const checkForToken = setInterval(() => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
      if(token){
        console.log("Token is here: ",token);
        clearInterval(checkForToken);
        localStorage.setItem('jwtToken',token);
        navigate('/', {state: {lginSuccess: true}});
      }
    }, 500);
  };

  return (
    <div className="wrapper">
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

      <div className="title-text">
        <div className={`title ${isLogin ? 'login' : ''}`}>Login Form</div>
        <div className={`title ${!isLogin ? 'signup' : ''}`}>Signup Form</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked={isLogin} readOnly />
          <input type="radio" name="slide" id="signup" checked={!isLogin} readOnly />
          <label htmlFor="login" className="slide login" onClick={handleSlide}>Login</label>
          <label htmlFor="signup" className="slide signup" onClick={handleSlide}>Signup</label>
          <div className="slider-tab"></div>
        </div>

        <div className="form-inner">
          {/* Login Form */}
          <form className={`login ${!isLogin ? 'hidden' : ''}`} onSubmit={handleLoginSubmission}>
            <div className="field">
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="field flex items-center">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              <div className='text-2xl hover:cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <GrFormViewHide /> : <GrFormView />}
              </div>
            </div>
            <div className="pass-link">
              <a href="#">Forgot password?</a>
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Login" />
            </div>
            <div 
              className="flex items-center justify-center p-3 m-4 border border-gray-300 font-sans rounded-[15px] hover:bg-black hover:text-white transition duration-300 ease-in-out cursor-pointer font-semibold text-gray-500"
              onClick={handleGoogleLogin}
            >
              <label className="flex items-center space-x-2">
                <span>Login with Google</span>
                <div className="text-xl"><FcGoogle /></div>
              </label>
            </div>
            <div className="signup-link">
              Not a member? <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(false); }}>Signup now</a>
            </div>
          </form>

          {/* Signup Form */}
          <form className={`signup ${isLogin ? 'hidden' : ''}`} onSubmit={handleSignupSubmission}>
            <div className="field">
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="field">
              <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="field flex items-center">
              <input type={showPassword ? 'text' : 'password'} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <div className='text-2xl hover:cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <GrFormViewHide /> : <GrFormView />}
              </div>
            </div>
            <div className="field">
              <input type={showPassword ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm password" required />
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Signup" />
            </div>
            <div 
              className="flex items-center justify-center p-3 m-4 border border-gray-300 font-sans rounded-[15px] hover:bg-black hover:text-white transition duration-300 ease-in-out hover:cursor-pointer font-semibold text-gray-500"
              onClick={handleGoogleLogin}
            >
              <label className="flex items-center space-x-2">
                <span>Login with Google</span>
                <div className="text-xl"><FcGoogle /></div>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from "./components/Auth/AuthForm";
import PrivateRoute from "./components/PrivateRoute";
import Create from "./components/create/create";
import GoogleAuthHandler from "./components/Auth/GoogleAuthHandler";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/signup" element={<AuthForm />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
           <Route path="/auth-success" element={<GoogleAuthHandler />} />
          <Route path="/create" element={
            <PrivateRoute>
              <Create />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

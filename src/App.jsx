import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from "./components/Auth/AuthForm";
import PrivateRoute from "./components/PrivateRoute";
import Create from "./components/create/create";

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
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

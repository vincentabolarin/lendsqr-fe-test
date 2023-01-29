import './App.scss';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.tsx";
import Login from "./pages/login.tsx";
import Dashboard from "./pages/dashboard.tsx"
import Users from './pages/user.tsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/user" element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default App;

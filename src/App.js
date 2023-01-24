import './App.scss';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login.tsx";
import Users from './pages/users.tsx';
import Home from './pages/home.tsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default App;

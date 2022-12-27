import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Orders from './pages/Orders';
import Customer from "./pages/Customer"
import Login from './pages/Login';
import { useEffect, useState } from 'react';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Home />} />
          <Route path='/' element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

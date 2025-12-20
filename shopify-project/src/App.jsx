import { HomePage } from './pages/HomePage'
import { CheckOut } from './pages/CheckOut/CheckOut';
import { Orders } from './pages/Orders';
import { Tracking } from './pages/TrackingPage';
import { Routes, Route } from 'react-router';
import { NotFound } from './pages/NotFoundPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
      .then((response) => {
        setCart(response.data);
      })
  }, []);
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage cart={cart} />} />
        <Route path='checkout' element={<CheckOut cart={cart}/>} />
        <Route path='orders' element={<Orders cart={cart}/>} />
        <Route path='tracking' element={<Tracking cart={cart}/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

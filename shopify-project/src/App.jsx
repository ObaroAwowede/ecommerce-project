import { HomePage } from './pages/home/HomePage'
import { CheckOut } from './pages/CheckOut/CheckOut';
import { Orders } from './pages/orders/Orders';
import { Tracking } from './pages/TrackingPage';
import { Routes, Route } from 'react-router';
import { NotFound } from './pages/NotFoundPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   axios.get('/api/cart-items?expand=product')
  //     .then((response) => {
  //       setCart(response.data);
  //     })
  // }, []);


  // used async await
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data)
    }

    getData()
  }, []);


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage cart={cart} />} />
        <Route path='checkout' element={<CheckOut cart={cart} />} />
        <Route path='orders' element={<Orders cart={cart} />} />
        <Route path="tracking/:orderId/:productId" element={<Tracking cart={cart} />} />
        <Route path='*' element={<NotFound cart={cart} />} />
      </Routes>
    </>
  )
}

export default App

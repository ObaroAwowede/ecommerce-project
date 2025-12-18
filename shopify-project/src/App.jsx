import { HomePage } from './pages/HomePage'
import { CheckOut } from './pages/CheckOut/CheckOut';
import { Orders } from './pages/Orders';
import { Tracking } from './pages/TrackingPage';
import { Routes, Route } from 'react-router';
import { NotFound } from './pages/NotFoundPage';
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='checkout' element={<CheckOut />}/>
        <Route path='orders' element={<Orders />}/>
        <Route path='tracking' element={<Tracking />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>     
    </>
  )
}

export default App

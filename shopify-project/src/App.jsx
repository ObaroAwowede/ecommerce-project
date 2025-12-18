import { HomePage } from './pages/HomePage'
import { CheckOut } from './pages/CheckOut';
import { Orders } from './pages/Orders';
import { Routes, Route } from 'react-router';
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='checkout' element={<CheckOut />}/>
        <Route path='orders' element={<Orders />}/>
      </Routes>     
    </>
  )
}

export default App

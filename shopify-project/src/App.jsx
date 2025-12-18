import { HomePage } from './pages/HomePage'
import { CheckOut } from './pages/CheckOut';
import { Routes, Route } from 'react-router';
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='checkout' element={<CheckOut />}/>
      </Routes>     
    </>
  )
}

export default App

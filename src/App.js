import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom'

import Navbar from './Navbar';
import RecipeDetails from './RecipeDetails';
import Footer from './Footer';
import Home from './Home';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </> 
  )
}

function App() {
  return <div className='bg-black'>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route index element={<Home />} />
      <Route path='/recipe/:id' element={<RecipeDetails/>} />
    </Routes>
  </div>
}

export default App;

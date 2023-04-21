import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import Register from './pages/Register'
import TestNav from './redux/TestNav'

const MyRoutes = () => {
  return (
    <Router>
        <Routes>
           <Route path='/' element={<Layouts/>}>
            <Route index element={<Home/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='productdetails/:productId' element={<ProductDetails/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='redux/cart' element={<TestNav/>}/>
           </Route>
        </Routes>

    </Router>
  )
}

export default MyRoutes
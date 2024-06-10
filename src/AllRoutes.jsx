import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import ForgetPassword from './pages/Login/ForgetPassword'
import ResetPassword from './pages/Login/ResetPassword'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/forget-password' element = {<ForgetPassword/>} />
            <Route path='/reset-password' element = {<ResetPassword/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Login, Signup, Upload } from '../pages'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default AllRoutes

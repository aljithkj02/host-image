import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import { Home, Login, Signup, Upload } from '../pages'
import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
  return (
      <Container maxW={['95%', '90%', '85%']} py={5}>
        <Routes>
              <Route path="/" element={<PrivateRoute> <Home /> </PrivateRoute>} />
              <Route path="/upload" element={<PrivateRoute> <Upload /> </PrivateRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
        </Routes>
      </Container>
  )
}

export default AllRoutes

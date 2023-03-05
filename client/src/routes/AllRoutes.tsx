import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import { Home, Login, Signup, Upload } from '../pages'

const AllRoutes = () => {
  return (
      <Container maxW={['95%', '90%', '85%']} py={5}>
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
        </Routes>
      </Container>
  )
}

export default AllRoutes

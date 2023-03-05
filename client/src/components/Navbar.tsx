import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Box display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={4} px={10} bgColor="#ECF2FF" 
      >
        <Box>
            <Text>Text</Text>
        </Box>

        <Box display="flex" gap={8}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/upload">Upload</NavLink>
            <NavLink to="/login">Login</NavLink>
        </Box>
      </Box>
    </nav>
  )
}

export default Navbar

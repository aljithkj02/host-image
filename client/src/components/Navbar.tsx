import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useData, useAction } from '../hooks';

const Navbar = () => {
  const { isAuth, name } = useData();
  const { logout, dispatch } = useAction();
  const logoutUser = () => {
    dispatch(logout());
  }
  return (
    <nav>
      <Box display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={4} px={10} bgColor="#ECF2FF" 
      >
        <Box>
            <Text>{ name || 'User'}</Text>
        </Box>

        <Box display="flex" gap={8}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/upload">Upload</NavLink>
            {
              isAuth? (
                <Button size="sm" colorScheme="red"
                  onClick= { logoutUser }
                >Logout</Button>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )
            }
        </Box>
      </Box>
    </nav>
  )
}

export default Navbar

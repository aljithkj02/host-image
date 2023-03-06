import React, { useState } from 'react'
import { Box, Text, Button, useToast } from '@chakra-ui/react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useData, useAction } from '../hooks';
import Confirm  from './Confirm';

const Navbar = () => {
  const [ isOpen, setIsOpen] = useState(false);
  const { isAuth, name } = useData();
  const { logout, dispatch } = useAction();
  const navigate = useNavigate();
  const toast = useToast()
  
  const logoutUser = () => {
    toast({
        title: 'User logout successfully!',
        status: 'success',
        position: 'top',
        isClosable: true,
    })
    handleOpen();
    dispatch(logout());
  }

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
      { isOpen && <Confirm handlerNo={handleOpen} handlerYes={ logoutUser } 
        message="Do you want to logout?" 
      />}
      <Box display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={4} px={10} bgColor="#ECF2FF" 
      >
        <Box>
            <Text fontSize="xl" fontWeight="500" cursor="pointer"
              onClick={ () => navigate('/') }
            >{ name || 'User'}</Text>
        </Box>

        <Box display="flex" gap={8}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/upload">Upload</NavLink>
            {
              isAuth? (
                <Button size="sm" colorScheme="red"
                  onClick= { handleOpen }
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

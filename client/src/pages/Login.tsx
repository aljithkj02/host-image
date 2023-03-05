import React from 'react';
import { Box, Text, Input, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Login = () => { 
  return (
    <Box display="flex" justifyContent="center" alignItems="center" h="80vh">
      <Box w={["95%", "90%", "70%", "50%"]} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" p="70px 50px" borderRadius="lg"
        display="flex" flexDir="column" gap="20px"
      >
        <Text fontSize="3xl" textAlign="center">Login</Text>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <Input type="email" placeholder="Email" variant="flushed" />
          <Input type="password" placeholder="Password" variant="flushed" />
          <Button mt={6} type="submit" colorScheme='messenger'
            p={5} fontSize="16px"
          >Login</Button>
          <Text color="gray" fontSize="sm" textAlign="center"
          >Don't have an account? 
            <Link to="/signup" style={{ marginLeft: '5px', color: 'blue', fontWeight: '500' }}
            >Signup</Link>
          </Text>
        </form>
      </Box>
    </Box>
  )
}

export default Login

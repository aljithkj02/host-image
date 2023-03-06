import React, { useState } from 'react'
import { Box, Text, Input, Button, useToast } from '@chakra-ui/react';
import axios from 'axios';
import config from '../config';
import { useAction } from '../hooks';

const Upload = () => {
  const [ image, setImage] = useState(null);
  const { loadingOn, loadingOff, dispatch } = useAction();
  const toast = useToast();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loadingOn());
      const formData = new FormData();
      formData.append('image', image);
      const token = localStorage.getItem('token') || 'token';
      const res = await axios.post(`${config.API_URL}/api/gallery/upload`, formData, {
        headers: {
          'authorization': `Bearer ${token}`
        }
      });
      setImage(null);
      if(res?.data?.status){
          toast({
              title: res?.data?.message,
              status: 'success',
              position: 'top',
              isClosable: true,
          })
      }
      dispatch(loadingOff());
      
    } catch (err) {
      dispatch(loadingOff());
      toast({
          title: err?.response.data.message,
          status: 'error',
          position: 'top',
          isClosable: true,
      })
      console.log(err?.response.data.message);
    }
  }
  return (
    <Box display="flex" justifyContent="center" alignItems='center' h="80vh">
      <Box display="flex" flexDir="column" gap={10} borderRadius="lg"
        w={["95%", "90%", "70%", "50%"]} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" p="70px 50px" 
      >
        <Text fontSize="3xl" textAlign="center">Upload image</Text>
          <form onSubmit={ handleSubmit }>
            <Box display={"flex"} gap={5} flexDir={["column", "column", "row"]} 
              alignItems={["none", "none", "center"]} justifyContent="space-between"
            >
                <input type="file" name="image" onChange={ handleImageChange } required={true} />
                <Button type='submit' colorScheme='teal' variant='solid' px="20px">Upload</Button>
            </Box>
          </form>
      </Box>
    </Box>
  )
}

export default Upload

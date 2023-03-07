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
    storeImage();
  }

  const storeImage = async () => {
    try {
      dispatch(loadingOn());
      // Request for getting signature
      const token = localStorage.getItem('token') || 'token';
      const signatureResponse = await axios.get(`${config.API_URL}/api/gallery/get-signature`, {
        headers: {
          'authorization': `Bearer ${token}`
        }
      });

      const data = new FormData();
      data.append("file", image);
      data.append("api_key", config.CLOUD_API_KEY);
      data.append("signature", signatureResponse.data.signature);
      data.append("timestamp", signatureResponse.data.timestamp);

      // Storing image in cloudinary storage
      const cloudinaryResponse = await axios.post(`https://api.cloudinary.com/v1_1/${config.CLOUD_NAME}/auto/upload`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          console.log(percentCompleted);
        } 
      });

       // send the image info back to our server
      const photoData = {
          public_id: cloudinaryResponse.data.public_id,
          version: cloudinaryResponse.data.version,
          signature: cloudinaryResponse.data.signature,
          image: cloudinaryResponse.data.secure_url
      }

      postImage(photoData);

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

  const postImage = async (photoData) => {
    try {
      const token = localStorage.getItem('token') || 'token';
      const res = await axios.post(`${config.API_URL}/api/gallery/upload`, photoData, {
        headers: {
          'authorization': `Bearer ${token}`
        }
      });
      if(res?.data?.status){
          toast({
              title: res?.data?.message,
              status:'success',
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

import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Text, Input, Button, Image, useToast } from '@chakra-ui/react';
import axios from 'axios';
import config from '../config';
import { Confirm } from '../components';
import { useAction } from '../hooks';

const Details = () => {
    const { id } = useParams();
    const [ data, setData ] = useState({});
    const [ isOpen, setIsOpen ] = useState(false);

    const { loadingOff, loadingOn, dispatch } = useAction();
    const navigate = useNavigate();
    const toast = useToast()

    useEffect(() => {
      fetchImages();
    }, [])

    const fetchImages = async () => {
      try {
        dispatch(loadingOn());
        const token = localStorage.getItem('token') || 'token';
        const response = await axios.get(`${config.API_URL}/api/gallery/thumbnails/${id}`,{
          headers: {
            'authorization': `Bearer ${token}`
          }
        });
        if(response?.data?.status){
            setData(response.data.data[0]);
            dispatch(loadingOff());
        }
      } catch (err) {
        dispatch(loadingOff());
        console.log(err?.response?.data?.message);
      }
    }

    const handleOpen = () => {
      setIsOpen(!isOpen);
    }

    const deletePost = async () => {
      try {
        dispatch(loadingOn());
        const token = localStorage.getItem('token') || 'token';
        const response = await axios.delete(`${config.API_URL}/api/gallery/delete-image/${id}`,{
          headers: {
            'authorization': `Bearer ${token}`
          }
        });
        if(response?.data?.status){
          toast({
              title: response?.data?.message,
              status: 'success',
              position: 'top',
              isClosable: true,
          })
          handleOpen();
          navigate('/');
        }
      } catch (err) {
        dispatch(loadingOff());
        console.log(err);
        console.log(err?.response?.data?.message);
      }
    }

  return (
    <Box>
      { isOpen && <Confirm handlerNo={ handleOpen } handlerYes={ deletePost }
        message="Do you want to delete?"
      /> }
      <Text fontSize="2xl" textAlign="center">Thumbnails</Text>
      <Box display="flex" gap="20" mt={6}
        flexDir={['column', 'column', 'column', 'row']}
      >
        <Box>
          <Image src={ data.thumbnail_3} />
        </Box>
        <Box>
          <Image src={ data.thumbnail_2} />
        </Box>
        <Box>
          <Image src={ data.thumbnail_1} />
        </Box>
      </Box>

      <Box textAlign="center" mt={6}>
        <Button colorScheme="red"
          onClick={ handleOpen }
        >Delete image</Button>
      </Box>
    </Box>
  )
}

export default Details

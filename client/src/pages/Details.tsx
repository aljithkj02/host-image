import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Box, Text, Input, Button, Image } from '@chakra-ui/react';
import axios from 'axios';
import config from '../config';
import { useAction } from '../hooks';

const Details = () => {
    const { id } = useParams();
    const [ data, setData ] = useState({});

    const { loadingOff, loadingOn, dispatch } = useAction();

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
  return (
    <Box>
      <Box display="flex" gap="20"
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
    </Box>
  )
}

export default Details

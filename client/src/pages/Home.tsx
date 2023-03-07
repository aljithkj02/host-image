import React, { useEffect, useState } from 'react'
import { Box, Text, Input, Button } from '@chakra-ui/react';
import axios from 'axios';
import config from '../config';
import { SingleImage } from '../components';
import { useAction } from '../hooks';

const Home = () => {
  const [data, setData] = useState([]);
  const { loadingOff, loadingOn, dispatch } = useAction();

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      dispatch(loadingOn());
      const token = localStorage.getItem('token');
      const response = await axios.get(`${config.API_URL}/api/gallery`, {
        headers: {
          'authorization': `Bearer ${token}`,
        },
      })
      if(response?.data?.status){
        // console.log(response.data)
        setData(response.data.data);
      }
      dispatch(loadingOff());
    } catch (err) {
      dispatch(loadingOff());
      console.log(err);
    }
  }

  return (
    <Box>
      <Text fontSize="2xl" textAlign="center">Images</Text>
      <Box display="grid" gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap="20px"
      >
        {
          data.map(({ _id, img }) => (
            <SingleImage key={_id} img={img} _id={_id} />
          ))
        }
      </Box>
    </Box>
  )
}

export default Home

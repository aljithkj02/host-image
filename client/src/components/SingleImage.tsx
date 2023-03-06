import React from 'react'
import { Box, Text, Input, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

type singleImageType = {
    img: string,
    _id: string
}

const SingleImage = ({ img, _id }: singleImageType) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/details/${_id}`);
    }
  return (
    <Box mt="6" key={_id} borderRadius="20px" overflow="hidden"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" cursor="pointer"
        onClick={handleClick}
    >
        <img src={img} 
            w="full" h="full"
        />
    </Box>
  )
}

export default SingleImage

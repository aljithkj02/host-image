import React from 'react'
import { Box, Text, Input, Button } from '@chakra-ui/react';

const Upload = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems='center' h="80vh">
      <Box display="flex" flexDir="column" gap={10} borderRadius="lg"
        w={["95%", "90%", "70%", "50%"]} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" p="70px 50px" 
      >
        <Text fontSize="3xl" textAlign="center">Upload image</Text>
        <Box display={"flex"} gap={5} flexDir={["column", "column", "row"]}>
          <Input type="file" />
          <Button colorScheme='teal' variant='solid' px="20px">Upload</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Upload

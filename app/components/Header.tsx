"use client"
import { Heading, Box, Text } from '@chakra-ui/react'
import React from 'react'

function Header() {
  return (
    <Box bgColor="#6B46C1" height="400" textAlign={{base:"left", md:"left", lg:"center"}} pl={"15px"} pt={{base:"70px", sm:"90px", md:"100px", lg:"90px"}}
     pb={{base:"50px", md:"70px", lg:"150px"}}>
        <Heading fontSize={{base:"30px", md:"35px", lg:"48px"}} fontWeight="800" color="#F7FAFC" >Simple pricing for your business</Heading>
        <Text fontSize={{base:"18px", md:"20px", lg:"24px"}} fontWeight="500" color="#F7FAFC" opacity="0.8" pt="10px">Plans that are carefully crafted to suit your business.</Text>
    </Box>
  )
}

export default Header
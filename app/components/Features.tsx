import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import FeeSetupIcon from '../icons/FeeSetupIcon'
import StartIcon from '../icons/StartIcon'
import SubscriptionIcon from '../icons/SubscriptionIcon'

export default function Features() {
  return (
    <Box maxW={"800px"}mx={{base:"15px", md:"20px", lg:"auto"}} my={"40px"}>
        <Flex gap={"15px"} direction={{base:"column", md:"column", lg:"row"}}>
        <HStack>
            <Icon as={StartIcon} />
            <Text fontWeight={"700"} fontFamily={"Inter"} fontSize={"18px"} ps="10px">30 Days money back Guarantee</Text>
        </HStack>
        <HStack>
            <Icon as={FeeSetupIcon} />
            <Text fontWeight={"700"} fontFamily={"Inter"} fontSize={"18px"} ps="10px">No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack>
            <Icon as={SubscriptionIcon} />
            <Text fontWeight={"700"} fontFamily={"Inter"} fontSize={"18px"} ps="10px">No monthly subscription
            Pay once and for all</Text>
        </HStack>
        </Flex>
       
    </Box>
  )
}
